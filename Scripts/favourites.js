let tbody = document.querySelector('tbody');
let favouriteList;
if(localStorage.getItem('favouriteList') === null){
    favouriteList = [];
}else{
    favouriteList = JSON.parse(localStorage.getItem('favouriteList'))
}
console.log(favouriteList);
favouriteList.forEach((fav)=>{
    name = fav.favName;
    phoneNumber = fav.favNumber;
    type = fav.favType;
    // console.log(name);
    displayData(name , phoneNumber ,type);
});


function displayData(name , phoneNumber ,type){
    let row = document.createElement('tr');
    let dataName = document.createElement('td');
    let dataNumber = document.createElement('td');
    let dataType = document.createElement('td');
    dataName.innerText = name;
    dataNumber.innerText = phoneNumber;
    dataType.innerHTML = type;
    row.append(dataName , dataNumber,dataType);
    tbody.append(row);
}
