"use strict";
exports.__esModule = true;
exports.LinkedRef = void 0;
var NodeUS_1 = require("./NodeUS");

var LinkedRef = /** @class */ (function () {
    function LinkedRef() {
        this.first = null;
        this.latest = null;
        this.count = 0;
    }
    
    LinkedRef.prototype.empty = function () {
        return this.count == 0;
    };
    LinkedRef.prototype.size = function () {
        return this.count;
    };
    LinkedRef.prototype.getNode = function (index) {
        if (this.empty() || index < 0 || index >= this.size()) {
            return null;
        }
        else if (index == 0) {
            return this.first;
        }
        else if (index == this.size() - 1) {
            return this.latest;
        }
        else {
            var sought = this.first;
            var i = 0;
            while (i < index) {
                i++;
                sought = sought.next;
            }
            return sought;
        }
    };
    LinkedRef.prototype.get = function (index) {
        var a = null;

        if (this.empty() || index < 0 || index >= this.size()) {
        }
        else if (index == 0) {
            a = this.first.data;
        }
        else if (index == this.size() - 1) {
            a = this.latest.data;
        }
        else {
            var sought = this.first;
            if (sought.next !== null) {
                var sought = this.next;
                a = sought.data;
            }
        }
        return a;
    };
    LinkedRef.prototype.getFirst = function () {
        if (this.empty()) {
            return null;
        }
        else {
            return this.first.data;
        }
    };
    LinkedRef.prototype.getLatest = function () {
        if (this.empty()) {
            return null;
        }
        else {
            return this.latest.data;
        }
    };
    LinkedRef.prototype.addFirst = function (element) {
        var aux;
        if (this.empty()) {
            aux = new NodeUS_1.NodeUS(element, null);
            this.first = aux;
            this.latest = aux;
        }
        else {
            aux = new NodeUS_1.NodeUS(element, this.first);
            this.first = aux;
        }
        this.count++;
        return this.first.data;
    };
    LinkedRef.prototype.addLatest = function (element) {
        if (this.empty()) {
            this.addFirst(element);
        }
        else {
            var aux = new NodeUS_1.NodeUS(element, null);
            this.latest.setNext(aux);
            this.latest = aux;
        }
        this.count++;
        return this.latest.data;
    };
    LinkedRef.prototype.add = function (element, index) {
        if (index == 0) {
            return this.addFirst(element);
        }
        else if (index == this.size()) {
            return this.addLatest(element);
        }
        else if (index < 0 || index >= this.size()) {
            return null;
        }
        else {
            var prev = this.getNode(index - 1);
            var current = this.getNode(index);
            var aux = new NodeUS_1.NodeUS(element, current); //getNode(index+1)
            prev.setNext(aux);
            this.count++;
            return this.getNode(index).data;
        }
    };
    LinkedRef.prototype.toString = function () {
        var list = "[";
        if (this.empty()) {
            list += "]";
        }
        else {
            var aux = this.first;
            while ((aux === null || aux === void 0 ? void 0 : aux.getNext()) != null) {
                list = "\n" + list + (aux === null || aux === void 0 ? void 0 : aux.getData()) + ",";
                aux = aux.getNext();
            }
            list = list + aux.data + "]";
        }
        return list;
    };
    LinkedRef.prototype.exists = function (element) {
        if (this.empty()) {
            return false;
        }
        else {
            var aux = this.first;
            while (aux != null) {
                if (element == aux.data) {
                    return true;
                }
                aux = aux.next;
            }
            return false;
        }
    };
    LinkedRef.prototype.indexOf = function (element) {
        if (this.empty()) {
            return -1;
        }
        else {
            var aux = this.first;
            var position = 0;
            while (aux != null) {
                if (element == aux.data) {
                    return position;
                }
                position++;
                aux = aux.next;
            }
            return -1;
        }
    };
    LinkedRef.prototype.removeFirst = function () {
        if (this.empty()) {
            return null;
        }
        else {
            var element = this.first.data;
            var aux = this.first.next;
            this.first = null;
            this.first = aux;
            if (this.size() == 1) {
                this.latest = null;
            }
            this.count--;
            return element;
        }
    };
    LinkedRef.prototype.removeLatest = function () {
        if (this.empty()) {
            return null;
        }
        else {
            var element = this.latest.data;
            var aux = this.getNode(this.size() - 2);
            if (aux == null) {
                this.latest = null;
                if (this.size() == 2) { // ¿Por qué no va fuera del if?
                    this.latest = this.first;
                }
                else {
                    this.first = null;
                }
            }
            else {
                this.latest = null;
                this.latest = aux;
                this.latest.setNext(null);
            }
            this.count--;
            return element;
        }
    };
    LinkedRef.prototype.remove = function (index) {
        if (this.empty() || index < 0 || index >= this.size()) {
            return null;
        }
        else if (index == 0) {
            return this.removeFirst();
        }
        else if (index == this.size() - 1) {
            return this.removeLatest();
        }
        else {
            var prev = this.getNode(index - 1);
            var current = this.getNode(index);
            var next = current.next;
            var element = current.data;
            current = null;
            prev.setNext(next);
            this.count--;
            return element;
        }
    };
    LinkedRef.prototype.modify = function (element, index) {
        if (this.empty() || index < 0 || index >= this.size()) {
            return null;
        }
        else {
            var aux = this.getNode(index);
            aux.setElement(element);
            return aux.data;
        }
    };

    LinkedRef.prototype.fromJson = function (json) {
        this.first = json.first;
        this.latest = json.latest;
        this.count = json.count;
    };

    return LinkedRef;
}());
exports.LinkedRef = LinkedRef;
