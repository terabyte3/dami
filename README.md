# [dami]

**💰 inline cache proxy for http resources**

slow loading resources (images, scripts, etc) can break your code. fix this by caching them.

## [run locally]
```sh
$ git clone https://github.com/terabyte3/dami
$ cd dami
$ bun run index.js
[i] starting dami on port 8000
```

## [docker run]
```sh
$ docker build -t dami .
$ docker run -p 8000:8000 dami
Starting delay on port 8000
```

## [usage]
```sh
curl localhost:8000/http://mysite.com/image.gif
```
