const GREETING_AM = 'Good morning';
const GREETING_PM = 'Good afternoon';
const FESTIVE_GREETING = 'Merry Christmas'

function getDate() {
    return new Date()
}

function getGreetingByHour(hour) {
    return (hour <= 12) ? GREETING_AM : GREETING_PM;
}

function isChristmas() {
    const now = getDate();
    return (now.getMonth() === '12' && now.getDate() === '25');
}

function greet(name) {
    const now = getDate().getHours()
    let greeting = getGreetingByHour(now);
    if (isChristmas()) {
        greeting = FESTIVE_GREETING;
    }
    return `${greeting}, ${name}`;
}

const name = process.argv[2] || 'John';

const greeting = greet(name);

console.log(greeting)