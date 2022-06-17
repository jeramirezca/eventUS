class QueueNode:
    def __init__(self, info = None) -> None:
        self.info = info
        self.next = None

class TreeNode:
    def __init__(self, data = None) -> None:
        self.data = data
        self.left = None
        self.right = None
        self.parent = None
        self.deepness = 0

class ReferenceQueue:
    def __init__(self) -> None:
        self.head = None
        self.rear = None
        self.size = 0
    
    def enqueue(self, info):
        reference = QueueNode(info)
        if  not self.head is None:
            self.rear.next = reference
            self.rear = reference
        else:
            self.head = self.rear = reference
        self.size += 1
    
    def dequeue(self):
        assert (not self.head is None), "Imposible borrar"
        ref = self.head.info
        self.head = self.head.next
        self.size -= 1
        return ref

class BinaryTree:
    def __init__(self) -> None:
        self.root = None
        self.size = 0
    
    def insertRoot(self, data):
        self.root = TreeNode(data)
        self.size += 1
        return self.root
    
    def insertLeft(self, data, root):
        newNode = TreeNode(data)
        root.left = newNode
        newNode.parent = root
        self.size += 1
        return newNode
    
    def insertRight(self, data, root):
        newNode = TreeNode(data)
        root.right = newNode
        newNode.parent = root
        self.size += 1
        return newNode
    
    def bfs(self, maxDeep):
        binaryTreeStr = ""
        que = ReferenceQueue()
        que.enqueue(self.root)
        visitedNodes = 0
        while not que.head is None:
            if self.size == visitedNodes:
                break
            thisNode = que.dequeue()
            if thisNode is None:
                binaryTreeStr += ",null" if binaryTreeStr != "" else "null"
            else:
                visitedNodes += 1
                if thisNode.deepness < maxDeep:
                    que.enqueue(thisNode.left)
                    que.enqueue(thisNode.right)
                binaryTreeStr += f",{thisNode.data}" if binaryTreeStr != "" else f"{thisNode.data}"
        return "[" + binaryTreeStr + "]"

def checkInsertionPlace(hyphenCounter: int, justInserted: TreeNode, tree: BinaryTree, item):
    while hyphenCounter < justInserted.deepness:
        justInserted = justInserted.parent
    par = justInserted.parent
    if hyphenCounter > justInserted.deepness:
        justInserted = tree.insertLeft(item, justInserted) if justInserted.left is None else tree.insertRight(item, justInserted)
    else:
        justInserted = tree.insertRight(item, par)
    return justInserted

def solution(inp):
    inp = inp.strip('",[ ]')
    if inp == "":
        return "[]"
    tree = BinaryTree()
    i = 0
    item = ""
    while inp[i] != "-":
        item += inp[i]
        i += 1
    justInserted = tree.insertRoot(item)
    l = len(inp)
    item = ""
    hyphenCounter = 0
    maxDeep = 0
    while i < l:
        if inp[i] != "-":
            item += inp[i]
        else:
            if item == "":
                hyphenCounter += 1
            else:
                if hyphenCounter == 1:
                    justInserted = tree.insertLeft(item, tree.root) if tree.root.left is None else tree.insertRight(item, tree.root)
                else:
                    justInserted = checkInsertionPlace(hyphenCounter, justInserted, tree, item)
                justInserted.deepness = hyphenCounter
                item = ""
                maxDeep = max(maxDeep, hyphenCounter)
                hyphenCounter = 1
        i += 1
    justInserted = checkInsertionPlace(hyphenCounter, justInserted, tree, item)
    justInserted.deepness = hyphenCounter
    maxDeep = max(maxDeep, hyphenCounter)
    return tree.bfs(maxDeep)

inp = input()
print(solution(inp))