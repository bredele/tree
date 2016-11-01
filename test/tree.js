/**
 * Test dependencies.
 */

var test = require('tape')
var tree = require('..')

test('should convert an array into a tree', assert => {
  assert.plan(1)
  assert.deepEqual(tree(['root', 'male', 'canada']), {
    name: 'root',
    children : [
      {
        name: 'male',
        children : [
          {
            name: 'canada',
            children: []
          }
        ]
      }
    ]
  })
})
