let contactList;
if(localStorage.getItem('contactList') === null){
    contactList = [];
}else {
    contactList = JSON.parse(localStorage.getItem('contactList'));
}
document.querySelector('form').addEventListener('submit',()=>{
    let contact = {
     name : document.getElementById("name").value,
     phoneNumber : document.getElementById("number").value,
     type : document.getElementById("type-select").value,
    }
    contactList.push(contact);
    localStorage.setItem('contactList',JSON.stringify(contactList));
    alert("Contact Added Successfully");
});