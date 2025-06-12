package main

import (
	"context"
	"fmt"
	"net/http"
	"os"
	"os/exec"
	"os/signal"
	"syscall"

	"golang.org/x/sync/errgroup"
)

func main() {
	if err := run(); err != nil {
		fmt.Fprintln(os.Stderr, err)
		os.Exit(1)
	}
}

func run() error {
	ctx, cancel := signal.NotifyContext(
		context.Background(),
		os.Interrupt,
		syscall.SIGTERM,
	)
	defer cancel()

	g, ctx := errgroup.WithContext(ctx)

	g.Go(func() error {
		sass := exec.CommandContext(
			ctx,
			"sass",
			"--watch",
			"--style", "compressed",
			"style.scss", "docs/style.css",
		)

		sass.Stdout = os.Stdout
		sass.Stderr = os.Stderr

		return sass.Run()
	})

	g.Go(func() error {
		s := &http.Server{
			Addr:    ":8080",
			Handler: http.FileServer(http.Dir("./docs")),
		}

		go func() {
			<-ctx.Done()
			s.Close()
		}()

		return s.ListenAndServe()
	})

	return g.Wait()
}
