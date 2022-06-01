import { NodeUS } from "./NodeUS";

export class StackRef<T> {
	private topStack : NodeUS<T> | null;
	private count : number;
	
	constructor() {
		this.topStack = null;
        this.count = 0;
	}
	
	public empty() : boolean {
		return this.topStack == null;
	}
	
	public size() : number {
		return this.count;
	}
	
	public getTop() : T | null {
		if (this.topStack == null) {
			return null;	
		} else {
			return this.topStack!.getElement();
		}
	}
	
	public pop() : T | null{
		if (this.empty()) {
			return null;
		} else {
			let element : T | null = this.topStack!.getElement();
			/*Node<T> aux = top.getNext();
			top = null;
			top = aux;*/
			this.topStack = this.topStack!.getNext();
			this.count --;
			return element;
		}
	}
	
	public push ( element : T ) : T | null {
		let item : NodeUS<T>  = new NodeUS<T>(element, this.topStack);
		this.topStack = item;
		this.count ++;
		return item.getElement();
	}
	
	public toString() : string {
		let stack : string = "[";
		if (this.empty()) {
			stack +="]";
		}else {
			let aux : NodeUS<T> | null = this.topStack;
			while(aux?.getNext() != null) {
				stack = "\n"+ stack + aux.getData() + ",";
				aux = aux.getNext();
			}
			stack = stack + aux!.getData()+"]";
		}
		return stack;
	}
	
} 