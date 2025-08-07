// function findlargest(arr){
//     let largest = arr[0]
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] > largest){
//             largest = arr[i]
//         }
//     }
//     return largest
// }
// console.log(findlargest([200,3,55,6,80]))

// second method

function findlargest(arr){
    return Math.max(...arr)
}
console.log(findlargest([98,4,3,55,6,80]))