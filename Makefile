up-production:
	docker-compose up -d

up:
	docker-compose -f docker-compose.dev.yml up

build:
	docker-compose build

build-plain:
	docker-compose build --progress=plain