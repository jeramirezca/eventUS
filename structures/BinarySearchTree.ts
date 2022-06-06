export class node<T> {
    data: T | null
    right: node<T>|null
    left: node<T>|null
    height: number

    constructor(data:T) {
        this.data = data
        this.right = null
        this.left = null
        this.height = 0
    }
}

export class BinarySearchTree<T> {
    root: node<T>|null

    constructor() {
        this.root = null
    }

    protected insert2 = (data: T, root: node<T>|null): node<T> | null => {
        if (!root) {
            return new node<T>(data)
        }
        if (data > root.data!) {
            root.right = this.insert2(data, root.right)
        }
        else if (data < root.data!) {
            root.left = this.insert2(data, root.left)
        }
        root.height = this.getHeight(root)
        return root
    }

    insert = (data: T): void => {
        this.root = this.insert2(data, this.root)
    }

    findMin = (ref?: node<T>|null): T | null => {
        if (!ref) {
            if (!this.root) {
                throw new Error("Árbol vacío.");
            }
            return this.findMin(this.root)
        }
        return ref.left? this.findMin(ref.left): ref.data
    }

    findMax = (ref?: node<T>): T | null => {
        if (!ref) {
            if (!this.root) {
                throw new Error("Árbol vacío.");
            }
            return this.findMax(this.root)
        }
        return ref.right? this.findMax(ref.right): ref.data
    }

    remove = (data: T, root: node<T>|null): node<T>|null=> {
        if (root) {
            if ((data > root.data! && !root.right) || (data < root.data! && !root.left)) {
                throw new Error(`${data} no está en el árbol. Imposible eliminar.`);
            }
            if (data > root.data! && root.right) {
                root.right = this.remove(data, root.right)
                root.height = this.getHeight(root)
            }
            else if (data < root.data! && root.left) {
                root.left = this.remove(data, root.left)
                root.height = this.getHeight(root)
            }
            else {
                if (!root.right && !root.left) {
                    root = null
                }
                else if (root.left && !root.right) {
                    root = root.left
                }
                else if (!root.left && root.right) {
                    root = root.right
                }
                else {
                    root.data = this.findMin(root.right)
                    root.right = this.remove(root.data!, root.right)
                    root.height = this.getHeight(root)
                }
            }
            return root;
        }else {
            throw new Error("Árbol vacío. Imposible eliminar.");
            return null;
        }

        this.root = this.remove(data, this.root)
    }

    search = (data: T, root?: node<T>): node<T> => {
        if (!root) {
            if (!this.root) {
                throw new Error("Árbol vacío.");
            }
            return this.search(data, this.root)
        }
        if (data == root.data) {
            return root
        }
        else if (data > root.data! && root.right) {
            return this.search(data, root.right)
        }
        else if (data < root.data! && root.left) {
            return this.search(data, root.left)
        }
        else {
            throw new Error(`${data} no está en el árbol.`);
        }
    }

    getHeight = (root?: node<T>): number => {
        if (!root) {
            return this.root? this.root.height: -1
        }
        let lHeight: number = root.left? root.left.height: -1
        let rHeight: number = root.right? root.right.height: -1
        return 1 + Math.max(lHeight, rHeight)
    }

    protected inOrder = (ref: node<T>|null, s = ""): string => {
        let ref2:node<T>=ref as node<T>
        if (ref2.left != null) {
            s = this.inOrder(ref2.left, s)
        }
        s += (s.length > 0? `, ${ref2.data}`: `${ref2.data}`)
        if (ref2.right != null) {
            s = this.inOrder(ref2.right, s)
        }
        return s
    }

    public toString = (): string => {
        return "[" + this.inOrder(this.root) + "]"
    }
}