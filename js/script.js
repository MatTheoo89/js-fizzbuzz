console.log('Sei dentro? ok🤙');


//Dati
const container = document.querySelector('.container');

const limit = 100;


//creare il ciclo
for(let i = 1; i <= limit; i++){

  //creo il box
  const box = document.createElement('div');

  // aggiungo la classe al box creato
  box.classList.add('box');
  
  // se è multiplo di 3 AND 5 allora gli scrivi fizzBuzz
  
  const fizz = i % 3;
  const buzz = i % 5;
  
  if(fizz === 0 && buzz === 0){
    console.log(i, 'FizzBuzz');

    //scrivo dentro al box
  box.innerText = 'fizzBuzz';
  
  // lo aggiungo al container
  container.append(box);
  
  // aggiungo la classe
  box.classList.add('fizzbuzz');
  }

  else if(fizz === 0){
    console.log(i, 'Fizz');

    //scrivo dentro al box
  box.innerText = 'fizz';

  // lo aggiungo al container
  container.append(box);

  // aggiungo la classe
    box.classList.add('fizz');
  }
  
  else if(buzz === 0){
    console.log(i, 'Buzz');

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
};