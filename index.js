"use strict"

const recursiveFilter = require("recursive-filter")

module.exports = (obj, predicate) => recursiveFilter(obj, (...params) => !predicate(...params))
