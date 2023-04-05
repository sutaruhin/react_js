/*
 * const,let等の宣言変数
 */

// var val1 = "var変数";
// console.log(val1);

// // var変数の上書き
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言
// var val1 = "var変数を再宣言";
// console.log(val1);

// let var2 = "let変数";
// console.log(var2);

// //let は上書き可能
// var2 = "let変数も上書き可能";
// console.log(var2);
// //letは再宣言できない

// const var3 = "const変数";
// console.log(var3);
// //constは上書きできない
// var3 = 2;

/*
 * テンプレート　バッククオートがポイント
 */
const name_ = "須田";
const age_ = 59;
const message = `私の名前は${name_}です\n年齢は${age_}才でじじいです`;
console.log(message);
/*
 * 分割関数
 */
const myProfile = {
  name: "須田",
  age: 58
};
const message1 = `名前は${myProfile.name}です。`;
console.log(message1);

const { name, age } = myProfile;
const message2 = `名前は${name}です。${age}`;
console.log(message2);

const myProfileClass = ["須田", 59];
const [name1, age1] = myProfileClass;
const message4 = `名前は${name1}です。年齢は${age1}です。`;
console.log(message4);
