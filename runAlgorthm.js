function generateRandonList(num) {
    let list = []
    for (let i = 0; i < num; i++) {
        let randomNumber = Math.floor(Math.random() * num) + 1
        list.push(randomNumber)
    }
    return list
}

function bubbleSortDuration(qtn) {
    let initialTime = new Date()
    bubbleSort(generateRandonList(qtn))
    let endTime = new Date()
    let diffTime = (endTime - initialTime)
    console.log(`Duração Bubble Sort com ${qtn} itens: ${diffTime} milisegundos`)
}

function quickSortDuration(qtn) {
    let initialTime = new Date()
    quicksort(generateRandonList(qtn))
    let endTime = new Date()
    let diffTime = (endTime - initialTime)
    console.log(`Duração Quick Sort com ${qtn} itens: ${diffTime} milisegundos`)
}

function mergeSortDuration(qtn) {
    let initialTime = new Date()
    mergeSort(generateRandonList(qtn))
    let endTime = new Date()
    let diffTime = (endTime - initialTime)
    console.log(`Duração Merge Sort com ${qtn} itens: ${diffTime} milisegundos`)
}

function radixDuration(qtn) {
    let initialTime = new Date()
    radixSort(generateRandonList(qtn))
    let endTime = new Date()
    let diffTime = (endTime - initialTime)
    console.log(`Duração Radix Sort com ${qtn} itens: ${diffTime} milisegundos`)
}

function countingSortDuration(qtn) {
    let initialTime = new Date()
    countingSort(generateRandonList(qtn))
    let endTime = new Date()
    let diffTime = (endTime - initialTime)
    console.log(`Duração Counting Sort com ${qtn} itens: ${diffTime} milisegundos`)
}

function heapSortDuration(qtn) {
    let initialTime = new Date()
    heapSort(generateRandonList(qtn))
    let endTime = new Date()
    let diffTime = (endTime - initialTime)
    console.log(`Duração Heap Sort com ${qtn} itens: ${diffTime} milisegundos`)
}

function bucketSortDuration(qtn) {
    let initialTime = new Date()
    bucketSort(generateRandonList(qtn))
    let endTime = new Date()
    let diffTime = (endTime - initialTime)
    console.log(`Duração Bucket Sort com ${qtn} itens: ${diffTime} milisegundos`)
}


var arraySizes = [10,20,50,100,200,500,1000,2000,5000,10000,20000,50000,100000]

for(let i=0; i<20; i++){

    arraySizes.forEach(value => {
        bubbleSortDuration(value)
    })
    console.log("==============================")
    arraySizes.forEach(value => {
        quickSortDuration(value)
    })
    console.log("==============================")
    arraySizes.forEach(value => {
        mergeSortDuration(value)
    })
    console.log("==============================")
    arraySizes.forEach(value => {
        radixDuration(value)
    })
    console.log("==============================")
    arraySizes.forEach(value => {
        countingSortDuration(value)
    })
    console.log("==============================")
    arraySizes.forEach(value => {
        heapSortDuration(value)
    })
    console.log("==============================")
    arraySizes.forEach(value => {
        bucketSortDuration(value, 4)
    })

}