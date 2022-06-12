const imageElement = document.getElementById('image');



const RANDOM_USER_API="https://randomuser.me/api/";

function getRandomUser(){
return (fetch(RANDOM_USER_API))
.then((message)=>{
////   console.log(message);
return message.json();
})
.then((data)=>{
// console.log(data);
console.log(data);
return data.results[0];
 
})

}


async function renderRandomUser(){
let randomUser = await getRandomUser();
image.src = randomUser.picture.large;
//  console.log(image.src);
    console.log(randomUser);
}
console.log(renderRandomUser());


//image 2



const imageElement2 = document.getElementById('image2');



const RANDOM_USER_API2="https://randomuser.me/api/";

function getRandomUser2(){
return (fetch(RANDOM_USER_API2))
.then((message2)=>{
////   console.log(message);
return message2.json();
})
.then((data2)=>{
// console.log(data);
console.log(data2);
return data2.results[0];
 
})

}


async function renderRandomUser2(){
let randomUser2 = await getRandomUser2();
imageElement2.src = randomUser2.picture.large;
//  console.log(image.src);
    console.log(randomUser2);
}
console.log(renderRandomUser2());

//image 3


const imageElement3 = document.getElementById('image3');



const RANDOM_USER_API3="https://randomuser.me/api/";

function getRandomUser3(){
return (fetch(RANDOM_USER_API3))
.then((message3)=>{
////   console.log(message);
return message3.json();
})
.then((data3)=>{
// console.log(data);
console.log(data3);
return data3.results[0];
 
})

}


async function renderRandomUser3(){
let randomUser3 = await getRandomUser3();
imageElement3.src = randomUser3.picture.large;
//  console.log(image.src);
    console.log(randomUser3);
}
console.log(renderRandomUser3());

//image 4


const imageElement4 = document.getElementById('image4');



const RANDOM_USER_API4="https://randomuser.me/api/";

function getRandomUser4(){
return (fetch(RANDOM_USER_API4))
.then((message4)=>{
////   console.log(message);
return message4.json();
})
.then((data4)=>{
// console.log(data);
console.log(data4);
return data4.results[0];
 
})

}


async function renderRandomUser4(){
let randomUser4 = await getRandomUser4();
imageElement4.src = randomUser4.picture.large;
//  console.log(image.src);
    console.log(randomUser4);
}
console.log(renderRandomUser4());


/* <img id="menu-button"src="menu.png" onclick="abc()"> */
