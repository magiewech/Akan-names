console.log("hey yoh")
var button = document.getElementById("submit")
button.addEventListener("click",submit)
//
// radio.addEventListener("checked",female)
// radio.addEventListener("checked",male)

var femaleAkans = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
var maleAkans =["Kwasi","kwado","Kwabena","Kwaku","Yau","Kofi","Kwame"
]




function submit(event){
    event.preventDefault()
    var day = document.getElementById("day").value
    var year = document.getElementById("year").value
    var month = document.getElementById("month").value
    var female = document.getElementById("female").checked
    var male = document.getElementById("male").checked
    var message = "Your Akan name is "
    var message2 = " because you were born on "


    if(female){

         alert(message + femaleAkans[getWeekDay()] + message2 + getWeekDay())
    } else if(male){
        alert(message + maleAkans[getWeekDay()] + message2 + getWeekDay())
    } else{
        alert("choose a valid gender")
    }

     function getWeekDay(){
    var birthDay =new Date(year,month,day);
      console.log(birthDay)
    var dayOfWeek =birthDay.getDay();
    return dayOfWeek
    }
}



