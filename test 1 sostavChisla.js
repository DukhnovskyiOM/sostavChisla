function sostavChisla(massivChisel, chislo) {
  let arrAll = [] // массив всех возможных вариантов
  let result = []
 
  function generateArray (arr, size) {  // функция генерации всех возможных вариантов
    if (size > arr.length) return [];
    else if (size == 1) return arr.map(d=>[d]);
    return arr.flatMap(d => generateArray(arr.filter(a => a !== d), size - 1).map(item => [d, ...item]));
  };
 
  for (let i = 1; i < massivChisel.length +1; i++){// добавляем в массив все варианты
    arrAll.push(generateArray(massivChisel, i))
  };
 
  for(let i = 0; i < arrAll.length; i++){ // проверяем условие
    arrAll[i].forEach(e => {
      if(e.reduce((acc, num) => acc + num, 0) === chislo){
        result.push(e.sort((a, b) => a - b))
   }})};
 
  return result.map(e => JSON.stringify(e)).reduce((u,i) => { // убираем повторения
  return u.includes(i) ? u : [...u, i]
}, []).map(e => JSON.parse(e))
 
}
console.log(sostavChisla([8, 2, 3, 4, 6, 7, 1], 5));