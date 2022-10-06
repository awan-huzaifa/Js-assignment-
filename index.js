//Q2
console.log("\nanswer 2");
let name1 = "Huzaifa Awan";
console.log(`Hello ${name1}, would you like to learn some Python today?`);

//Q3
console.log("\nanswer 3");
let name2 = "Urooj sanjrani";
console.log(name2.toLowerCase());
console.log(name2.toUpperCase());
var titleCase = name2.toLowerCase().split(" ");
      for(var i = 0; i< titleCase.length; i++){
         titleCase[i] = titleCase[i][0].toUpperCase() + titleCase[i].slice(1);
      }
   console.log(titleCase.join(" "));

//Q4
console.log("\nanswer 4");
console.log(`Taylor Swift once said, "Please dont ever become a stranger whose laugh i could recognize anywhere"`)

//Q5
console.log("\nanswer 5");
let famous_person = "Taylor Swift";
let message = "Please dont ever become a stranger whose laugh i could recognize anywhere";
console.log(`${famous_person} once said, "${message}"`);

//Q6
console.log("\nanswer 6");
let name3 = "\tHuzaifa\tMuhammad\tAwan";
console.log(name3);
let newName3 = name3.replace(/\t/g,'');
console.log(newName3);


//Q7
console.log("\nanswer 7");
console.log("multiplying 4 by 2");
console.log(4*2);
console.log("dividing 16 by 2");
console.log(16/2);
console.log("adding 4 + 4");
console.log(4+4);
console.log("subtracting 4 from 12");
console.log(12-4);

//Q8
console.log("\nanswer 8");
for(var i=0;i<4;i++){
    console.log('\n');
    console.log(5+3);
    console.log('\n');
}

//Q9
console.log("\nanswer 9");
let favNumber = 7;
let message2 = `Favorite number is ${favNumber}`;
console.log(message2);

//Q10
console.log("\nanswer 10 is comments");

//Q11
console.log("\nanswer 11");
const friends = ["Jazim", "Anas", "Urooj", "Alina", "Mustafa" ];
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends[3]);
console.log(friends[4]);

//Q12
console.log("\nanswer 12");
for(var i=0;i<friends.length;i++){
    console.log(`Hello ${friends[i]}, How are you? Have a nice day`);
}

//Q13
console.log("\nanswer 13");
const transport = ["car", "bike", "plane", "yacht"];
console.log(`i would like to own a mercedez ${transport[0]}`);
console.log(`i would like to ride a bentley ${transport[1]}`);
console.log(`most exciting transport mode for me is ${transport[2]}`);
console.log(`my dream is to own a ${transport[3]} one day` );

//Q14
console.log("\nanswer 14");
const guests = ["Urooj","Michelle","Anas", "Peter", "Alina", "Hareem" ];
for(var i=0;i<guests.length;i++){
    console.log(`Hello ${guests[i]}, I would like to invite you to a dinner party tomorrow`);
}

//Q15
console.log("\nanswer 15");
console.log("Hareem wont be able to make it to the dinner");
guests.splice(4,1,"Kendal");
console.log(guests);
for(var i=0;i<guests.length;i++){
    console.log(`Hello ${guests[i]}, I would like to invite you to a dinner party tomorrow`);
}

//Q16
console.log("\nanswer 16");
console.log("bigger dinner table found hence more people are being invited");
guests.unshift("Jazim");
console.log(guests);
temp = guests[2];
guests[2]="Harry";
guests[6]=temp;
console.log(guests);
guests.push("Jane");
console.log(guests);
for(var i=0;i<guests.length;i++){
    console.log(`Hello ${guests[i]}, I would like to invite you to a dinner party tomorrow`)
}

//Q17
console.log("\nanswer 17");
console.log("only two people can be invited to the dinner");
let remove = "";
while(guests.length>2){
    remove= guests.pop();
    console.log(`i am sorry ${remove}, cant invite you to the dinner`);
}  

for(var i=0;i<guests.length;i++){
    console.log(`${guests[i]}, youre still invited to the dinner party`);
}

while(guests.length!=0){
    guests.pop();
}
console.log("list now emptied");
console.log(guests);

//Q18
console.log("\nanswer 18");

const places = ["Iceland","Vancouver","Switzerland,","Norway","NewZealand"];
console.log(places);
const newPlaces = places.sort();

console.log(`alphabetical order ${newPlaces}`);
console.log(`original array ${places}`);
const reversePlaces = places.reverse();
console.log(`reversed array ${reversePlaces}`);
console.log(`original array ${places}`);
console.log(`reversed list back to its original order ${reversePlaces.reverse()}`);

//Q19
console.log("\nanswer 19");
console.log(`guests being invited to the dinner : ${guests.length}`);

//Q20
console.log("\nanswer 20");
const randomList = ["K2","Himalyas","Chenab","Ravi","Pakistan","Norway","Melbourne","Paris","Urdu","Persian"];
console.log(randomList);

//Q21
console.log("\nanswer 21");
let data = {
    firstName: "Huzaifa",
    lastName: "Awan",
    age: 21,
    education: "bachelors",
    alive: true
};
console.log(data);

//Q22
console.log("\nanswer 22");
console.log(randomList[10]);
console.log("no value present at index 11 of array hence undefined");

//Q23
console.log("\nanswer 23");
let value = true;
let a = 2;
console.log("is a equals to 2 | predict true")
console.log(a==2)

let a2 = "2";
console.log("is a equals 2 and is it a string | predict true")
console.log(a2==="2")

let arr = [1,2,3]
console.log(arr)
console.log("array length is < 4 | predict true");
if(arr.length<4){
    console.log(true)
}

let car = "bmw"
console.log("is car == 'bmw | predict true")
console.log(car=="bmw")

let arr2 = [1,2]
console.log(arr2)
console.log("is value at 1st index = 2 | predict true");
console.log(arr2[1]==2)

let arr3 = [1,2,3];
console.log(arr3)
console.log("is array length > 3 | predict false")
console.log(arr3.length>3)

let a3 = 3;
console.log(a3)
console.log("is value stored (3) a string | predict false")
console.log(a3==="3")

let a4 = [1,2,3,4]
console.log(a4)
console.log("is array size <4 | predict false");
console.log(a4.length<4)

let a5 = true
console.log("is a5 a string | predict false")
console.log(typeof a5 == String)

//Q24
console.log("\nanwer 24");
let str1 = "hello"
let str2 = "hello2"
console.log(str1);
console.log(str2);
console.log("are both string equal | predict false")
console.log(str1==str2);

let str3 = "hello"
let str4 = "world"
console.log(str3);
console.log(str4);
console.log("are both string length = 5 | predict true");
console.log(str3.length==5 && str4.length==5)

let str5 = "yes";
console.log(str4)
console.log(str5)
console.log("is one of the string lenght < 4 | predict true")
console.log(str4.length < 4 || str5.length<4)

let arr4 = [1,2,3,4,5,6]
console.log(arr4)
console.log("is 2 present in array | predict true");
console.log(arr4[1]==2)

console.log("is 7 present in array | predict false");
let value2 = false; 
for(var i=0;i<arr4.length;i++){
    if(arr4[i]==7){
        value2 = true
    }
    
}
console.log(value2);

//Q25
console.log("\nanswer 25");
let alien_color = "green"
if(alien_color==="green"){
    console.log("you earned 5 points")
}
if(alien_color!="green"){

}

//Q26
console.log("\nanswer 26")
let color = "red"
if(color=="green"){
console.log("you earned 5 points")
}
else{
    console.log("you earned 10 points")
}

//Q27
console.log("\nanswer27")
let color2 = "yellow"
if(color2 =="yellow"){
    console.log("10 points")
}
else if(color =="green"){
    console.log("5 points")
}
else{
    console.log("15 points")
}

//Q28
console.log("\nanswer 28")
let age =21;
if(age<2){
    console.log("baby")
}
else if(age>=2 && age <4){
    console.log("toddler")
}
else if(age>=4 && age <13){
    console.log("kid")
}
else if(age >=13 && age <20){
    console.log("teenager")
}
else if(age >=20 && age <65){
    console.log("adult")
}
else if(age >65){
    console.log("elder")
}
else {
    console.log("wrong input");
}

//Q29
console.log("\nanswer 29")
let favFruits = ["mango","banana","apple"];
if(favFruits[0]=="mango"){
    console.log("you really like mangoes")
}
if(favFruits[1]=="banana"){
console.log("you really like bananas")
}
if(favFruits[2]=="apple"){
    console.log("you really like apples")
}

//Q30
console.log("\nanswer 30")
let arr6 = ["admin","jane","peter","michelle","steve"];
if(arr6.length==0){
    console.log("We need to find some users!")
}

for(var i=0;i<arr6.length;i++){
    if(arr6[i]=="admin"){
        console.log(`Hello admin, would you like to see a status report?`)
    }
    else{
        console.log(`Hello ${arr6[i]} thank you for logging in again.`)
    }
}

//Q31
console.log("\nanswer 31")
while(arr6.length!=0){
    arr6.pop()
}
console.log(arr6);
console.log("list is empty, we need to find some users!");

//Q32
console.log("\nanswer 32")
const current_users= ["peter","jane","michelle","james","robert"]
const new_Users= ["thomas","charles","daniel","mathew","joseph"]
for(var i=0;i<5;i++){
    if(new_Users[i]=="peter" || new_Users[i]=="jane" ||new_Users[i]=="michelle" ||new_Users[i]=="james" ||new_Users[i]=="robert"){
        console.log("enter new username")
    }
    else {
        console.log("username is availible")
    }
}

//Q33
console.log("\nanswer 33");
const num = [1,2,3,4,5,6,7,8,9];
for(var i=0;i<num.length;i++){
    if(num[i]==1){
        console.log("1st")
    }
    else if(num[i]==2){
        console.log("2nd")
    }
    else if(num[i]==3){
        console.log("3rd")
    }
    else{console.log(`${num[i]}th`)}
}

//Q34
console.log("\nanswer 34")
const pizza = ["cheese","bbq","chicken tikka"]
for(var i=0;i<3;i++){
    console.log(pizza[i])
}
for(var i=0;i<3;i++){
    console.log(`I like ${pizza[i]} flavor`)
}
console.log("fav flavor is cheese\ni like garlic sauce the most\ni really love pizza!\ndies ")

//Q35
console.log("\nanswer 35")
const animals = ["lion","tiger","cheetah"]
for(var i=0;i<3;i++){
    console.log(animals[i])
}
for(var i=0;i<3;i++){
    console.log(`${animals[i]} is a great hunter`)
}

//Q36
console.log("\nanswer 36")
const make_shirt =(size,text)=>{
console.log(`size is ${size}`)
console.log(`Message is : ${text}`)
}
make_shirt("small",`"Just do it"`)

//Q37
console.log("\nanswer 37")
const large_shirt=()=>{
    console.log(`sizs is large`)
    console.log("message : i love javascript");
}
large_shirt();

const medium_shirt=()=>{
    console.log(`sizs is medium`)
    console.log("message : i love javascript");
}
medium_shirt();

//Q38
console.log("\nanswer 38")
const describe_city=(cityName,country)=>{
console.log(`${cityName} is in ${country}`)
}
describe_city("Karachi","Pakistan");
describe_city("Vancouver","Canada");
describe_city("Auckland","NewZealand")

//Q39
console.log("\nanswer 39");
const city_country = (city,country)=>{
return (`"${city}, ${country}"`)
}
console.log(city_country("Lahore","Pakistan"));
console.log(city_country("Oslo","Norway"));
console.log(city_country("Calgary","Canada"));

//Q40
console.log("\nanswer 40")
const make_album=(artist1,title1,track1,artist2,title2,track2,artist3,title3,track3)=>{
    let album ={
      artistName : artist1,
      titleName : title1,
      tracks : track1 
    }
    let album2 ={
        artistName : artist2,
        titleName : title2,
        tracks : track2
    }
    let album3 ={
        artistName : artist3,
        titleName : title3,
        tracks : track3 
      }
    

    console.log(album)
    console.log(album2)
    console.log(album3)

    
}
(make_album("harry","sign of time",3,"edSheeran","perfect",4,"taylor","august"));

//Q41
console.log("\nanswer 41")
const magician = ["Harry","Penn","Shin"];
let copy = magician;
const show_magician=(magician)=>{
    for(var i=0;i<magician.length;i++){
        console.log(magician[i])
    }
}
show_magician(magician);

//Q42

console.log("\nanswer 42");
const make_great=(magician)=>{
for(var i=0;i<magician.length;i++){
    magician[i]=`Great ${magician[i]}`
}
}
make_great(magician);
show_magician(magician)


//Q43
console.log("\nanswer 43")

show_magician(copy);
show_magician(magician);

//Q44
const sandwich=(arr7)=>{
    console.log("items being added : ")
    for(var i=0;i<arr7.length;i++){
        console.log(`${arr7[i]} \n`)
    }

}
sandwich(["turkey","tuna"]);
sandwich(["turkey","tuna","eggs"]);
sandwich(["turkey","chicken","sauces","eggs"]);

//Q45
console.log("\nanswer 45")
const cars = (manufacturer,model,...args)=>{
let obj = {
    carManufacturer : manufacturer,
    carModel : model,
    color: args[0],
    feature: args[1]
}
return obj
}
console.log(cars("Toyota","Fortuner","white","4x4"));
