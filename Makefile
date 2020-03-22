all: build deploy

run:
	@blogctl server --static=./static

build:
	@blogctl build

deploy:
	@blogctl deploy
