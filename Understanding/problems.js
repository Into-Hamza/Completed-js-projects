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
let n = 4
let pattern = ''
for (let i = 0; i < n; i++) {
    for (let j = 0; j < i+1; j++) {
        pattern += '*'
    }
    for (let k = 6 - 2*i + 1; k > 1 ; k--) {
        pattern += ' '
    }
    for (let l = 0; l < i + 1; l++) {
        pattern += '*'
    }
    pattern += '\n'
}
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n-i; j++) {
        pattern += '*'
    }
    for (let k = 2*i ; k > 0 ; k--) {
        pattern += ' '
    }
    for (let l = n-i; l > 0; l--) {
        pattern += '*'
    }
    pattern += '\n'
}
console.log(pattern);


// ********************************* 👆 example 14 *********************************