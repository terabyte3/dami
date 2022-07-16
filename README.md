# [dami]

**💰 inline cache proxy for http resources**
slow loading resources (images, scripts, etc) can break your code. fix this by caching them.

## run locally
```sh
$ git clone https://github.com/terabyte3/dami
$ cd dami
$ bun run index.js
[i] starting dami on port 8000
```

## docker installation
```sh
$ docker build -t deelay .
$ docker run -p 4567:4567 deelay
Starting delay on port 4567
```

## Usage
```sh
curl localhost:4567/1000/http://mysite.com/image.gif
```

### Tests
```sh
node test/indexTest.js
```
