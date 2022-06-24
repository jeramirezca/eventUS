"use strict";
exports.__esModule = true;
exports.MinHeap = void 0;
var MinHeap = /** @class */ (function () {
    function MinHeap(facultad) {
        var _this = this;
        this.swap = function (indexA, indexB) {
            var temp = _this.arr[indexA];
            _this.arr[indexA] = _this.arr[indexB];
            _this.arr[indexB] = temp;
        };
        this.leftChild = function (index) {
            return 2 * index + 1;
        };
        this.rightChild = function (index) {
            return 2 * (index + 1);
        };
        this.parent = function (index) {
            return (index > 0) ? Math.floor((index - 1) / 2) : 0;
        };
        this.siftUp = function (index) {
            var parent = _this.parent(index);
            while (_this.arr[index].getPriority(_this.facultad) < _this.arr[parent].getPriority(_this.facultad)) {
                _this.swap(index, parent);
                index = parent;
                parent = _this.parent(index);
            }
        };
        this.siftDown = function (index) {
            var mini = index;
            var li = _this.leftChild(index);
            var ri = _this.rightChild(index);
            if (li < _this.size && _this.arr[li].getPriority(_this.facultad) < _this.arr[mini].getPriority(_this.facultad)) {
                mini = li;
            }
            if (ri < _this.size && _this.arr[ri].getPriority(_this.facultad) < _this.arr[mini].getPriority(_this.facultad)) {
                mini = ri;
            }
            if (mini != index) {
                _this.swap(index, mini);
                _this.siftDown(mini);
            }
        };
        this.insert = function (item) {
            _this.arr.push(item);
            _this.siftUp(_this.size);
            _this.size += 1;
        };
        this.extractMin = function () {
            if (_this.arr.length == 0) {
                throw new Error("Cola de prioridad vacía.");
            }
            var result = _this.arr[0];
            _this.size -= 1;
            _this.swap(0, _this.size);
            _this.siftDown(0);
            return result;
        };
        this.getMin = function () {
            if (_this.arr.length == 0) {
                throw new Error("Cola de prioridad vacía.");
            }
            return _this.arr[0];
        };
        this.changePriority = function (index, newPriority) {
            var oldPriority = _this.arr[index];
            _this.arr[index] = newPriority;
            if (newPriority < oldPriority) {
                _this.siftUp(index);
            }
            else if (newPriority > oldPriority) {
                _this.siftDown(index);
            }
        };
        this.remove = function (index) {
            _this.arr[index] = _this.getMin();
            _this.siftUp(index);
            _this.extractMin();
        };
        this.search = function (item) {
            for (var i = 0; i < _this.size; i++) {
                if (_this.arr[i] == item) {
                    return i;
                }
            }
            return -1;
        };
        this.toString = function () {
            var heapStr = "[";
            for (var i = 0; i < _this.size; i++) {
                heapStr += (i > 0) ? ", ".concat(_this.arr[i]) : "".concat(_this.arr[i]);
            }
            return heapStr + "]";
        };
        this.arr = [];
        this.size = 0;
        this.facultad = facultad;
    }
    MinHeap.prototype.getArray = function () {
        return this.arr;
    };
    return MinHeap;
}());
exports.MinHeap = MinHeap;
