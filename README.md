# forbidden [![Build Status](https://travis-ci.org/Zertz/forbidden.png)](https://travis-ci.org/Zertz/forbidden) [![NPM version](https://badge.fury.io/js/forbidden.png)](http://badge.fury.io/js/forbidden)

Middleware to return 403 (Forbidden) on the specified HTTP method.

```js
npm i forbidden --save
```

## Usage

```js
const forbidden = require('forbidden')
const router = require('express').Router()

router.use('/path', forbidden('delete'))

// DELETE /path 403 (Forbidden)
```

## Contributing

I'd love for you to contribute and make forbidden even better than it is today!

### Getting started

```
git clone https://github.com/Zertz/forbidden.git
npm install
npm test
```

### Guidelines

- [Standard](https://github.com/feross/standard) style
- Use ES2015 features when appropriate
