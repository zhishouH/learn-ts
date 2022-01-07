// 类型守卫
// 1、in 关键字
interface Admin {
  name: string
  privileges: string[]
}
interface Employee {
  name: string
  startDate: Date
}
type UnknownEmployee = Employee | Admin
function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name)
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges)
  }
  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate)
  }
}

// 2、typeof 关键字
function padLeft(value: string, padding: string | number) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value
  }
  if (typeof padding === "string") {
    return padding + value
  }
  throw new Error(`Expected string or number,got '${padding}'.`)
}
console.log(padLeft("zhishouh", 12));

// 3、instanceof 关键字
interface Padder {
  getPaddingString(): string
}
class SpaceRepeatingPadder implements Padder {
  constructor(private numSpaces: number) { }
  getPaddingString(): string {
    return Array(this.numSpaces + 1).join(" ")
  }
}
class StringPadder implements Padder {
  constructor(private value: string) { }
  getPaddingString(): string {
    return this.value
  }
}
let padder: Padder = new SpaceRepeatingPadder(6)
if (padder instanceof SpaceRepeatingPadder) {
  // padder的类型收窄为 'SpaceRepeatingPadder
}

// 4、自定义类型保护的类型谓词
function isNumber(x: any): x is number {
  return typeof x === "number"
}
function isString(x: any): x is string {
  return typeof x === "string"
}