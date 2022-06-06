"use strict";
exports.__esModule = true;
exports.NodeUS = void 0;
var NodeUS = /** @class */ (function () {
    function NodeUS(element, next) {
        this.data = element;
        this.next = next;
    }
    NodeUS.prototype.getElement = function () {
        return this.data;
    };
    NodeUS.prototype.setElement = function (element) {
        this.data = element;
    };
    NodeUS.prototype.getNext = function () {
        return this.next;
    };
    NodeUS.prototype.setNext = function (next) {
        this.next = next;
    };
    NodeUS.prototype.getData = function () {
        return this.data;
    };
    NodeUS.prototype.setData = function (data) {
        this.data = data;
    };
    return NodeUS;
}());
exports.NodeUS = NodeUS;
