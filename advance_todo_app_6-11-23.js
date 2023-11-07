const addUserBtn = document.getElementById('addUser');

const usernameTextField = document.getElementById('userName');

const recordsDisplay = document.getElementById ('record')

let userArray = [];
let edit_id =null



let objStr = localStorage.getItem('users');
if(objStr!=null){
    userArray = JSON.parse(objStr);
}


// other todo app try for enterkey
// item.addEventListener(
//     "keyup",
// function(event){
//     if (event.key == "Enter"){
//         addTodo(this.value)
//         this.value = ""}})



DisplayInfo();

// Add an event listener for the Enter key press on the input field
usernameTextField.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default Enter key behavior (e.g., form submission)
        addUser(); // Call the addUser function when Enter key is pressed
    }
});

addUserBtn.onclick = addUser; // Assign the addUser function to the button click

function addUser() {
    const name = usernameTextField.value;
    if (edit_id !== null) {
        // Edit
        userArray.splice(edit_id, 1, { 'name': name });
        edit_id = null;
    } else {
        // Insert
        userArray.push({ 'name': name });
    }

    // You can also add any additional logic here, such as clearing the input field or updating the display.

    SaveInfo(userArray);
         usernameTextField.value=""
         DisplayInfo();
         addUserBtn.innerHTML = 'Add Your Goals'
    
}


function SaveInfo(userArray){
    let str = JSON.stringify(userArray);
    localStorage.setItem('users',str)
    DisplayInfo();

    
}


function DisplayInfo(){
     
let statement =" ";
userArray.forEach((user,i) =>{
    statement += ` <tr>
    <th scope="row">${i+1}</th>
    <td>${user.name}</td>
    <td> <i class= "btn text-white fa fa-edit btn-info mx-2" onclick='EditInfo(${i})'> 
    </i> <i class="btn btn-danger text-white fa fa-trash" onclick='DeleteInfo(${i})'></i></td>
  </tr>
    `
})
 recordsDisplay.innerHTML = statement

}

function EditInfo(id){
  edit_id = id;
    usernameTextField.value = userArray[id].name
    addUserBtn.innerText="Edit Goal"


}

// function DeleteInfo(id){
//     userArray.splice(id,1)
//     SaveInfo(userArray)
    
// }

function DeleteInfo(id) {
    // Ask the user for confirmation
    var confirmed = confirm("Are you sure you want to delete Your Goals?");
    
    if (confirmed) {
        // If the user confirms, delete the information
        userArray.splice(id, 1);
        SaveInfo(userArray);
    }
}




// const addUserBtn = document.getElementById('addUser');
// const usernameTextField = document.getElementById('userName');
// let userArray = [];
// let objstr = localStorage.getItem('users');
// userArray = JSON.parse(objstr);
// console. log(userArray);

// addUserBtn.onclick=()=>{
// const name = usernameTextField.value;
// userArray.push({'name' : name});}

// SaveInfo(userArray);
// function SaveInfo(userArray){
// let str = JSON.stringify(userArray);
// localStorage.setItem('users', str);}
// function DisplayInfo(){}
// function EditInfo(){}