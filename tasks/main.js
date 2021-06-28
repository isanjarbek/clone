const Sum = []
function sumArr(arr, brr) {
    // arr.map((num) => Number(num))
    // brr.map((num) => Number(num))

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < brr.length; j++) {
            if (i == j) {
                Sum.push(+arr[i] + +brr[j])
            }
        }
    }
}
sumArr(['4', '5', '6', '7', '8'], ['1', '2', '3', '4', '5'])
console.log(Sum)
