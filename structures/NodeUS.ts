export class NodeUS <T> {

    private data: T | null;
    private next: NodeUS <T> | null;
    
    constructor(element:T | null, next:NodeUS <T> | null) 
    {
        this.data = element;
        this.next = next;
    }

    public getElement() : T | null
    {
        return this.data;
    }

    public setElement(element:T)
    {
        this.data = element;
    }

    public getNext() : NodeUS <T> | null
    {
        return this.next;
    }

    public  setNext(next:NodeUS<T> | null)
    {
        this.next = next;
    }

    public getData() : T | null
    {
        return this.data;
    }

    public  setData(data:T)
    {
        this.data = data;
    }
    
}