

/**
 * Expose 'tree'
 */

module.exports = tree

function tree(path) {
  var root = node(path.shift())
  var result = root
  path.map(name => {
    var child = node(name)
    root.children.push(child)
    root = child
  })
  return result
}


function node(name) {
  return {
    name: name,
    children: []
  }
}
