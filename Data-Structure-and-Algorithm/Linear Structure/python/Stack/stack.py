class Stack:
    def __init__(self):
        self.stack = []
        self.size = 0          
    def push(self, item):
        self.stack.append(item)
        self.size += 1
    # def pop(self, item):
    #     self.stack.pop(item)
    #     self.size -=1
    def stack(self):
        return self.stack

myStack = Stack()
myStack.push(1)
myStack.push(2)
myStack.push(3)
myStack.push(4)
myStack.push(5)
myStack.push(6)

print(myStack.stack())