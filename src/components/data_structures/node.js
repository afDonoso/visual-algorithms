class Node {
  /**
   * Creates a new Node
   * @param {Number} id The id of the node.
   * @param {Node} nextNode The next node in the list.
   * @param {*} object The information the node contains.
   */
  constructor(id, nextNode, object) {
    this.id = id
    this.nextNode = nextNode
    this.object = object
  }

  getNextNode() {
    return this.nextNode
  }

  getObject() {
    return this.object
  }

  setNextNode(nextNode) {
    this.nextNode = nextNode
  }

  setObject(object) {
    this.object = object
  }
}

export default Node
