// TypeScript 断言
// 1、"尖括号" 语法
let someValue: any = "this is a string"
let strLength: number = (<string>someValue).length
console.log(strLength); // 16

// 2、as 语法
let someValue2: any = "this is a string"
let strLength2: number = (someValue2 as string).length
console.log(strLength2); // 16

