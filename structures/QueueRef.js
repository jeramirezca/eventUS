"use strict";
exports.__esModule = true;
exports.QueueRef = void 0;
var NodeUS_1 = require("./NodeUS");
var QueueRef = /** @class */ (function () {
    function QueueRef() {
        this.front = null;
        this.rear = null;
        this.count = 0;
    }
    QueueRef.prototype.empty = function () {
        return this.front == null;
    };
    QueueRef.prototype.size = function () {
        return this.count;
    };
    QueueRef.prototype.first = function () {
        if (this.empty()) {
            return null;
        }
        else {
            return this.front.getElement();
        }
    };
    QueueRef.prototype.enqueue = function (item) {
        var aux = new NodeUS_1.NodeUS(item, null);
        if (this.empty()) {
            this.front = aux;
            this.rear = aux;
        }
        else {
            if (this.size() == 1) {
                this.front.setNext(aux);
            }
            else {
                this.rear.setNext(aux);
            }
            this.rear = aux;
        }
        this.count++;
        return aux.getElement();
    };
    QueueRef.prototype.dequeue = function () {
        if (this.empty()) {
            return null;
        }
        var item = this.front.getElement();
        var aux = this.front.getNext();
        this.front = null;
        this.front = aux;
        this.count--;
        if (this.empty()) { // Opcional
            this.rear = null;
        }
        return item;
    };
    QueueRef.prototype.getFront = function () {
        return this.front;
    };
    QueueRef.prototype.setFront = function (front) {
        this.front = front;
    };
    QueueRef.prototype.getRear = function () {
        return this.rear;
    };
    QueueRef.prototype.setRear = function (rear) {
        this.rear = rear;
    };
    QueueRef.prototype.getCount = function () {
        return this.count;
    };
    QueueRef.prototype.setCount = function (count) {
        this.count = count;
    };
    QueueRef.prototype.toString = function () {
        var queue = "[";
        if (this.empty()) {
            queue += "]";
        }
        else {
            var aux = this.front;
            while ((aux === null || aux === void 0 ? void 0 : aux.getNext()) != null) {
                queue = "\n" + queue + aux.getData() + ",";
                aux = aux.getNext();
            }
            queue = queue + aux.getData() + "]";
        }
        return queue;
    };
    return QueueRef;
}());
exports.QueueRef = QueueRef;
