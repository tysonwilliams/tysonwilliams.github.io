console.log("Hello World!");

var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];

var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 0
};

function addRanger(location, name, skillz, station) {
    // increment the number of rangers property
    location.numRangers++;

    // add the ranger<number> property and assign a ranger object
    location["ranger" + location.numRangers];
    location.name = name;
    location.skillz = skillz;
    location.station = station;
};

// call addRanger three times to add the new rangers
addRanger(lighthouseRock, "Nick Walsh", "magnification burn", 2);
addRanger(lighthouseRock, "Drew Barontini", "uppercut launch", 3);
addRanger(lighthouseRock, "Christine Wong", "bomb defusing", 1);

console.log("Lighthouse Rock's most powerful weapon is " + lighthouseRock.weaponBulbs[2][0] + " and has a power of " + lighthouseRock.weaponBulbs[2][1] + ".");

console.log("This is the Lighthouse Rock info:");
console.log(lighthouseRock);