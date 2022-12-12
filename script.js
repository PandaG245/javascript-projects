
// let x = 10;

// let y = 5;

// let result = x * y;

// alert(result);



function calc(){
 let num1 = prompt('Enter first number');

 let num2 = prompt('Enter second number');

let result = Number(num1) + Number(num2);

document.getElementById('hw').innerHTML = `${num1} + ${num2} = ${result}`;

// alert(`${num1} + ${num2} = ${result}`);

}


function UWU () {

  let number1 = document.getElementById('_num1').value;

let number2 = document.getElementById('_num2').value;

let result = Number(number1) + Number(number2);

document.getElementById('hw3').innerHTML = `${number1} + ${number2} = ${result}`;

}


function _calculate (x,y){

let result = Number(x) + Number(y);
document.getElementById('hw3').innerHTML = `${x} + ${y} = ${result}`;
    
}




// function check() {
//   let numberOne = Number(document.getElementById('num1').value);
//   let numberTwo = Number(document.getElementById('num2').value);



//   if( numberOne > numberTwo  ) {
//     document.getElementById('_special').innerHTML = `${numberOne} Is Greater Than ${numberTwo} 🔼`;
//   }
// else if (numberOne < numberTwo ) {
//   document.getElementById('_special').innerHTML = `${numberOne} Is Less Than ${numberTwo} 🔽`;
// }

// else if (numberOne == numberTwo ){
//   document.getElementById('_special').innerHTML = `${numberOne} Is Equal To ${numberTwo} 👐`;
// }
// }

function check() {
  let numberOne = Number(document.getElementById('num1').value);
  let numberTwo = Number(document.getElementById('num2').value);



  if( numberOne > numberTwo  ) {
    document.getElementById('_special').innerHTML = `${numberOne} Is Greater Than ${numberTwo} 🔼`;
  }

else if (numberOne == numberTwo ){
  document.getElementById('_special').innerHTML = `${numberOne} Is Equal To ${numberTwo} 👐`;
}

else{ // numberone < numbertwo
 document.getElementById('_special').innerHTML = `${numberOne} Is Less Than ${numberTwo} 🔽`;
}
}

// let x = 100000000;

// let y = 5;

// let _a_r_r_a_y_ = ['text', 'lear', x, y];

// //מדפיס את כל המערך
// console.log(_a_r_r_a_y_);

// //מדפיס את האובייקט הראשון במערך
// console.log(_a_r_r_a_y_[0]);


// // להשיג את האובייקט האחרון במערך. בכך שאני ניגש למיקום על ידי שימוש בגודל המערך שהוא שווה כרגע ל4 ופחות אחד
// console.log(_a_r_r_a_y_[_a_r_r_a_y_.length - 1]);
// console.log(_a_r_r_a_y_[7]);

// //_a_r_r_a_y_.length = 8;

// //1
// let array1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

// console.log(array1[array1.length - 5]);
// //2
// let array2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

// console.log(`${array2.length} ${array2[array2.length - 1]}` )

// //1
// let array = ['text', 'lear', 'text', 'four','dfgdf', 'lear', 'dfgdfgdrdrg','last'];

// console.log(`The Fourth element is ${array[3]}`)

// //2
// console.log(`Array Length Is: ${array.length} The Last Element Is ${array[array.length -1]}`);



let _movies = [
  {
      title:'The Dark Knight',
      rating: 9.0,
      year: 2008,
      imageUrl: 'https://images.moviesanywhere.com/bd47f9b7d090170d79b3085804075d41/c6140695-a35f-46e2-adb7-45ed829fc0c0.jpg',
      linkUrl: 'https://www.imdb.com/title/tt0468569/',
      rateUrl: 'https://www.imdb.com/title/tt0468569/ratings'
  },
  {
      title:'The Dark Knight Rises',
      rating: 8.4,
      year: 2012,
      imageUrl: 'https://images.moviesanywhere.com/137de7df53b44414af057f89c0647b0b/38dd4c91-6758-46bd-969b-6acf010a249b.jpg',
      linkUrl: 'https://www.imdb.com/title/tt1345836/',
      rateUrl: 'https://www.imdb.com/title/tt1345836/ratings'
  },
  {
      title:'Superman Man of Steel',
      rating: 7.1,
      year: 2013,
      imageUrl: 'https://flxt.tmsimg.com/assets/p9259673_p_v8_ag.jpg',
      linkUrl: 'https://www.imdb.com/title/tt0770828/',
      rateUrl:'https://www.imdb.com/title/tt0770828/ratings'
  },
  {
    title:'Oceans Eleven',
    rating: 7.7,
    year: 2001,
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BYzVmYzVkMmUtOGRhMi00MTNmLThlMmUtZTljYjlkMjNkMjJkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg',
    linkUrl: 'https://www.imdb.com/title/tt0240772/?ref_=tt_mv_close',
    rateUrl: 'https://www.imdb.com/title/tt0240772/ratings/?ref_=tt_ov_rt'
},
{
  title:'dunkirk',
  rating: 7.8,
  year: 2017,
  imageUrl: 'https://m.media-amazon.com/images/M/MV5BN2YyZjQ0NTEtNzU5MS00NGZkLTg0MTEtYzJmMWY3MWRhZjM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg',
  linkUrl: 'https://www.imdb.com/title/tt5013056/?ref_=nv_sr_srsg_0',
  rateUrl: 'https://www.imdb.com/title/tt5013056/ratings/?ref_=tt_ov_rt'
},
{
  title:'Inglourious Basterds',
  rating: 8.3,
  year: 2009,
  imageUrl: 'https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_FMjpg_UX1000_.jpg',
  linkUrl: 'https://www.imdb.com/title/tt0361748/',
  rateUrl: 'https://www.imdb.com/title/tt0361748/ratings/?ref_=tt_ov_rt'
},
];


console.log(_movies);

function displayImages()
{
    for (let i = 0; i < _movies.length; i++)
    {
      document.getElementById('movies').innerHTML += `
      <div class="col">
          <div class="card shadow-sm">
          <img class="card-img" src="${_movies[i].imageUrl}" alt="${_movies[i].title}">
            <div class="card-body">
              <h6 class="card-text">Movie Name: </h6>${_movies[i].title}
              <h6 class="card-text">Rating: </h6>${_movies[i].rating}
              <h6 class="card-text">Year: </h6>${_movies[i].year}
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <a class="btn btn-sm btn-secondary" href="${_movies[i].linkUrl}" target="_blank">View Movie</a>
                <a class="btn btn-sm btn-outline-secondary" href="${_movies[i].rateUrl}" target="_blank">Rate</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    }
}

window.onload = function() {
    displayImages();
  };

function sendEmail() {
  let firstName = document.querySelector('[name="firstName"]').value;
  let lastName = document.querySelector('[name="lastName"]').value;
  let email = document.querySelector('[name="email"]').value;
  let message = document.querySelector('[name="messageContent"]').value;
  let date = new Date();

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "guymoreno245@gmail.com",
    Password: "F7E24F59653450AD7098BAE290D5171B847A",
    From: "guymoreno245@gmail.com",
    To: "guymoreno245@gmail.com",
    Subject: `${firstName} ${lastName} שלח/ה לך הודעה מהאתר`,
    Body: `
  <b>הודעה מאת:</b> ${firstName} ${lastName}
  <br>
  <br>
  <b>כתובת איימיל של השולח:</b> ${email}
  <br>
  <br>
  <b>נשלח בתאריך:</b> ${date}
  <br>
  <br>
  <b>תוכן ההודעה:</b>
  <br>
  ${message}`
  });

  document.querySelector('#sent-success').style = 'display:block';

}

function myFunction(x, y) {

  let result = x * y;
  return alert(`the result is = ${result}`);
}

function changeColor(isChanged) {

if(isChanged == true) {
document.getElementById('btn_change_color').style = "background-color: green";
}

else if (isChanged == false){
return document.getElementById('btn_change_color').style = "background-color: red";
}
}

function checkLight(light){

if (light == true) {
  document.getElementById('light-on').style = "display: block"
  document.getElementById('light-off').style = "display: none"
}

  else if (light == false){
    document.getElementById('light-off').style = "display: block"
  document.getElementById('light-on').style = "display: none"
  }

}

// let question = prompt('Enter A Number From 1 - 9');

// switch (question) {
//     case '0':
//         alert('your number is 0');
//         break;

//     case '1':
//         alert('your number is 1');
//         break;

//     case '2':
//         alert('your number is 2');
//         break;

//     case '3':
//         alert('your number is 3');
//         break;

//     case '4':
//         alert('your number is 4');
//         break;


//     case '5':
//         alert('your number is 5');
//         break;


//     case '6':
//         alert('your number is 6');
//         break;

//     case '7':
//         alert('your number is 7');
//         break;

//     case '8':
//         alert('your number is 8');
//         break;

//     case '9':
//         alert('your number is 9');
//         break;

//     case '555':
//         alert('👁️');
//         break;

//     default:
//         alert('Type A Number Please...');
//         break;

// }


function game() {
    let question2 = prompt("Seller: Would you like to buy pizza? Yes / No");

    switch (question2) {
        case "Yes": case "yes":
            alert("Buyer: Yes, I want to buy a pizza!");
            alert("Seller: The pizza is now in the oven, please wait 5 seconds...");
            setTimeout(() => {
                alert("Seller: There you go, Enjoy your pizza!");
                alert("Buyer: Thank you sir, I'll come back again !!");
            }, 5000);
            break;

        case "No": case "no":
            alert("Buyer: Nahhh I Dont WANT!!");
            alert("Seller: OK SIR HAVE A GOOD DAY!");
            break;

        default:
            alert("Seller: What Are You Saying?");
            game();
            break;
    }
}

// שיעור 18

//Math.round(number) - פונקציה שמעגלת למספר השלם הקרוב ביותר
console.log(Math.round(6.3245645)); // => 6
console.log(Math.round(6.8245645)); // => 7
//Math.ceil() - מעגל כלפי מעלה
//Math.floor() - מעגל כלפי מטה

// Math.PI
console.log(Math.PI); // PI => value

// random numbers Math.random()
//step 1
let random1 = Math.random(); // 0.0 || 1.0
console.log(random1);

//step 2
let random2 = Math.random() * 1000; // 0.0 || 1000.0
console.log(random2);

//step 3
let random3 = Math.round(Math.random() * 1000); // 0 || 1000 - מחזיר מספר רנדומלי שלם
console.log(random3);

// rps game
function rps(choice) {

  let details = ['scissors.png', 'paper.png', 'rock.png']; // details[2] => rock.png
  let random = Math.floor(Math.random() * details.length); // 0 // 2 // 2 // 1

  document.getElementById('you').src = details[choice];
  document.getElementById('computer').src = details[random];

  if (choice == random) {
      document.getElementById('result').innerHTML = '<div class="alert alert-warning">תיקו</div> ';
  }

  if (choice == 0 && random == 1) {
      document.getElementById('result').innerHTML = '<div class="alert alert-success">! ניצחת</div> ';
  }

  if (choice == 0 && random == 2) {
      document.getElementById('result').innerHTML = '<div class="alert alert-danger">הפסדת</div> ';
  }

  if (choice == 1 && random == 0) {
      document.getElementById('result').innerHTML = '<div class="alert alert-danger">הפסדת</div> ';
  }

  if (choice == 1 && random == 2) {
      document.getElementById('result').innerHTML = '<div class="alert alert-success">! ניצחת</div> ';
  }

  if (choice == 2 && random == 0) {
      document.getElementById('result').innerHTML = '<div class="alert alert-success">! ניצחת</div> ';

  }
  if (choice == 2 && random == 1) {
      document.getElementById('result').innerHTML = '<div class="alert alert-danger">הפסדת</div> ';
  }
}




function add (val){
document.getElementById('screen').value += val;
}

function clr(){
  document.getElementById('screen').value = '';
}

function solve(){
  let x = document.getElementById('screen').value;
   
  let answer = Function("return " + x)();

  document.getElementById('screen').value = answer
}

function googleSearch(){
    
  let search = document.getElementById('search').value; 
  
  window.location.href = `https://www.google.com/search?q=${search}`;
}