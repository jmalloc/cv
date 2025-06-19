-include .makefiles/Makefile
-include .makefiles/pkg/js/v1/Makefile
-include .makefiles/pkg/js/v1/with-yarn.mk

GENERATED_FILES += docs/downloads/james-harris-cv.pdf

run: $(GENERATED_FILES)
	go run server.go

precommit:: docs/downloads/james-harris-cv-full.pdf

docs/index.html: $(wildcard docs/assets/*)
	for f in docs/assets/*; do \
		hash=$$(sha256sum "$$f" | cut -c1-7); \
		name=$$(basename "$$f"); \
		sed -i '' -E "s|(assets/$$name)(\\?[0-9a-f]{7})?|\\1?$$hash|g" docs/index.html; \
	done

docs/downloads/james-harris-cv.pdf: docs/index.html
	node render.js $< $@

docs/downloads/james-harris-cv-full.pdf: docs/index.html
	node render.js $< $@ "$$CV_KEY"

.makefiles/%:
	@curl -sfL https://makefiles.dev/v1 | bash /dev/stdin "$@"
