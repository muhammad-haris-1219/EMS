// signUp & Login Page
var allUsersData = [];
var allUsers = localStorage.getItem('users');
if (allUsers !== null) {
    allUsersData = JSON.parse(allUsers)
}

var signupName = document.getElementById('signup_name');
var signupEmail = document.getElementById('signup_email');
var signupPassword = document.getElementById('signup_password');
var loginEmail = document.getElementById('login_email');
var loginPassword = document.getElementById('login_password');

function signUp() {
    var signupNameCode = signupName.value.slice(0, 1).charCodeAt()
    switch (true) {
        case (signupNameCode >= 32 && signupNameCode <= 64 || signupNameCode >= 91 && signupNameCode <= 96 || signupNameCode >= 123 && signupNameCode <= 127 || signupEmail.value == '' || signupPassword.value == ''):
            alert("Please Fill Form Correctly..! ")
            console.log(signupNameCode)
            location.href = './index.html';
            break;
        default:
            var userObject = {
                naming: signupName.value,
                email: signupEmail.value,
                password: signupPassword.value
            }
            allUsersData.push(userObject);
            localStorage.setItem('users', JSON.stringify(allUsersData));
    }
}


function logIn() {
    var filteredUser = allUsersData.filter(function (data) {
        return data.email === loginEmail.value && data.password === loginPassword.value;
    })
    if (filteredUser.length) {
        location.href = './signup.html'
    }
    else {
        alert('Please Enter Your Registered Data.!')
        location.href = './login.html'
    }
}

function logOut() {
    location.href = './login.html'
}

// popup hidden shown

var popUp = document.getElementById('popup');
function expensePopup() {
    popUp.style.zIndex = "1"; popUp.style.opacity = "1";

}
function closePopup() {
    popUp.style.zIndex = "-1"; popUp.style.opacity = "0";
}



var table = document.getElementById('table');
var userID = 0;
var tr;
var td;
var amountValue = 0;
function saveData() {
    userID++
    var editBtn = document.createElement('button');
    var deleteBtn = document.createElement('button');
    editBtn.setAttribute('onclick', 'editData(this)');
    deleteBtn.setAttribute('onclick', 'deleteData(this)');

    var userData = [
        document.getElementsByTagName('tr').firstChild = 'EMS ' + userID,
        document.getElementById('description').value,
        +document.getElementById('amount').value,
        document.getElementById('date').value,
        ""
    ];
    tr = document.createElement('tr');

    for (var i = 0; i < userData.length; i++) {
        td = document.createElement('td');
        var tdText = document.createTextNode(userData[i]); // Tt can be used tdText.textContent = userData[i];
        td.appendChild(tdText);

        td.appendChild(editBtn);
        td.appendChild(deleteBtn);
        tr.appendChild(td);

        // console.log(userData)
    }
    table.appendChild(tr);
    document.getElementById('amount').value = document.getElementById('description').value = document.getElementById('date').value = '';

    document.getElementById('total_Id').innerText = 'IDs: ' + userID;
    amountValue += Number(td.parentElement.children[2].textContent);
    document.getElementById('total_amount').innerText = 'Amount ' + amountValue;

}

function deleteData(item) {
    document.getElementById('total_Id').innerText = --userID
    item.parentElement.parentElement.remove(); //represented .parentElement => td then .parentElement=>tr
}

var fetchData;
function editData(e) {

    document.getElementById('save').style.display = 'none';
    document.getElementById('update').style.display = 'block';
    expensePopup()
    fetchData = e;
}

function updateData() {
    closePopup()
    document.getElementById('update').style.display = 'none';
    document.getElementById('save').style.display = 'block';
    fetchData.parentElement.parentElement.children[1].textContent = document.getElementById('description').value;
    fetchData.parentElement.parentElement.children[2].textContent = document.getElementById('amount').value;
    fetchData.parentElement.parentElement.children[3].textContent = document.getElementById('date').value;
    console.log(fetchData)
}











