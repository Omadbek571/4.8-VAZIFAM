// 1-savol


// function calcMas(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     return sum;
// }

// let arr = [1,2,3,4,5,6]
// let sum = calcMas(arr)
// console.log(sum);


// 2-savol

// let arr = [8,4,52,7,9,5]

// function engKottaMassiv(arr) {

//         let num1 = arr[0];

//         for (let i = 1; i < arr.length; i++) {
//                 if (arr[i] > num1) {
//                         num1 = arr[i];
//                     }
//     }

//     return num1;
// }

// const Array = arr;
// const elem = engKottaMassiv(Array);
// console.log("Eng katta element:", elem);


// 3-savol

// let arr = [8, 4, 52, 7, 9, 5];

// function engKichikMass(arr) {
//     let sum = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < sum) {
//             sum = arr[i];
//         }
//     }

//     return sum;
// }

// let array = arr;
// let elem = engKichikMass(array);
// console.log("Eng kichik massiv " + elem);


// 4-savol


// function manfiyFunc(arr) {
//     let yangiArr = []

//     for (let i = 0; i < arr.length; i++) {

//         if (arr[i] > 0) {
//             yangiArr.push(arr[i])
//         }else{
//             yangiArr.push(-arr[i])
//         }
//     }

//     return yangiArr
// }

// const arr = [-3, 5, -7, 2, -8, -1, 4, 10, -12];
// let yangiArr = manfiyFunc(arr)
// console.log(yangiArr);


// 5-savol

// function ikkiPlus(arr) {
//     let yangiArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         yangiArr.push(arr[i] * 2);
//     }
//     return yangiArr;
// }

// let arr = [1, 2, 3, 4, 5, 6];
// let yangiArr = ikkiPlus(arr);
// console.log(yangiArr);


// 6-savol

// function JuftSonAyirish(arr) {
//     let yangiArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 1) {
//             yangiArr.push(arr[i])
//         }

//     }

//     return yangiArr

// }

// let arr = [1, 2, 3, 4, 5, 6]
// let yangiArr = JuftSonAyirish(arr)
// console.log(yangiArr);


// 7-savol

// function ToqqSonlarOlibTashlash(arr) {
//     let Yangiarr = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             Yangiarr.push(arr[i])
//         }
//     }
//     return Yangiarr
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let yangiArr = ToqqSonlarOlibTashlash(arr)
// console.log(yangiArr);


// 8-savol

// function togriFunc(arr, el) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === el) {
//             return true;
//         }
//     }
//     return false;
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const element1 = +prompt("mening massivimda 1 dan 10 gacha son bor");

// console.log(element1, "Massiv", togriFunc(arr, element1));



// 9-savol

// function TeskariFunc(arr) {
//     let yangiArr = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         yangiArr.push(arr[i]);
//     }

//     return yangiArr;
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let yangiArr = TeskariFunc(arr);
// console.log(yangiArr);


// 10-savol

// let arr = [1, 4, 7, 8, 9, 6, 3, 2, 5,45,75,45,78,12,35];
// let stop = 12;

// function func() {
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > stop) {
//             sum++
//         }
//     }
//     return sum
// }

// let result = func();
// console.log(result);


// 11-savol

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function func() {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] += 1;
//     }
// }

// func();
// console.log(arr);


// 12-savol

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function func(el1) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === el1) {
//             return i;
//         }
//     }
//     return -1;
// }

// let element = 5;
// let index = func(element);
// console.log(index);


// 13-savol

// let arr = [1, 2, 3, 4, 5, 3, 3, 7, 8, 9];

// function func(el1) {

//     let count = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === el1) {
//             count++;
//         }
//     }

//     return count;
// }

// let element = 3;
// let natija = func(element);
// console.log(natija);


// 14-savol

// let arr = [-3, 5, -1, 0, 9, -8, 7, 2, -6];

// function func() {
//     let yangiMass = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             yangiMass.push(arr[i]);
//         }
//     }

//     return yangiMass;
// }

// let natija = func();
// console.log(natija);


// 15-savol

// let arr = [-3, 5, -1, 0, 9, -8, 7, 2, -6];

// function func() {
//     let yangiMass = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             yangiMass.push(arr[i]);
//         }
//     }

//     return yangiMass;
// }

// let natija = func();
// console.log(natija);



// 16-savol

// let arr = ["salom", 10, "JavaScript", "bilan", true];

// function func(arr) {
//     let otkazish = arr.join(' ');

//     return otkazish;
// }

// let natija = func(arr);
// console.log(natija);



// 17-savol


// let arr = [1, 2, 3, 4, 5];

// function func(arr) {
//     let yangiArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         yangiArr.push(arr[i] * arr[i]);
//     }

//     return yangiArr;
// }

// let natija = func(arr);
// console.log(natija);


// 18-savol
// shunga uncha tushunmadim gptda koragan edim shunaqa qilib chiqarib berdi mazmunini yahshi tushunmadim lek sorab yubolaman

// let arr = [1, 2, 3, 4, 5];

// function func(arr) {
//     let yangiArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         yangiArr.push(arr[i]);
//     }
//     return yangiArr;
// }

// let natija = func(arr);
// console.log(natija);


// 19-savol


// let arr = [1, 2, 3, 4, 5, 4, 5, 77];

// function func(arr) {
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }

//     let yarimi = Math.floor(sum / 2); 

//     return yarimi;
// }

// let yarimi = func(arr);
// console.log("Yarimi:", yarimi);

// let sum = func(arr);
// console.log("Yig'indi:", sum);


// 20-savol

// function func(arr) {
//     let yangiArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (yangiArr.indexOf(arr[i]) === -1) {
//             yangiArr.push(arr[i]);
//         }
//     }

//     return yangiArr;
// }

// let arr = [1, 2, 3, 4, 2, 3, 5, 6, 4];
// let natija = func(arr);
// console.log(natija); 





