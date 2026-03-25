//  exercise 1
let score=85

if(score>=90){
    console.log('gradeA')
}
else if(score>=80){
    console.log('gradeB')
}
else if(score>=70){
    console.log('gradeC')
}
else{
    console.log('gradeF')
}

// activity 2 

let num=7;

if(num%2===0){
    console.log(num+"is even")
}
else{
    console.log(num+"is odd")
}

// activity  3 

let age =15;

if(age>=18){
    console.log("R-rated movie allowed")
}
else if(age>=13){
    console.log("PG-13 movie allowed")
}
else{
    console.log("only G moviesallowed")
}

// activity 4 

let temp=5;

if(temp>30){
    console.log("wear light cloth and sun screen")
}
else if(temp>=20&& temp<=30){
    console.log("wear casual clothes")
}
else if(temp>=10 && temp<=19){
    console.log("wear a jacket")
}
else{
    console.log("wear heavy winter wear")
}

// activity 5 

let username="admi";
let password = "password123";

if(username==="admin"&&password==="password123"){
    console.log("login sucsessful")
}
else if(username!=="admin"){
    console.log("incorrect username")
}
else if(password!=="password123"){
    console .log("incorrect password")
}

// activity 6 

let traffic="red"

if(traffic==="red"){
    console.log("STOP")
}
else if(traffic==="yellow"){
    console.log("SLOW DOWN")
}
else if(traffic==="green"){
    console.log("GO")
}
else{console.log("invalid traffic light")}


