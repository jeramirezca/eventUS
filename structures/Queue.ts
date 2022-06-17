import { NodeUS } from "./NodeUS";

export class Queue<T> {

    public cola: Array<T>;
	
	constructor() {
        this.cola = new Array<T>;
	}
	
	public empty() : boolean {
		return  this.cola.length == 0;
	}
	
	public size() : number {
		return this.cola.length;
	}
	
	public first() : T  | null{
		if (this.empty()) {
			return null;
		}else {
			return this.cola[0];
		}
	}
	
	public enqueue (item : T) : void{
        this.cola.push(item);
	}
	
	public dequeue() : T | undefined {
		return this.cola.pop();
	}
	
}
