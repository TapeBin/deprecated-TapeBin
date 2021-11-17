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

.PHONY: build-clear
build-clear:
	docker-compose -f docker-compose.dev.yml down
	docker-compose -f docker-compose.dev.yml build --no-cache
	docker-compose -f docker-compose.dev.yml up

.PHONY: down
down:
	docker-compose -f docker-compose.dev.yml down