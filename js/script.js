console.log('Sei dentro? ok🤙');

//Scrivi un programma che stampi in console i numeri da 1 a 100

//multipli di 3 stampi “Fizz” al posto del numero

//per i multipli di 5 stampi “Buzz”

//Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”

console.log('Sei dentro 🤙');

//Dati
const container = document.querySelector('.container');
const limit = 100;
const fizz = 3;
const buzz = 5;
const fizzBuzz = fizz * buzz;

//creare il ciclo
for(let i = 1; i <= limit; i++){

  //creo il box
  const box = document.createElement('div');

  // aggiungo la classe al box creato
  box.classList.add('box');
  
  // se è multiplo di 3 AND 5 allora gli scrivi fizzBuzz
if(i % fizzBuzz === 0){
  console.log('fizzBuzz', i)

  //scrivo dentro al box
  box.innerText = 'fizzBuzz';
  
  // lo aggiungo al container
  container.append(box);
  
  // aggiungo la classe
  box.classList.add('fizzbuzz');
}

// se è multiplo di 3 allora gli scrivi fizz
else if(i % fizz === 0){

  console.log('fizz', i);

  //scrivo dentro al box
  box.innerText = 'fizz';

  // lo aggiungo al container
  container.append(box);

  // aggiungo la classe
    box.classList.add('fizz');
}

// se è multiplo di 5 allora gli scrivi buzz
else if(i % buzz === 0){
  console.log('buzz', i);

  //scrivo dentro al box
  box.innerText = 'Buzz';
  
  // lo aggiungo al container
  container.append(box);
  
  // aggiungo la classe
  box.classList.add('buzz');
  }

  else{
  console.log(i);

  //scrivo dentro al box
  box.innerText = i;

  // lo aggiungo al container
  container.append(box);
  }
  
}