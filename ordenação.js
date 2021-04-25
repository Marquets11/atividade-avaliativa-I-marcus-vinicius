//SELECTION SORT
function selectionSort(_array) {
    let array = [... _array],
    n = array.length
        
    for(let i = 0; i < n; i++) {
        // Procurando o menor valor pelos sub-array
        let min = i
        for(let j = i+1; j < n; j++){
            if(array[j] < array[min]) {
                min=j
            }
         }
         if (min != i) {
             // Trocando os elementos de posição
             let tmp = array[i]
             array[i] = array[min]
             array[min] = tmp  
        }
    }
    return array
}


//QUICK SORT
function quickSort(array = [... _array], limiteEsquerdo = 0, limiteDireito = array.length - 1) {
  let len = array.length,
      index

  if(len > 1) {

    index = partition(array, limiteEsquerdo, limiteDireito)

    if(limiteEsquerdo < index - 1) {
      quickSort(array, limiteEsquerdo, index - 1)
    } 
    if(index < limiteDireito) {
      quickSort(array, index, limiteDireito)
    }
  }
  return array
}
function partition(_array, limiteEsquerdo, limiteDireito) {
  let array = [... _array],
  medio = Math.floor((limiteDireito + limiteEsquerdo) / 2),
      pivo = array[medio],
      i = limiteEsquerdo,
      j = limiteDireito

  while(i <= j) {
    while(array[i] < pivo) {
      i++
    }
    while(array[j] > pivo) {
      j--
    }
    if(i <= j) {
      [array[i], array[j]] = [array[j], array[i]]
      i++
      j--
    }
  }
  return i
}


//COMB SORT
function combSort(_array) {
    let array = [... _array]
    let length = array.length
    let gap = length
    let shrink = 1.3
    let done
    
    do {
      gap = Math.floor(gap / shrink);
      done = true
      
      for (let i = 0, j = gap; j < length; i++, j++) {
        if (array[i] > array[j]) {
          
          done = false;
          let temp = array[i]
          array[i] = array[j]
          array[j] = temp
        }
      }
    } while (!done)
  
    return array
}

//BUCKET SORT
function bucketSort(_array, tamanhoBucket) {
  let array = [... _array]
  if (array.length === 0) {
    return array;
  }
  var i,
      valorMinimo = array[0],
      valorMaximo = array[0],
      tamanhoBucket = tamanhoBucket || 5;
  
  // Definindo valores máximos e mínimos
  array.forEach(function (valorAtual) {
  	if (valorAtual < valorMinimo) {
  		valorMinimo = valorAtual;
  	} else if (valorAtual > valorMaximo) {
  		valorMaximo = valorAtual;
  	}
  })

  // Inicializando os buckets
  var bucketCount = Math.floor((valorMaximo - valorMinimo) / tamanhoBucket) + 1;
  var allBuckets = new Array(bucketCount);
  
  for (i = 0; i < allBuckets.length; i++) {
    allBuckets[i] = [];
  }
  
  array.forEach(function (valorAtual) {
  	allBuckets[Math.floor((valorAtual - valorMinimo) / tamanhoBucket)].push(valorAtual);
  });

  array.length = 0;
  
  allBuckets.forEach(function(bucket) {
  	selectionSort(bucket);
  	bucket.forEach(function (element) {
  		array.push(element)
  	});
  });

  return array;
}