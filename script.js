const formulario = document.getElementById("form")
// const botaoOrdenar = document.getElementById("botao-ordenar")

formulario.addEventListener('submit', function(e){
    e.preventDefault()
    // botaoOrdenar.style.backgroundColor = "green"
})

function receberInput(){
    const input = document.getElementById('input').value
    var array = input.split(',')

    if(!isNaN(array[0])){
        for(let i = 0; i < array.length; i++){
            array[i] = Number(array[i])
        }
    }
    ordenarArray(array)
}

function ordenarArray(array){
    let inicioMetodo, finalMetodo, timeSelectionSort, timeQuickSort, timeCombSort, timeBucketSort,
    arraySelectionSort, arrayQuickSort, arrayCombSort, arrayBucketSort

    inicioMetodo = performance.now()
    arraySelectionSort = selectionSort(array)
    finalMetodo = performance.now()
    timeSelectionSort = finalMetodo - inicioMetodo

    inicioMetodo = performance.now()
    arrayQuickSort = quickSort(array)
    finalMetodo = performance.now()
    timeQuickSort = finalMetodo - inicioMetodo

    inicioMetodo = performance.now()
    arrayCombSort = combSort(array)
    finalMetodo = performance.now()
    timeCombSort = finalMetodo - inicioMetodo

    inicioMetodo = performance.now()
    arrayBucketSort = bucketSort(array)
    finalMetodo = performance.now()
    timeBucketSort = finalMetodo - inicioMetodo

    liberarOutput(array, arraySelectionSort, timeSelectionSort, timeQuickSort, timeCombSort, timeBucketSort)
}

function liberarOutput(arrayDesordenado, arrayOrdenado, timeSelectionSort, timeQuickSort, timeCombSort, timeBucketSort){

    let temposSort = [timeSelectionSort, timeQuickSort, timeCombSort, timeBucketSort],
    // max = Math.max(... temposSort),
    // min = Math.min(... temposSort)
    max = temposSort.indexOf(Math.max(... temposSort)),
    min = temposSort.indexOf(Math.min(... temposSort))

    const div = document.getElementById('container')
    div.textContent = ''
    const html = `
        <div id="arrays">
            <h1 id="entradaTxt">
                Entrada:
            </h1>
            <h2 id="entradaValor">
                ${arrayDesordenado}
            </h2>
            <h1 id="saidaTxt">
                Saída:
            </h1>
            <h2 id="saidaValor">
                ${arrayOrdenado}
            </h2>
        </div>
        `

        const tabela = document.getElementById('sort')
        tabela.innerHTML = `
            <tr id="0">
                <th>Selection Sort</th>
                <td>${timeSelectionSort.toFixed(8)}<td>
            </tr>

            <tr id="1">
                <th>Quick Sort</th>
                <td>${timeQuickSort.toFixed(8)}<td>
            </tr>

            <tr id="2">
                <th>Comb Sort</th>
                <td>${timeCombSort.toFixed(8)}<td>
            </tr>

            <tr id="3">
                <th>Bucket Sort</th>
                <td>${timeBucketSort.toFixed(8)}<td>
            </tr>
        `
        let metodos = tabela.getElementsByTagName('tr')

        metodos[max].style.backgroundColor = "red"
        metodos[min].style.backgroundColor = "green"

        // <table border="1" id="sort" align=center>
        //     <tr id="selectionSort">
        //         <th>Selection Sort</th>
        //         <td>${timeSelectionSort.toFixed(4)}<td>
        //     </tr>

        //     <tr id="quickSort">
        //         <th>Quick Sort</th>
        //         <td>${timeQuickSort.toFixed(4)}<td>
        //     </tr>

        //     <tr id="combSort">
        //         <th>Comb Sort</th>
        //         <td>${timeCombSort.toFixed(4)}<td>
        //     </tr>

        //     <tr id="bucketSort">
        //         <th>Bucket Sort</th>
        //         <td>${timeBucketSort.toFixed(4)}<td>
        //     </tr>
        // </table>

        // <div id="sort">
        //     <span id="selection">
        //         Selection Sort | ${timeSelectionSort.toFixed(4)}
        //     </span>
        //     <br>
        //     <span id="quick">
        //         Quick Sort | ${timeQuickSort.toFixed(4)}
        //     </span>
        //     <br>
        //     <span id="comb">
        //         Comb Sort | ${timeCombSort.toFixed(4)}
        //     </span>
        //     <br>
        //     <span id="bucket">
        //         Bucket Sort | ${timeBucketSort.toFixed(4)}
        //     </span>
        //     <br>
        //     <br>
        //     <span>
        //         Melhor tempo: ${min.toFixed(4)} | Pior Tempo ${max.toFixed(4)}
        //     </span>

    div.insertAdjacentHTML('beforeend', html)
}