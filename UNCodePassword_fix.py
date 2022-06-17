class MinHeap:
    def __init__(self) -> None:
        self.arr = []
        self.size = 0
    
    def swap(self, indexA: int, indexB: int):
        self.arr[indexA], self.arr[indexB] = self.arr[indexB], self.arr[indexA]
    
    def leftChild(self, index: int):
        return 2*index + 1
    
    def rightChild(self, index: int):
        return 2*(index + 1)
    
    def parent(self, index: int):
        return (index - 1)//2 if index > 0 else 0
    
    def siftUp(self, index: int):
        parent = self.parent(index)
        while self.arr[index]%3 < self.arr[parent]%3:
            self.swap(index, parent)
            index = parent
            parent = self.parent(index)
    
    def siftDown(self, index: int):
        minI = index
        li = self.leftChild(index)
        ri = self.rightChild(index)
        if li < self.size and self.arr[li]%3 < self.arr[minI]%3:
            minI = li
        if ri < self.size and self.arr[ri]%3 < self.arr[minI]%3:
            minI = ri
        if minI != index:
            self.swap(index, minI)
            self.siftDown(minI)
    
    def insert(self, item):
        self.arr.append(item)
        self.siftUp(self.size)
        self.size += 1
    
    def changePriority(self, index = 0):
        oldPriority = self.arr[index]
        self.arr[index] -= 1
        if self.arr[index]%3 < oldPriority%3:
            self.siftUp(index)
        elif self.arr[index]%3 > oldPriority%3:
            self.siftDown(index)

def checkMissingChars(inp: str):
    steps = 0
    numbers = ['1','2','3','4','5','6','7','8','9','0']
    hasUpper = False
    hasLower = False
    hasNumber = False
    for character in inp:
        if not hasLower and character.islower():
            hasLower = True
        elif not hasUpper and character.isupper():
            hasUpper = True
        elif not hasNumber and character in numbers:
            hasNumber = True
        if hasUpper and hasLower and hasNumber:
            break
    if not hasUpper:
        steps += 1
    if not hasLower:
        steps += 1
    if not hasNumber:
        steps += 1
    return steps

def shortPassword(inp: str):
    lengthDiff = 6 - len(inp)
    if lengthDiff == 1:
        thisChar = inp[0]
        repetitions = 1
        for i in range(1, len(inp)):
            if inp[i] == thisChar:
                repetitions += 1
            else:
                thisChar = inp[i]
                repetitions = 1
        if repetitions == 5:
            lengthDiff += 1
    return max(lengthDiff, checkMissingChars(inp))

def inBoundsPassword(inp: str):
    steps = 0
    thisChar = inp[0]
    repetitions = 1
    for i in range(1, len(inp)):
        if inp[i] == thisChar:
            repetitions += 1
        if repetitions == 3:
            steps += 1
            repetitions = 0
        if inp[i] != thisChar:
            thisChar = inp[i]
            repetitions = 1
    return max(steps, checkMissingChars(inp))

def largePassword(inp: str):
    steps = 0
    lengthDiff = len(inp) - 20
    thisChar = inp[0]
    repetitions = 1
    repetitionsHeap = MinHeap()
    for i in range(1, len(inp)):
        if inp[i] == thisChar:
            repetitions += 1
        else:
            if repetitions >= 3:
                repetitionsHeap.insert(repetitions)
            thisChar = inp[i]
            repetitions = 1
    if repetitions >= 3:
        repetitionsHeap.insert(repetitions)
    if repetitionsHeap.size == 0:
        return lengthDiff + checkMissingChars(inp)
    for j in range(lengthDiff):
        repetitionsHeap.changePriority()
        steps += 1
    replacements = 0
    for k in range(repetitionsHeap.size):
        replacements += repetitionsHeap.arr[k]//3
    return steps + max(replacements, checkMissingChars(inp))

def main():
    inp = input().strip('", []')
    inpLen = len(inp)
    if inpLen < 6:
        print(shortPassword(inp))
    elif inpLen >= 6 and inpLen <= 20:
        print(inBoundsPassword(inp))
    else:
        print(largePassword(inp))

main()