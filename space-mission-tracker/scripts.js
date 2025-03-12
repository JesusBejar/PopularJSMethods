// mission info
const missions = [
  {
    id: 1,
    astronaut: 'John Carter',
    fuel: 10,
    encounters: 200,
    destination: 'Mars',
    distress: false,
    training: true,
  },
  {
    id: 2,
    astronaut: 'Agent K',
    fuel: 25,
    encounters: 500,
    destination: 'Moon',
    distress: true,
    training: true,
  },
  {
    id: 3,
    astronaut: 'Rocky Balboa',
    fuel: 50,
    encounters: 15,
    destination: 'Philedephia',
    distress: true,
    training: true,
  },
  {
    id: 4,
    astronaut: 'Max Tennyson',
    fuel: 80,
    encounters: 1000,
    destination: 'Null Void',
    distress: true,
    training: true,
  },
];

//   map: Transform astronaut names into “Commander [Name]” for display
const commanders = missions.map((m) => {
  return ` Commander ${m.astronaut} `;
});
// console.log(commanders);
document.querySelector("#commanders").innerHTML = commanders


const commandersTwo = missions.map(function (m) {
  return `Commander ${m.astronaut}`;
});
console.log(commandersTwo);

//   reduce: Calculate total fuel spent across missions
const total = missions.reduce((sum, m) => {
  return sum + m.fuel;
}, 0);
// console.log(`Total fuel: ${total}`);
document.querySelector("#total-fuel").innerHTML = total


const totalTwo = missions.reduce(function (sum, m) {
  return sum + m.fuel;
}, 0);
console.log(`Total fuel: ${totalTwo}`);

//   filter: Show only astronauts with > 50 alien encounters
const alienArray = missions.filter((m) => {
  return m.encounters > 50;
});
// console.log(alienArray);
const alienArrayHtml = alienArray.map(m => `<li> ${m.astronaut} - ${m.encounters} </li>`).join(" ")
document.querySelector("#alien-encounters").innerHTML = `<ul> ${alienArrayHtml} </ul>`

const alienArrayTwo = missions.filter(function (m) {
  return m.encounters > 50;
});
console.log(alienArrayTwo);

//   find: Locate the first mission with a distress signal
const distressUrgent = missions.find((m) => {
  return m.distress == true;
});
// console.log(distressUrgent);
const distressUrgentHtml = distressUrgent ? `${distressUrgent.astronaut}: ${distressUrgent.encounters} aliens`: 'None found for now'
document.querySelector("#distress-signal").innerHTML = distressUrgentHtml

const distressUrgentTwo = missions.find(function (m) {
  return m.distress == true;
});
console.log(distressUrgentTwo);

//   forEach: Add a glowing CSS effect to each active mission div
const activeMs = missions.forEach((m) => {
  if (m.distress) {
    console.log(`Mission active: ${m.astronaut} - ${m.destination}`);
  }
});
// console.log(activeMs);
let activeMsHtml = "";
missions.forEach(m => {
  activeMsHtml += `<li> Mission Active: ${m.astronaut} - ${m.destination}</li>`;
});
document.querySelector("#alien-encounters").innerHTML = `<ul>${activeMsHtml}</ul>`;

const activeMsTwo = missions.forEach(function (m) {
  if (m.distress) {
    console.log(`Mission active: ${m.astronaut} - ${m.destination}`);
  }
});
console.log(activeMsTwo);
//   some: Check if any mission has low fuel (< 10 units)
const lowFuel = missions.some((m) => {
  return m.fuel < 10;
});
// console.log(`Low mission fuel: ${lowFuel}`);
document.querySelector("#low-fuel").innerHTML = `Low mission fuel: ${lowFuel}`

const lowFuelTwo = missions.some(function (m) {
  return m.fuel < 10;
});
console.log(`Low mission fuel: ${lowFuelTwo}`);

//   includes: Verify if “Mars” is in the mission destinations
const mars = missions.some((m) => Object.values(m).includes('Mars'));
// console.log(mars);
document.querySelector("#mars").innerHTML = mars

const marsTwo = missions.some(function (m) {
  return Object.values(m).includes('Mars');
});
console.log(marsTwo);

//   every: Ensure all astronauts have completed training
const trainingComplete = missions.every((m) => {
  return m.training == true;
});
// console.log(`Training complete: ${trainingComplete}`);
document.querySelector("#mars").innerHTML = `Training complete: ${trainingComplete}`

const trainingCompleteTwo = missions.every(function (m) {
  return m.training == true;
});
console.log(`Training complete: ${trainingCompleteTwo}`);
