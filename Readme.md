*This repository is a mirror of the [component](http://component.io) module [timoxley/indexof](http://github.com/timoxley/indexof). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/timoxley-indexof`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
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
