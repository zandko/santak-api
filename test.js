'use strict';

// const arr = [
//   {
//     id: 1,
//     magnification: 20,
//     name: '测试1',
//   },
//   {
//     id: 2,
//     magnification: 10,
//     name: '测试2',
//   },
//   {
//     id: 3,
//     magnification: 30,
//     name: '测试3',
//   },
//   {
//     id: 4,
//     magnification: 1,
//     name: '测试4',
//   },
//   {
//     id: 5,
//     magnification: 39,
//     name: '测试5',
//   },
// ];

// 0 ~ 1 * 100 + 1
// 100 - 20 = 80

// 0 ~ 1 * 80 + 1
// 80 - 10 = 70

//  0 ~ 1 * 70 + 1
// 70 - 30 = 40

// 0 ~ 1 * 39 + 1
// 40 - 1 = 39

// 0 ~ 1 * 1 + 1
// 39 - 39 = 0

// function getRand(arr) {
//   const result = 0;
//   let sum = 0;
//   arr.forEach(val => {
//     sum += val.magnification;
//   });

//   for (const index in arr) {
//     const rand = Math.round(Math.random() * (sum - 1) + 1);
//     console.log('rand===========' + rand);
//     if (rand <= arr[index].magnification) {
//       return arr[index];
//     }
//     sum -= arr[index].magnification;
//     console.log('sum============' + sum);
//   }

//   return result;
// }
// console.log(getRand(arr));

// console.log(new Date() < 1574175120);
// console.log(new Date(1574175120));

// const times = new Date() + 3600 * 24;
// console.log(new Date() < times);
// console.log(Math.floor(Date.now() / 1000) + (60 * 60));

// 1574173693

// console.log(Math.floor(Date.now() / 1000));


// Date.now() - decode.expire > 0


// function getDifferDate(count = 0, date = new Date()) {
//   const time = date.getTime();
//   const oneDayTime = 86400000;

//   return new Date(time + oneDayTime * count);
// }

// // const a = getDifferDate(1).getTime();

// // console.log(a);
// console.log(Date.now() - 1574265283945);

// console.log(new Date(1574261517636));


// const str = '123';
// console.log(str.indexOf('1') !== -1);

// const result = {};
// console.log(result === 1);

const json = '[{"prize_id":1,"num":1},{"prize_id":2,"num":1}]';

const jsonparse = JSON.parse(json);
console.log(jsonparse[0].prize_id);

