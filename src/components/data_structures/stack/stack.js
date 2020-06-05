import Node from '../node'

class Stack {
  /**
   * Creates a new Stack with the given information.
   * @param {Array} information All the information each node is going to have.
   */
  constructor(information = []) {
    this.startingNode = null
    this.size = 0

    this.initializeStack(information)
  }

  /**
   * Initializes the nodes in the stack.
   * @param {Array} information All the information each node is going to have.
   */
  initializeStack(information) {
    information.forEach((element) => {
      this.push(element)
    })
  }

  /**
   *
   * @param {*} information The information of the node being added to the stack.
   */
  push(information) {
    let node = new Node(this.size, this.startingNode, information)
    this.startingNode = node
    this.size++
  }

  /**
   * Pops the next element in the stack.
   * @returns {Node} The popped node.
   * @throws If the stack is empty
   */
  pop() {
    if (this.size === 0) {
      throw new Error('The stack is empty')
    }

    let poppedNode = this.startingNode
    this.startingNode = this.startingNode.getNextNode()
    this.size--

    return poppedNode
  }

  getStackAsArray() {
    let actualNode = this.startingNode
    let nodes = []

    while (actualNode) {
      nodes.push(actualNode)
      actualNode = actualNode.getNextNode()
    }

    return nodes
  }
}

export default Stack
