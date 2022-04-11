let tbody = document.querySelector('tbody');
let contactList;
if(localStorage.getItem('contactList') === null){
    contactList = [];
}else{
    contactList = JSON.parse(localStorage.getItem('contactList'))
}
contactList.forEach((contact)=>{
    name = contact.name;
    phoneNumber = contact.phoneNumber;
    type = contact.type;
    displayData(name , phoneNumber ,type);
});

function displayData(name , phoneNumber ,type){
    let row = document.createElement('tr');
    let dataName = document.createElement('td');
    let dataNumber = document.createElement('td');
    let dataType = document.createElement('td');
    let favBtn = document.createElement('button');
    favBtn.innerText = "Add To Favourites";
    dataName.innerText = name;
    dataNumber.innerText = phoneNumber;
    dataType.innerHTML = type;
    row.append(dataName , dataNumber,dataType,favBtn);
    favBtn.addEventListener('click',()=>{
        let fav ={
            favName : dataName.innerText,
            favNumber : dataNumber.innerText,
            favType : dataType.innerText,
        }
        let favouriteList;
        if(localStorage.getItem('favouriteList') === null){
            favouriteList = [];
        }else{
            favouriteList = JSON.parse(localStorage.getItem('favouriteList'))
        }
        favouriteList.push(fav);
        localStorage.setItem('favouriteList',JSON.stringify(favouriteList));
    })
    tbody.append(row);
}

