
addressid = 0;
class Address{
    fname = '';
    surname = '';
    phone = '';
    address = '';
    id = 0;
    constructor(fname,surname,phone,address){
        this.fname = fname;
        this.surname = surname
        this.phone = phone;
        this.address = address;
        this.id = ++addressid;
    }
    getFullName() {
        return this.fname + " " + this.surname; 
    }
}


var addresses = [
    new Address("Arnab", "Sheikh", "+8801779565288" , "Mirpur, Dhaka-1216"),
    new Address("Rakibul","Islam", "+8801772465288" , "Mirpur, Dhaka-1216"),
    new Address("Project", "Code", "+8801111111111", "House 36, Road 104, Gulshan 2, Dhaka 1212")
];


//Create a new Address
var form = document.getElementById("new-add");
form.addEventListener("submit", createAddress);

var fname = document.getElementById("fname");
var sname = document.getElementById("sname");
var phone = document.getElementById("phone");
var address = document.getElementById("address");

function createAddress(event){
    event.preventDefault();

    if(fname.value && sname.value && phone.value && address.value){
        addresses.push(new Address(fname.value,sname.value,phone.value,address.value));
        showAllAddresses();
        
        clearForm();

    }
    else{
        alert("You must fill up all fields!");
    }
    
}

//clear the form
function clearForm(){
    fname.value = "";
    sname.value = "";
    phone.value = "";
    address.value = "";
}



// Search Address
var search = document.getElementById("search-add");
search.addEventListener("keyup", searchAddress);

function searchAddress(keyPressed){
    keyword = keyPressed.target.value.toLowerCase();
    
    
    var searched = addresses.filter((element) => element.getFullName().toLowerCase().includes(keyword));
    
    
    $('#searched').empty();
    searched.forEach(element => {
        var fullname = document.createElement("h5");
        fullname.appendChild(document.createTextNode(element.getFullName()));
        var phone = document.createElement("p");
        phone.appendChild(document.createTextNode(element.phone));
        var address = document.createElement("p");
        address.appendChild(document.createTextNode(element.address));

        var dltbtn = document.createElement("button");
		dltbtn.setAttribute("class", "dltbtn");
		dltbtn.innerHTML = "Delete";

        var singleAddress = document.createElement("div");
        singleAddress.setAttribute("id",element.id);
        singleAddress.appendChild(fullname);
        singleAddress.appendChild(phone);
        singleAddress.appendChild(address);
        singleAddress.appendChild(dltbtn);
        
        $("#searched").append(singleAddress);
    });

    if(keyword === "" ) {
        $('#searched').empty();
    }
}

// Remove Address
var displayaddress = document.getElementById("all");
displayaddress.addEventListener("click", removeAddress);

var displaySearched = document.getElementById("searched");
displaySearched.addEventListener("click", removeAddress);

function removeAddress(event){
    if(event.target.className === 'dltbtn'){
        var id = event.target.parentElement.id;
        addresses = addresses.filter((element) => element.id != id);
        showAllAddresses();
        $('#searched').empty();
    }
}







//Show all saved Addresses
function showAllAddresses(){

    $("#all").empty();
    addresses.forEach(element => {
        var fullname = document.createElement("h5");
        fullname.appendChild(document.createTextNode(element.getFullName()));
        var phone = document.createElement("p");
        phone.appendChild(document.createTextNode(element.phone));
        var address = document.createElement("p");
        address.appendChild(document.createTextNode(element.address));

        var dltbtn = document.createElement("button");
		dltbtn.setAttribute("class", "dltbtn");
		dltbtn.innerHTML = "Delete";

        var singleAddress = document.createElement("div");
        singleAddress.setAttribute("id",element.id);
        singleAddress.appendChild(fullname);
        singleAddress.appendChild(phone);
        singleAddress.appendChild(address);
        singleAddress.appendChild(dltbtn);

        $("#all").append(singleAddress);
    });
};
showAllAddresses();