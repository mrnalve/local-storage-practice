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
let resetAllInfo = ()=>{
    localStorage.clear();
    document.getElementById('nameField').value = ''
    document.getElementById('emailField').value = ''
    document.getElementById('messageField').value = ''
}

// send all info in localStorage
let sendAllInfo = () =>{
    let nameField = document.getElementById('nameField').value
    let emailField = document.getElementById('emailField').value
    let messageField = document.getElementById('messageField').value
    let myObj = {
        Name: nameField,
        Email: emailField,
        Message: messageField
    }
    let myObjStringified = JSON.stringify(myObj)
    localStorage.setItem('Information', myObjStringified)
}