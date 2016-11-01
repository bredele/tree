/**
 * Expose 'tree'
 *
 * @param {Array} leaves
 * @return {Object}
 * @api public
 */

module.exports = function(...leaves) {
  var result
  leaves.map(path => {
    var type = path.shift()
    result = tree(path, result || node(type))
  })
  return result
}


/**
 * Create a tree from an array of node path.
 *
 * @param {Array} path
 * @param {Object} root
 * @return {Object}
 * @api public
 */

function tree(path, root) {
  var result = root
  path.map(name => {
    var child = get(root.children, name)
    if(!child) {
      child = node(name)
      root.children.push(child)
    }
    root = child
  })
  return result
}


/**
 * Get node from children with specified name.
 *
 * @param {Array} children
 * @param {String} name
 * @return {Object}
 * @api private
 */

function get(children, name) {
  var child
  children.map(node => {
    if(node.name == name) child = node
  })
  return child
}


/**
 * Create a tree node from a node name.
 *
 * @param {String} name
 * @return {Object}
 * @api private
 */

function node(name) {
  return {
    name: name,
    children: []
  }
}
