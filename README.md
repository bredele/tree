# Tree

  [![pledge](https://bredele.github.io/contributing-guide/community-pledge.svg)](https://github.com/bredele/contributing-guide/blob/master/community.md)

A tree is an arborescence representation in which two nodes are connected by exactly one path (or leave). This module converts an array of path into a unique object tree representation.

```js
// array representation
['root', 'female']

// tree representation
{
  name: 'root',
  children: [
    {
      name: 'female',
      children: []
    }
  ]
}
```

Please see [specs](/test) for more information.

## Usage

```js
var tree = require('tree')

// generate a tree from a single path (or leave)
tree(['root', 'male', 'canada'])


// generate a tree from multiple leaves
var leaves = [
  ['root', 'male', 'canada'],
  ['root', 'female'],
  ['root', 'female', 'france'],
  ['root', 'female', 'canada']
]
tree(...leaves)
```
As seen above, Tree also accepts multiple leaves in order to create a unique tree of an entire graph.

## Installation

```shell
npm install bredele/tree --save
```

## Question

For questions and feedback please use our [twitter account](https://twitter.com/bredeleca). For support, bug reports and or feature requests please make sure to read our
<a href="https://github.com/bredele/contributing-guide/blob/master/community.md" target="_blank">community guideline</a> and use the issue list of this repo and make sure it's not present yet in our reporting checklist.


## Contribution

Tree is an open source project and training exercise. If you want to participate please make sure to read our <a href="https://github.com/bredele/contributing-guide/blob/master/community.md" target="_blank">guideline</a> before making a pull request.

## License

The MIT License (MIT)

Copyright (c) 2016 Olivier Wietrich

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
