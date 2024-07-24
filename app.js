let expense = []
let expenseForm = document.getElementById("expenseForm")
const button = document.getElementById("submit")
button.addEventListener("click", function(e){
    e.preventDefault("")
    const expenseName = document.getElementById("expenseName").value;
    const amount = parseFloat(document.getElementById("amount").value);
    // const price = document.getElementById("price").value
    const category = document.getElementById("category").value;
    const date = document.getElementById("date").value;
    console.log(expenseName, amount, category, date)
    // validate form input
    if(!expenseName || isNaN(amount)  || !category  || !date){
        alert("Please fill in all fields with valid data.")
        return;
    }
    const user = [expenseName, amount, category, date]
    // store into an array
    expense.push({expenseName, amount, category, date})
   
})
function saveToLocalStorage(user){
    const users = JSON.parse(localStorage.getItem("users"))||[]
    if(!Array.isArray()){
        users = []
    } 
    users.push(user)
    localStorage.setItem("users",JSON.stringify("users"))
}