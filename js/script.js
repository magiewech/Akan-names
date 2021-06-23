console.log("hey yoh")
var button = document.getElementById("submit")
button.addEventListener("click",submit)




function submit(event){
    event.preventDefault()
    var day = document.getElementById("day").value
    var year = document.getElementById("year").value
    var month = document.getElementById("month").value
console.log(day,year,month)
}