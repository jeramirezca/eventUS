import { NodeUS } from "./NodeUS";

export class QueueRef<T> {

	private front : NodeUS<T>  | null;
	private rear : NodeUS<T> | null;
	private count : number;
	
	constructor() {
		this.front = null;
		this.rear = null;
		this.count = 0;
	}
	
	public empty() : boolean {
		return this.front == null;
	}
	
	public size() : number {
		return this.count;
	}
	
	public first() : T  | null{
		if (this.empty()) {
			return null;
		}else {
			return this.front!.getElement();
		}
	}
	
	public enqueue (item : T) : T | null{
		let aux : NodeUS<T>  = new NodeUS(item,null);
		if (this.empty()) {
			this.front = aux;
			this.rear = aux;
		}else {
			if(this.size() == 1) {
				this.front!.setNext(aux);
			} else {
				this.rear!.setNext(aux);
			}
			this.rear = aux;
		}
		this.count ++;
		return aux.getElement();
	}
	
	public dequeue() : T | null {
		if (this.empty()) {
			return null;
		}
		
		let item : T | null = this.front!.getElement();
		let aux : NodeUS<T> | null = this.front!.getNext();
		this.front = null;
		this.front = aux;
		this.count --;
		
		if (this.empty()) { // Opcional
			this.rear = null;
		}
		return item;
		
	}
	

	public getFront() : NodeUS<T> | null {
		return this.front;
	}

	public setFront( front : NodeUS<T> ) : void{
		this.front = front;
	}

	public getRear() : NodeUS<T> | null {
		return this.rear;
	}

	public setRear( rear : NodeUS<T>) : void {
		this.rear = rear;
	}

	public getCount() : number {
		return this.count;
	}

	public setCount( count : number) :  void  {
		this.count = count;
	}

	public toString() : string{
		let queue : string= "[";
		if (this.empty()) {
			queue +="]";
		} else {
			let aux : NodeUS<T> | null = this.front;
			while(aux?.getNext() != null) {
				queue = "\n"+ queue + aux.getData() + ",";
				aux = aux.getNext();
			}
			queue = queue + aux!.getData()+"]";
		}
		return queue;
	}
}
