// send function for send data in localStorage
let sendInfo = (inputId, text)=>{
    let inputField = document.getElementById(inputId)   
    let inputValue = inputField.value;
    localStorage.setItem(text, inputValue)
}

// Delete function for delete data in localStorage

let DeleteInfo = (text)=>{
    localStorage.removeItem(text)
}

// reset all data
let reset = ()=>{
    localStorage.clear();
    document.getElementById('nameField').value = ''
    document.getElementById('emailField').value = ''
    document.getElementById('messageField').value = ''
}