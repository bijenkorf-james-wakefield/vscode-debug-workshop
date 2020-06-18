const GREETING_AM = 'Good morning';
const GREETING_PM = 'Good afternoon';
const FESTIVE_GREETING = 'Merry Christmas'

function getDate() {
    return new Date()
}

function getGreetingByHour(hour) {
    return (hour <= 12) ? GREETING_AM : GREETING_PM;
}

function isChristmas(dateNow) {
    return (dateNow.getMonth() === '12' && dateNow.getDate() === '25');
}

function greet(name) {
    const now = getDate();
    const currentHour = now.getHours()
    let greeting = getGreetingByHour(currentHour);
    if (isChristmas(now)) {
        greeting = FESTIVE_GREETING;
    }
    return `${greeting}, ${name}`;
}

const inputName = process.argv[2] || 'John';

const greeting = greet(inputName);

console.log(greeting)