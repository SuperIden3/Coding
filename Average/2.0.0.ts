var average = (array: any[]): any => {
    var sum = 0
    var count = 0
    for (var i of array) {
        sum += i
    }
    for (var j = 0; j < array.length; j++) {
        count++
    }
    console.log(i)
    console.log(j)
    console.log(sum)
    console.log(count)
    return `Average (${sum} / ${count}): ${sum / count}`
}