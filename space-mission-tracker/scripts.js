// mission info
const missions = [
    { id: 1, astronaut: "John Carter", fuel: 10, encounters: 200, destination: "Mars", distress: false },
    { id: 2, astronaut: "Agent K", fuel: 25, encounters: 500, destination: "Moon", distress: true },
    {id: 3, astronaut: "Rocky Balboa", fuel: 50, encounters: 15, destination: "Philedephia", distress: true}, 
    {id: 4, astronaut: "Max Tennyson", fuel: 80, encounters: 1000, destination: "Null Void", distress: true}
  ];
  
//   map: Transform astronaut names into “Commander [Name]” for display
const commanders = missions.map(m => { return `Commander ${m.astronaut}`})
console.log(commanders)

const commandersTwo = missions.map(function (m) {
    return `Commander ${m.astronaut}`
})
console.log(commandersTwo)

//   reduce: Calculate total fuel spent across missions


//   filter: Show only astronauts with >50 alien encounters


//   find: Locate the first mission with a distress signal


//   forEach: Add a glowing CSS effect to each active mission div


//   some: Check if any mission has low fuel (<10 units)


//   includes: Verify if “Mars” is in the mission destinations


//   every: Ensure all astronauts have completed training