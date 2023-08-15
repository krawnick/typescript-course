var fetchData = function (url, method) {
    console.log('Fetched');
};
// const reqOpt =
// : {
//   url: string
//   method: 'GET' | 'POST'
// }
// {
//   url: 'https://someurl.com',
//   method: 'GET' as 'GET',
// }
// const reqOpt = {
//   url: 'https://someurl.com',
//   method: 'GET',
// } as const
var reqOpt = {
    url: 'https://someurl.com',
    method: 'GET',
};
fetchData('qqq', 'GET');
// fetchData(reqOpt.url, reqOpt.method as 'GET')
// fetchData(reqOpt.url, reqOpt.method)
fetchData(reqOpt.url, reqOpt.method);
var box = document.querySelector('.box');
var input = document.querySelector('input');
console.log(input);
// const someNumber: number = +input.value as any as number
var someNumber = +input.value;
console.log(someNumber);
// box.style
// box?.classList
// console.log(box)
