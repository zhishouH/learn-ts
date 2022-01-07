"use strict";
// TypeScript 基础类型
// 1、Boolean 类型
var isDone = true;
console.log(isDone); // true
// 2、Number 类型
var count = 10;
console.log(count); // 10
// 3、String 类型
var myname = "zhishouh";
console.log(myname); // zhishouh
// 4、Array 类型
var numberList1 = [1, 2, 3];
var stringList1 = ['1', '2', '3'];
var numberList2 = [1, 2, 3];
var stringList2 = ['1', '2', '3'];
console.log(numberList1); // [ 1, 2, 3 ]
console.log(stringList1); // [ '1', '2', '3' ]
console.log(numberList2); // [ 1, 2, 3 ]
console.log(stringList2); // [ '1', '2', '3' ]
// 5、Enum 类型 -- 枚举
// 数字枚举
var Direction1;
(function (Direction1) {
    Direction1[Direction1["NORTH"] = 2] = "NORTH";
    Direction1[Direction1["SOUTH"] = 3] = "SOUTH";
    Direction1[Direction1["EAST"] = 4] = "EAST";
    Direction1[Direction1["WEST"] = 5] = "WEST";
})(Direction1 || (Direction1 = {}));
var dir1 = Direction1.NORTH;
console.log(dir1); // 2
// 字符串枚举
var Direction2;
(function (Direction2) {
    Direction2["NORTH"] = "NORTH";
    Direction2["SOUTH"] = "SOUTH";
    Direction2["EAST"] = "EAST";
    Direction2["WEST"] = "WEST";
})(Direction2 || (Direction2 = {}));
var dir2 = Direction2.NORTH;
console.log(dir2); // NORTH
// 异构枚举 -- 数字和字符串的混合
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
    Enum[Enum["B"] = 1] = "B";
    Enum["C"] = "C";
    Enum["D"] = "D";
    Enum[Enum["E"] = 8] = "E";
    Enum[Enum["F"] = 9] = "F";
})(Enum || (Enum = {}));
var enum1 = Enum.A;
var enum2 = Enum.C;
console.log(enum1); // 0
console.log(enum2); // C
// 6、Any 类型 -- 任意类型(全局超级类型)
var notSure = 666;
notSure = "Semlinker";
notSure = false;
console.log(notSure); // false
// 7、Unknown 类型
var value;
value = true;
value = [1, "2"];
console.log(value); // [1,"2"]
// 8、Tuple 类型 -- 元组
var tupleType;
tupleType = ["helloworld", false];
console.log(tupleType[0], tupleType[1]); // 'helloworld'  false 
// 9、Void 类型 -- 没有任意类型
// 声明函数，返回值为void
function warnUser() {
    console.log("This is my wraning message");
}
warnUser(); // This is my wraning message
// 声明变量没有什么意义，因为它的值只能是undefined或null
var unusable = undefined;
console.log(unusable); // undefined
// 10、Null和Undefined类型
var u = undefined;
var n = null;
console.log(u, n); // undefined null
function controFlowAnalysisWithNever(foo) {
    if (typeof foo === 'string') {
        console.log("foo 是 string 类型");
    }
    else if (typeof foo === 'number') {
        console.log("foo 是 number 类型");
    }
    else {
        var check = foo;
        console.log("foo \u662F ".concat(check, " \u7C7B\u578B"));
    }
}
// controFlowAnalysisWithNever(false) // foo 是 false 类型
controFlowAnalysisWithNever("zhishouh"); // foo 是 string 类型
