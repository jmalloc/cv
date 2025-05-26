package main

import "net/http"

func main() {
	if err := http.ListenAndServe("0:8080", http.FileServer(http.Dir("./docs"))); err != nil {
		panic(err)
	}
}
