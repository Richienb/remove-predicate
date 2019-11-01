# Remove predicate [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/remove-predicate/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/remove-predicate)

Remove items from an object based on a predicate.

[![NPM Badge](https://nodei.co/npm/remove-predicate.png)](https://npmjs.com/package/remove-predicate)

## Install

```sh
npm install remove-predicate
```

## Usage

```js
const removePredicate = require("remove-predicate");

removePredicate(
    {
        a: {
            _a: "a",
            b: 1
        },
        _b: ["b"]
    },
    (_value, key) => key.startsWith("_")
);
//=> { a: { b: 1 } }
```

## API

### removePredicate(obj, predicate)

#### obj

Type: `object or array`

The object or array to handle.

#### predicate

Type: `(value, key) => boolean-convertable`

The predicate to compare the items to.
