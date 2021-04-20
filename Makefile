all: build

run:
	@blogctl server --static=./static

build:
	@blogctl build

deploy:
	@blogctl deploy
