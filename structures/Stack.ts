import { NodeUS } from "./NodeUS";

export class Stack<T> {
	
    public pila: Array<T>;
	
	constructor() {
		this.pila = new Array<T>;
	}
	
	public empty() : boolean {
		return  this.pila.length == 0;
	}
	
	public size() : number {
		return this.pila.length;
	}
	
	public getTop() : T  | null{
		if (this.empty()) {
			return null;
		}else {
			return this.pila[0];
		}
	}
	
	public pop() : T | undefined{
		if (this.empty()) {
			return undefined;
		} else {
			return this.pila.pop();
		}
	}
	
	public push ( element : T ) : void {
		this.pila.push(element);
	}
	
} 