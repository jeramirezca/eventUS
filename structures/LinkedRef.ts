import { NodeUS } from "./NodeUS";

export class LinkedRef<T> {
	
		public first: NodeUS<T> | null;
		public latest: NodeUS<T> | null;
		public count : number;
		
		constructor(){
			this.first = null;
			this.latest = null;
			this.count = 0;
		}

		public empty() : boolean {
			return this.count == 0;
		}
		
		public size() : number {
			return this.count;
		}
		
		public getNode (index : number) : NodeUS<T> | null {
			if (this.empty() || index < 0 || index >= this.size()) {
				return null;
			}else if(index == 0) {
				return this.first;
			}else if(index == this.size()-1) {
				return this.latest;
			}else {
				let sought : NodeUS<T> | null = this.first;
				let i: number = 0;
				
				while(i < index) {
					i ++;
					sought = sought!.getNext();
				}
				
				return sought;
			}
		}
		
		public get(index : number) : T | null {
			let a : T | null = null;
			if (this.empty() || index < 0 || index >= this.size()) {
				
			}else if(index == 0) {
				a = this.first!.getElement();
			}else if(index == this.size()-1) {
				a = this.latest!.getElement();
			}else {
				if(this.getNode(index) != null){
					let sought : NodeUS<T> | null = this.getNode(index);
					a =  sought!.getElement();
				}
				
			}
			return a;
		}
		
		public getFirst() : T | null {
			if (this.empty()) {
				return null;
			}else {
				return this.first!.getElement();
			}
		}
		
		public getLatest()  {
			if (this.empty()) {
				return null;
			}else {
				return this.latest!.getElement();
			}
		}
		
		public addFirst(element : T) : T | null
		{
			let aux : NodeUS<T>;
			if (this.empty()) {
				aux = new NodeUS<T>(element , null);
				this.first = aux;
				this.latest = aux;
			}else {
				aux = new NodeUS<T>(element, this.first);
				this.first = aux;
			}
			
			this.count ++;
			return this.first!.getElement();
		}
		
		public addLatest(element : T) : T | null {
			
			if (this.empty()) {
				this.addFirst(element);
			}else {
				let aux: NodeUS<T> = new NodeUS<T>(element, null);
				this.latest!.setNext(aux);
				this.latest = aux;
			}
			
			this.count ++;
			return this.latest!.getElement();
		}
		
		public add(element: T, index : number) : T | null{
			if(index == 0) {
				return this.addFirst(element);
			}else if(index == this.size()) {
				return this.addLatest(element);
			}else if(index < 0 || index >= this.size()) {
				return null;
			}else {
				let prev : NodeUS<T> | null = this.getNode(index-1);
				let current: NodeUS<T> | null = this.getNode(index);
				let aux: NodeUS<T> | null = new  NodeUS<T> (element,current); //getNode(index+1)
				prev!.setNext(aux);
				this.count ++;
				return this.getNode(index)!.getElement();
			}
		}
		
		public toString() : string {
			let list : string = "{";
			if (this.empty()) {
				list +="}";
			} else {
				let aux : NodeUS<T> | null  = this.first;
				while(aux?.getNext() != null) {
					list = "\n"+ list + aux?.getData()+",";
					aux = aux!.getNext(); 
				}
				list = list + aux!.getData()+"]";
				
			}
			return list;
		}
			 
		public exists(element : T) : boolean {
			if (this.empty()) {
				return false;
			}else {
				let aux : NodeUS<T> | null = this.first;
				while(aux != null) {
					if (element == aux.getElement()) {
						return true;
					}
					aux = aux.getNext();
				}
				return false;
			}
			
		}
		
		public indexOf(element: T) : number {
			if (this.empty()) {
				return -1;
			}else {
				let aux : NodeUS<T> | null = this.first;
				let position : number = 0;
				while(aux != null) {
					if (element == aux.getElement()){
						return position;
					}
					position++;
					aux =  aux.getNext();
				}
				return -1;
			}
			
		}
		
		public removeFirst() : T | null{
			if (this.empty()) {
				return null;
			} else {
				let element : T | null = this.first!.getElement();
				let aux : NodeUS<T> | null = this.first!.getNext();
				this.first = null;
				this.first = aux;
				
				if (this.size() == 1) {
					this.latest = null;
				}
				
				this.count --;
				return element;
				
			}
		}
		
		public removeLatest() : T | null{
			if (this.empty()) {
				return null;
			} else {
				let element : T | null = this.latest!.getElement();
				let aux : NodeUS<T> | null = this.getNode(this.size()-2);
				
				if (aux == null) {
					this.latest = null;
					if (this.size() == 2) { // ¿Por qué no va fuera del if?
						this.latest = this.first;
					}else {
						this.first = null;
					}
				} else {
					this.latest = null;
					this.latest = aux;
					this.latest.setNext(null);
				}
				
				this.count --;
				return element;
				
			}
		}
		
		public remove (index : number) : T | null{
			if (this.empty() || index < 0 || index >= this.size()) {
				return null;
			}else if(index == 0) {
				return this.removeFirst();
			}else if(index == this.size()-1) {
				return this.removeLatest();
			}else {
				let prev : NodeUS<T> | null = this.getNode(index-1);
				let current : NodeUS<T> | null  = this.getNode(index);
				let next : NodeUS<T> | null = current!.getNext();
				let element : T | null = current!.getElement();
				current = null;
				prev!.setNext(next);
				this.count --;
				return element;
			}
		}
		
		public modify(element : T, index: number) : T | null{
			if (this.empty() || index < 0 || index >= this.size()) {
				return null;
			}else {
				let aux : NodeUS<T> | null  = this.getNode(index);
				aux!.setElement(element);
				return aux!.getElement();
			}
		}

		public fromJson(json: any){
			this.first = json.first;
			this.latest = json.latest;
			this.count = json.count;
		  }

}