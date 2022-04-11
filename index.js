let contactList = [];
document.querySelector('form').addEventListener('submit',()=>{
    let contact = {
     name : document.getElementById("name").value,
     phoneNumber : document.getElementById("number").value,
     type : document.getElementById("type-select").value,
    }
    contactList.push(contact);
    localStorage.setItem('contactList',JSON.stringify(contactList));
});