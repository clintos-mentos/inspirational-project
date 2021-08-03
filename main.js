
// arrays for people
const people = ['Nelson Mandela','Martin Luther king Jr', 'Desmond Tutu'];
console.log(people.length)

// arrays for Random Facts
const nelsonRandomFacts =['born in 1913',
'died in 2013',
'first Democratically elected President of South Africa'];

const martinLutherRandomFacts = ['famously said: I have a dream',
'the youngest person ar the time to receive a Nobel Peace Prize',
'civil rights leader who was arrested 29 times'];

const desmondTutuRandomFacts = ['trained to be a teacher',
'first black General Secretary of The South African Council of Churches',
'heavily opposed the apartheid education system'];

//quotes by person
const nelsonQuotes = ['Everyone can rise above their circumstances and achieve success if they are dedicated to and passionate about what they do',
'It always seems impossible, until it is done',
'Lead from the back – and let others believe they are in front'];

const martinQuotes = ['Injustice anywhere is a threat to justice everywhere',
'The time is always right to do what is right',
'Faith is taking the first step even when you don\'t see the whole staircase'];

const desmondQuotes = ['Without forgiveness, there\'s no future',
'A person is a person because he recognizes others as persons',
'My humanity is bound up in yours, for we can only be human together'];


// random selection function
const randomNumber = Math.floor(Math.random() * 3);
const randomNum = Math.floor(Math.random() * 3);

// nelson function
const nelsonFunc = () => {
    let details = 'Nelson Mandela';
    let random = nelsonRandomFacts[randomNumber];
    let quote = nelsonQuotes[randomNum];
    
    console.log(`${details}: ${random}, had a famous quote saying: ${quote}`)

}

const martinFunc = () => {
    let details = 'Martin Luther king Jr';
    let random = martinLutherRandomFacts[randomNumber];
    let quote = martinQuotes[randomNum];
    
    console.log(`${details}: ${random}, had a famous quote saying: ${quote}`)

}

const desmondFunc = () => {
    let details = 'Desmond Tutu';
    let random = desmondTutuRandomFacts[randomNumber];
    let quote = desmondQuotes[randomNum];
    
    console.log(`${details}: ${random}, had a famous quote saying: ${quote}`)

}
// create a function that takes in these arrays

const inspirationalPeople = () => {
    randomPerson = Math.floor(Math.random() * people.length);
    
    let person = people[randomPerson];

    if (person === 'Nelson Mandela') {
        return nelsonFunc();
    } else if ( person === 'Martin Luther king Jr') {
        return martinFunc();
    } else if (person ==='Desmond Tutu') {
        return desmondFunc();
    }
    else {
         console.log('Something not working!');
    }
}

// caling function
inspirationalPeople();

// test area 
//where the fuck is my code on github???
