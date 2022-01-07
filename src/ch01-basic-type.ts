// TypeScript 基础类型
// 1、Boolean 类型
let isDone: boolean = true
console.log(isDone); // true

// 2、Number 类型
let count: number = 10
console.log(count); // 10

// 3、String 类型
let myname: string = "zhishouh"
console.log(myname); // zhishouh

// 4、Array 类型
let numberList1: number[] = [1, 2, 3]
let stringList1: string[] = ['1', '2', '3']
let numberList2: Array<number> = [1, 2, 3]
let stringList2: Array<string> = ['1', '2', '3']
console.log(numberList1); // [ 1, 2, 3 ]
console.log(stringList1); // [ '1', '2', '3' ]
console.log(numberList2); // [ 1, 2, 3 ]
console.log(stringList2); // [ '1', '2', '3' ]

// 5、Enum 类型 -- 枚举
// 数字枚举
enum Direction1 {
  NORTH = 2,
  SOUTH,
  EAST,
  WEST
}
let dir1 = Direction1.NORTH
console.log(dir1); // 2
// 字符串枚举
enum Direction2 {
  NORTH = "NORTH",
  SOUTH = "SOUTH",
  EAST = "EAST",
  WEST = "WEST"
}
let dir2 = Direction2.NORTH
console.log(dir2); // NORTH
// 异构枚举 -- 数字和字符串的混合
enum Enum {
  A,
  B,
  C = 'C',
  D = 'D',
  E = 8,
  F,
}
let enum1 = Enum.A
let enum2 = Enum.C
console.log(enum1); // 0
console.log(enum2); // C

// 6、Any 类型 -- 任意类型(全局超级类型)
let notSure: any = 666
notSure = "Semlinker"
notSure = false
console.log(notSure); // false

// 7、Unknown 类型
let value: unknown
value = true
value = [1, "2"]
console.log(value); // [1,"2"]

// 8、Tuple 类型 -- 元组
let tupleType: [string, boolean]
tupleType = ["helloworld", false]
console.log(tupleType[0], tupleType[1]); // 'helloworld'  false 

// 9、Void 类型 -- 没有任意类型
// 声明函数，返回值为void
function warnUser(): void {
  console.log("This is my wraning message");
}
warnUser() // This is my wraning message
// 声明变量没有什么意义，因为它的值只能是undefined或null
let unusable: void = undefined
console.log(unusable); // undefined

// 10、Null和Undefined类型
let u: undefined = undefined
let n: null = null
console.log(u, n); // undefined null

// 11、Never 类型 -- 永不存在的值
type Foo = string | number
function controFlowAnalysisWithNever(foo: Foo) {
  if (typeof foo === 'string') {
    console.log("foo 是 string 类型");
  } else if (typeof foo === 'number') {
    console.log("foo 是 number 类型");
  } else {
    const check: never = foo
    console.log(`foo 是 ${check} 类型`);
  }
}
// controFlowAnalysisWithNever(false) // foo 是 false 类型
controFlowAnalysisWithNever("zhishouh") // foo 是 string 类型

