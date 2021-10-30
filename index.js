function pro1(){
    var array = [1,2,3,4,5,6,7,8,9]
    var result = array.filter(function(num){
        return num % 2 == 0
    })
    alert("These are even numbers" + "  " +result)
}

function pro2(){
    var word = prompt("Write Here")
    var final_word = ""
    for(var i = word.length -1; i >= 0; i--){
    final_word+= word[i]
}
return alert(word == final_word) 
}

function pro3() {
    var array = ["Hasssan","Salman","Kamran","Rashid","Faizan","Noor"]
    var filter = array.filter(function(filter_an){
    var result = filter_an.includes("an")
    return result
})
alert(filter)
}

function pro4(){
    var string = "This is the a string is called the.".toLowerCase()
    var result = (string.split("the").length -1);
    alert("'the' is using in this sentence" + " " + result + " times")
}


function pro5(){
    alert("Menu List" + "\n" + "1) Zinger" + "\n" + "2) Biryani" + "\n" + "3) Pulao" + "\n" + "4) Sandwich")
    var array = ["biryani","zinger","pulao","sandwich"];
    var user = prompt ("Enter A Dish").toLowerCase()
    if (array.includes(user) == true){
    alert("Available")
    } 
    else {
    alert("Not Available")
    }
}

function pro6(){
var arr = [1,8,4,4,5,1,7,2,2,3];
var duplicates = [...new Set(arr)];

alert(duplicates);
}

function pro7(){
    var day = new Date().getDay()
    switch (day) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
    }
    alert("Today is " + day)
}