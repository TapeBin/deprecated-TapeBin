.PHONY: up-production
up-production:
	docker-compose up -d

.PHONY: up 
up:
	docker-compose -f docker-compose.dev.yml up

.PHONY: build
build:
	docker-compose build

.PHONY: build-plain
build-plain:
	docker-compose build --progress=plain