// function alteredArr (arr, num){
//     let reversed = arr.slice(0, num).reverse()
//     let newarr = reversed.concat(arr.slice(num))
//     return newarr
// }


// let ans = alteredArr([2, 4, 9, 5, 1, 6, 99, 121], 5)
// console.log(ans);


// *********************************** 👆 example 1 *********************************


// function fibinacchi (num){
//     if (num <= 0) return []
//     if (num === 1) return [0]
//     if (num === 2) return [0, 1]
//     if (num === 3) return [0, 1, 1]
//     let arr = [0, 1, 1]
//     for (let index = 3; index < num; index++) {
//         let sum = arr[index - 1] + arr[index - 2] + arr[index - 3]
//         arr.push(sum)  
//     }
//     return arr;
// }
// let ans = fibinacchi(25)
// console.log(ans.join(" "));


// ********************************* 👆 example 2 *********************************


// function numberToRoman(num) {
//     const romanNumerals = [
//         { value: 1000, symbol: "M" },
//         { value: 900, symbol: "CM" },
//         { value: 500, symbol: "D" },
//         { value: 400, symbol: "CD" },
//         { value: 100, symbol: "C" },
//         { value: 90, symbol: "XC" },
//         { value: 50, symbol: "L" },
//         { value: 40, symbol: "XL" },
//         { value: 10, symbol: "X" },
        // { value: 9, symbol: "IX" },
//         { value: 5, symbol: "V" },
//         { value: 4, symbol: "IV" },
//         { value: 1, symbol: "I" }
//     ];

//     if (num <= 0 || num > 3999) {
//         return "Number out of range (1-3999)";
//     }

//     let roman = ''   
//     for (const {value, symbol} of romanNumerals) {
//         while (num >= value) {
//             roman += symbol
//             num -= value
//         }

//     }
//     return roman
// }

// console.log(numberToRoman(99));


// ********************************* 👆 example 3 *********************************


// function reverse (num){
//     let reversed = num.split(" ").map((e)=>{
        
//         return e.split("").reverse().join("")
//     })
    
//     return reversed
// }
// console.log(reverse("Hamza Is Brave").join(" "))

// ********************************* 👆 example 4 *********************************


// function Findarr(params) {
//    return Array.isArray(params) ?  `${params} is an array` : `${params} is notan array`
// }
// console.log(Findarr([1, 2, 55]))



// ********************************* 👆 example 5 *********************************


// let Arr = [1, 2, 5, 9, 10]
//  Arr.length = 0





// ********************************* 👆 example 6 *********************************




// let num = 5.5
// if (num%1 === 0)  console.log(true)
// else console.log(false)


// ********************************* 👆 example 7 *********************************




// function factorial(num){
//     let result = 1
//     while (num >= 2) {
//         result *=  num
//         // console.log(result);
        
//         num--
//     }
//     return result
// }
// console.log(factorial(3))




// ********************************* 👆 example 8 *********************************



// max of 2 numbers 
// let num = 17.5
// let num2 = 18
// function maxnum(one, two){
//     let ans = one > two ? console.log(`${one}: is greater than ${two}`) : console.log(`${two}: is greater than ${one}`);
//     return ans   
// }

// console.log(maxnum(num, num2))

// ********************************* 👆 example 9 *********************************


// let obj = {
//     name: "Hamza Awan",
//     DOB: "01-07-2001",
//     city: "Sheikhupura",
//     degree: {
//         uni: "UoL (University of Lahore)",
//         degreeName: 'BSEE',
//         isGraduated: true,
//         hasJob: false,
//         isApplying: true,
//         haveKnowledge: ['HTML', 'CSS', 'Js', 'react', 'tailwind', 'GSAP']
//     },
//     activeOn: ["Facebook", "Instagram", "Snapchat", "Youtube", "Github", "Upwork", "LikedIn"],
//     lastApplied: "PieCypher",
//     practicing: true
// }
// function deepCopy(elem){
//     if (typeof elem != 'object'  || elem === null) {
//         return elem        
//     }
//         let deepCopied = Array.isArray(elem) ? [] : {}
//         let keys = Object.keys(elem)
//         for (let i = 0; i < keys.length; i++) {
//             deepCopied[keys[i]] = deepCopy(elem[keys[i]])
//         }
//         return deepCopied
// }

// let answer = deepCopy(obj)
// console.log(answer);

// ********************************* 👆 example 10 *********************************



// function primeFinder(num){
//     let check = true;
//         for (let i = 2; i <= num -1 ; i++) {
//             if (num % i ==0) {
//                 check = false                
//                 break;
//             }}
//             if (check == true) {
//                 console.log('it is a prime number');
                
//             }else{

//                 console.log("it is NOTTTTT prime number")
//             }
            
//         }
    
// primeFinder(27)

// console.log(typeof 11);

// ********************************* 👆 example 11 *********************************


//       1
//     1 2 1
//   1 2 3 2 1
// 1 2 3 4 3 2 1    print this
// let n =9
// let space = ''
// for (let i = 0; i < n ; i++) {
//     // for lines 

//     for (let j = 0; j < n - i - 1 ; j++) {
//         // for spaces 
//         space += '  '

//     }
//     for (let j = 1; j <= i + 1; j++) {
//         // for first pattern 
//         space += j + ' '
//     }
//     for (let k = i; k > 0; k--) {
//         // for second pattern 
//         space += k + " "
//     }
//     space += '\n'
// }
// console.log(space)

// ********************************* 👆 example 12 *********************************


//       *
//     *   *
//   *       *
// *           *    print this
//   *       *
//     *   *
//       *
// let o = 10 
// let spacer = ''
// // for upper half diamond 
// for (let i = 0; i < o; i++) {
//     for (let j = 0; j < o - i - 1; j++) {
//         spacer += ' '
//     }
//     spacer += '*'
//     if (i != 0) {
//         for (let k = 0; k < 2 * i - 1; k++) {
//             spacer += ' '
//         }
//         spacer += '*'
//     }
//     spacer += '\n'
// }
// for (let i = 0; i < o - 1; i++) {
//     for (let j = 0; j < i + 1; j++) {
//         spacer += ' '
//     }
//     spacer += '*'
//     if (i != o - 2) {
//         for (let k = 0; k < 2 * (o - i) - 5; k++) {
//             spacer += ' '
//         }
//         spacer += '*'
//     }
//     spacer += '\n'
// }
// console.log(spacer);

// ********************************* 👆 example 13 *********************************
//  *      *
//  **    **
//  ***  ***
//  ********   print this
//  ********
//  ***  ***   
//  **    **
//  *      *
// let n = 4
// let pattern = ''
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < i+1; j++) {
//         pattern += '*'
//     }
//     for (let k = 6 - 2*i + 1; k > 1 ; k--) {
//         pattern += ' '
//     }
//     for (let l = 0; l < i + 1; l++) {
//         pattern += '*'
//     }
//     pattern += '\n'
// }
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n-i; j++) {
//         pattern += '*'
//     }
//     for (let k = 2*i ; k > 0 ; k--) {
//         pattern += ' '
//     }
//     for (let l = n-i; l > 0; l--) {
//         pattern += '*'
//     }
//     pattern += '\n'
// }
// console.log(pattern);


// ********************************* 👆 example 14 *********************************

// Find prime numbers 
// function findPrime(params) {
//     let ans = true
//     for (let i = 2; i < params ; i++) {
//         if (params % i ==0) {
//             ans = false
//         }
//     }       
//     return ans
// }
// let ans = findPrime(31)
// console.log(ans);

// ********************************* 👆 example 15 *********************************
// Find nth prime number 

// function printPrimes(params) {
//     for (let i = 1; i <= params ; i++) {
//        let ans = findPrime(i)
//        if (ans) {
//         console.log(i)
//        }
//     }       
// }
// printPrimes(19)


// ********************************* 👆 example 16 *********************************

// Find nth fibinacchi series

// function findFibbinocchi(input) {
    
// }
// function fibonacciMemo(n) {
//     if(n<0) return 0
//     if(n === 2) return 1
//     let a = 0
//     let b = 1
//     let fib = 0
//     for (let i = 2; i <= n; i++) {
//         fib = a + b
//         a = b
//         b = fib
//     }
//    return fib
// }

// console.log(fibonacciMemo(10))


// ********************************* 👆 example 17 *********************************

// function whileloop(params) {
//     let no = 2
//     let ans = true
//     while (params > no) {
//         if (params % no == 0) {
//             ans = false
//         }
//         no++
//     }
//     return ans
// }


// let whileans = whileloop(12)
// console.log(whileans);


// ********************************* 👆 example 18 *********************************


// let number = -1432
// function reversenum(params) {
//     let ans = 0
//     let rem 
//     let isNegative = params < 0
//     params = Math.abs(params)
//     console.log(params)
//     while (params > 0) {
//         rem =  params % 10
//         ans =  ans*10 + rem
//         params = Math.floor(params / 10)

//     }
//     if (isNegative) {
//         ans = -ans
//     }
//     return (ans)
// }
// console.log(reversenum(number))
// console.log(number)


// ********************************* 👆 example 19 *********************************


// let str = "plplpl"
// let palendrome = (params) =>{
//     let ulti = params.split("").reverse().join("")
//     if (params === ulti) {
//         return true
//     }else{
//         return false
//     }

    
// }
// console.log(palendrome(str));



// ********************************* 👆 example 20 *********************************

    // let str = ["hamza", 10, 5, 'is', 1, 'a']
    // let alphaOrder = (input)=>{
    // let ans = 0
    //     input.map((indexs)=>{
    //     if (typeof indexs == 'number') {
    //         ans += indexs
    //     }
    //     })
    //     return ans
    // }
    // console.log(alphaOrder(str));
    

// ********************************* 👆 example 21 *********************************



// let arr = [{
//     name: 'hamza',
//     gender: 'male'
// },{
//     name: 'hamna',
//     gender: 'female'
// },{
//     name: 'hamza',
//     gender: 'male'
// },{
//     name: 'hamna',
//     gender: 'female'
// },{
//         name: 'hamza',
//         gender: 'male'
//     }

// ]
// let newarr =[]
// arr.map((obj)=>{
//     if (    obj['gender'] != 'female')   {
//         newarr.push(obj)
//     }
    
// })
// console.log(newarr);


// ********************************* 👆 example 22 *********************************


// function isPowerOfTwo(num) {
//     if (num <= 0) return false;

//     // Calculate the logarithm base 2 of the number
//     const log2 = Math.log2(num);
//     console.log(log2);
    
//     // Check if the logarithm is an integer
//     return Number.isInteger(log2);
// }

// // Example usage:
// console.log(isPowerOfTwo(1));   // Output: true (2^0)
// console.log(isPowerOfTwo(2));   // Output: true (2^1)
// console.log(isPowerOfTwo(10737418240));   // Output: false
// console.log(isPowerOfTwo(16));  // Output: true (2^4)
// console.log(isPowerOfTwo(18));  // Output: false



// ********************************* 👆 example 23 *********************************


// let arr = [2, 5, 77, 223, 334, 78, 69]
// let obj = {
//     name: 'Hamza',
//     class: 'none',
//     degree: false,
//     education: {
//         first: 'school',
//         second: 'college',
//         third: 'university'
//     }
// }
// // let [a, b,,, ...c] = arr
// // let third = [...c,...arr]
// // console.log(third);

// function name({name:naam, fav='pineapple', education:{third}}) {
//     console.log({naam,third,fav});
    
// }
// name(obj)

// ********************************* 👆 example 24 *********************************


// class name {
//     constructor(name,age,styding) {
//         this.name = name
//         this.age = age
//         this.styding = styding
//     }
//      print() {
//         return `${this.name.toUpperCase()}`
        
//     }    



// }
// let data = new name('hamza',25,false)
// console.log(data.name,data['age'],data['styding'],data.print())


// ********************************* 👆 example 25 *********************************


// let arr = [2, 5, 77, 223, 334, 78, 69]

// let start = 0
// let negative = Infinity
// let positive = -Infinity
// while (start < arr.length - 1) {
//     if (arr[start] < negative) {
//         negative = arr[start] 
//     }
//     else if (arr[start] > positive) {
//         positive = arr[start] 
//     }
//     start++
// }
// console.log(negative);
// console.log(positive);

// ********************************* 👆 example 26 *********************************


let arr = [2, 5, 77, 223, 334, 78, 69]

let start = 0
let swapped = []
let negative = Infinity
let positive = -Infinity
if (arr.length>0) {
    while (start < arr.length ) {
        if (arr[start] < negative) {
                    negative = arr[start] 
                }
                else if (arr[start] > positive) {
                    positive = arr[start] 
                }
                start++
    }
    let = maximum = arr.indexOf(positive)
    let = minimum = arr.indexOf(negative);
    [arr[minimum],arr[maximum]] = [arr[maximum],arr[minimum]]
    
}
console.log(arr);



// ********************************* 👆 example 27 *********************************