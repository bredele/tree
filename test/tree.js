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

test('should convert multiple array into a tree', assert => {
  assert.plan(1)
  var leaves = [
    ['root', 'male', 'canada'],
    ['root', 'female'],
    ['root', 'female', 'france'],
    ['root', 'female', 'canada']
  ]
  assert.deepEqual(tree(...leaves), {
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
      }, {
        name: 'female',
        children: [
          {
            name: 'france',
            children: []
          }, {
            name: 'canada',
            children: []
          }
        ]
      }
    ]
  })
})
