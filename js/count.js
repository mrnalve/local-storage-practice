let count = 0;
let numberField = document.getElementById('number');
let increaseBtn = ()=>{
    count++
    numberField.innerText = count;
    localStorage.setItem('count', count)
    // console.log(localStorage.getItem('count'));
}

// get count value from local storage
let displayCountFromStorage = ()=>{
    let countValue = localStorage.getItem('count')
    numberField.innerText = countValue
}
displayCountFromStorage()