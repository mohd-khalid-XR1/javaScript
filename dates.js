const d = new Date()
console.log(d);
console.log(d.toDateString());
console.log(d.toLocaleDateString());
console.log(d.toLocaleTimeString());
console.log(d.getFullYear());
console.log(d.getMinutes());

const futureDate = new Date("2045-08-06")
console.log(futureDate.toLocaleDateString());
console.log(futureDate.getFullYear());

console.log('----------------------------------------------');

console.log(Date.now());

const pastDate = new Date("2010-08-06")
console.log(pastDate.getTime());
console.log(+pastDate);

console.log("--------------------------------------------------");


const today = new Date()
const expire = new Date("2025-08-09")

console.log(+today > +expire);
