import { Evento } from "../data/Evento";
export class MinHeap {
    arr: Array<Evento>
    size: 0
    facultad : string;
    
    constructor(facultad: string) {
        this.arr = []
        this.size = 0
        this.facultad = facultad;
    }

    public getArray () : Array<Evento> {
        return this.arr;
    }

    private swap = (indexA: number, indexB: number): void => {
        let temp: Evento = this.arr[indexA]
        this.arr[indexA] = this.arr[indexB]
        this.arr[indexB] = temp
    }

    private leftChild = (index: number): number => {
        return 2 * index + 1
    }

    private rightChild = (index: number): number => {
        return 2 * (index + 1)
    }

    private parent = (index: number): number => {
        return (index > 0)? Math.floor((index - 1) / 2): 0
    }

    private siftUp = (index: number): void => {
          
        let parent: number = this.parent(index)
        while (this.arr[index].getPriority(this.facultad) < this.arr[parent].getPriority(this.facultad)) {
            this.swap(index, parent)
            index = parent
            parent = this.parent(index)
        }
    }

    private siftDown = (index: number): void => {
        let mini: number = index
        let li: number = this.leftChild(index)
        let ri: number = this.rightChild(index)
        if (li < this.size && this.arr[li].getPriority(this.facultad) < this.arr[mini].getPriority(this.facultad)) {
            mini = li
        }
        if (ri < this.size && this.arr[ri].getPriority(this.facultad) < this.arr[mini].getPriority(this.facultad)) {
            mini = ri
        }
        if (mini != index) {
            this.swap(index, mini)
            this.siftDown(mini)
        }
    }

    insert = (item: Evento): void => {
        this.arr.push(item)
        this.siftUp(this.size)
        this.size += 1
    }

    extractMin = (): Evento => {
        if (this.arr.length == 0) {
            throw new Error("Cola de prioridad vacía.");
        }
        let result: Evento = this.arr[0]
        this.size -= 1
        this.swap(0, this.size)
        this.siftDown(0)
        return result
    }

    getMin = (): Evento => {
        if (this.arr.length == 0) {
            throw new Error("Cola de prioridad vacía.");
        }
        return this.arr[0]
    }

    changePriority = (index: number, newPriority: Evento): void => {
        let oldPriority: Evento = this.arr[index]
        this.arr[index] = newPriority
        if (newPriority < oldPriority) {
            this.siftUp(index)
        }
        else if (newPriority > oldPriority) {
            this.siftDown(index)
        }
    }

    remove = (index: number): void => {
        this.arr[index] = this.getMin()
        this.siftUp(index)
        this.extractMin()
    }

    search = (item: Evento): number => {
        for (let i = 0; i < this.size; i++) {
            if (this.arr[i] == item) {
                return i
            }
        }
        return -1
    }

    public toString = (): string => {
        let heapStr: string = "["
        for (let i = 0; i < this.size; i++) {
            heapStr += (i > 0)? `, ${this.arr[i]}`: `${this.arr[i]}`
        }
        return heapStr + "]"
    }
}