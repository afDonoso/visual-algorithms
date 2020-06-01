import Stack from '../stack/stack'

let stack

describe('Stack structure', () => {
  it('Creating an empty stack', () => {
    stack = new Stack()

    expect(stack.size).toBe(0)
    expect(stack.startingNode).toBe(null)
  })

  it('Creating a filled stack', () => {
    stack = new Stack([1, 2, 3])

    expect(stack.size).toBe(3)

    //Checking that the first node is the last element in the array.
    expect(stack.startingNode.getObject()).toBe(3)
  })

  it('Pushing a new element', () => {
    stack.push(4)

    expect(stack.size).toBe(4)

    //Checking that the first node changed to the new element
    expect(stack.startingNode.getObject()).toBe(4)
  })

  it('Popping an element', () => {
    let node = stack.pop()

    expect(stack.size).toBe(3)

    //Checks that the popped node was the correct one
    expect(node.getObject()).toBe(4)

    //Checks that the starting node changed to the next in the stack
    expect(stack.startingNode.getObject()).toBe(3)
  })

  it('Popping on an empty stack', () => {
    let stack = new Stack()

    expect(() => {
      stack.pop()
    }).toThrow()
  })

  it('Correct popping order', () => {
    let stack = new Stack([1, 2, 3])
    let stackSize = stack.size
    let result = []

    for (let i = 0; i < stackSize; i++) {
      result.push(stack.pop().getObject())
    }

    expect(stack.size).toBe(0)

    //Checks that the order of the resulting array is reversed
    let expected = [3, 2, 1]
    for (let i = 0; i < 3; i++) {
      expect(result[i]).toBe(expected[i])
    }
  })
})
