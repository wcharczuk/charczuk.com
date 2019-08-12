all: build deploy

server:
	@blogctl server --static=./static --cached

build:
	@blogctl build

deploy:
	@blogctl deploy
