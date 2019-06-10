var eventType  = prompt ("What is your event?", "formal");
var tempFahr = prompt ("what is the temperature?");
var c1= " something comfy";
var c2 = " a polo";
var c3 = " a suit";
var c4 = " and a coat.";
var c5 = " and a jacket.";
var c6 = " and no jacket.";
var c7 = "You should wear"


if  ((eventType =="formal") && (tempFahr <= "54" )) {
    var res = c7.concat(c3, c4);
    console.log(res);
} else if ((eventType =="formal") && (tempFahr >= "70" )) {
        var res = c7.concat(c3, c6);
        console.log(res);
} else if  ((eventType =="formal") && (tempFahr >= "55") && (tempFahr <=69)) {
    var res = c7.concat(c3, c5);
    console.log(res); 
}

if  ((eventType == "semi-formal") && (tempFahr <= "54" )) {
    var res = c7.concat(c2, c4);
    console.log(res);
} else if  ((eventType == "semi-formal") && (tempFahr >= "70" )) {
        var res = c7.concat(c2, c6);
        console.log(res);
} else if  ((eventType == "semi-formal") && (tempFahr >= "55") && (tempFahr <=69)) {
    var res = c7.concat(c2, c5);
    console.log(res);
}

if  ((eventType == "casual") && (tempFahr <= "54" )) {
    var res = c7.concat(c1, c4);
    console.log(res);
} else if  ((eventType == "casual") && (tempFahr >= "70" )) {
        var res = c7.concat(c1, c6);
        console.log(res);
} else if  ((eventType == "casual") && (tempFahr >= "55") && (tempFahr <=69)) {
    var res = c7.concat(c1, c5);
    console.log(res);
}









 


