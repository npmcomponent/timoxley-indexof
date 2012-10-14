# indexOf

Get index of a DOM element within its parent.

## Installation

```
$ component install timoxley/indexof
```

## Example

```js
  /*
    Html Fragment:
    <ul>
      <li>0</li>
      <li id="target">1</li>
      <li>2</li>
    </ul>
  */

  var indexOf = require('indexof')
  var el = document.getElementById('#target')

  // 0-based index inside the ul
  indexOf(el) // => 1

  // returns -1 if does not have a parent, e.g. the 'html' node.
  indexOf(document.body.parentNode) // => -1

```

## Credit

Code adapted from jQuery.
