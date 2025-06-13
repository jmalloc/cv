serve:
	go run server.go

precommit:
	git add docs/index.html

	for f in docs/assets/*; do \
		hash=$$(sha256sum "$$f" | cut -c1-7); \
		name=$$(basename "$$f"); \
		sed -i '' -E "s|(assets/$$name)(\\?[0-9a-f]{7})?|\\1?$$hash|g" docs/index.html; \
	done
