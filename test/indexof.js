var assert = require('timoxley-assert')
var domify = require('component-domify')
var indexOf = require('indexof')

it('should return -1 element has no parent', function() {
  var el = domify('<ul></ul>')[0]
  el = el.parentNode && el.parentNode.removeChild(el) // bugfix for domify
  assert(indexOf(el) === -1)
})

it('should return 0 if first in list', function() {
  var dom = domify('<ul><li>1</li></ul>')[0]
  var el = dom.children[0]
  assert.strictEqual(indexOf(el), 0)
})

it('should return 1 if second in list', function() {
  var dom = domify('<ul><li>1</li><li>2</li></ul>')[0]
  var el = dom.children[1]
  assert.strictEqual(indexOf(el), 1)
})
