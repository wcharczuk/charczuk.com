all: build deploy

server:
	@blogctl server --static=./static

build: 
	@blogctl build

deploy:
	@blogctl deploy
