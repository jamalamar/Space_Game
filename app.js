
//Millenium Falcon (my Ship)
let falcon = {
	hull: 20,
	firepower: 5,
	accuracy: 0.7
};

//Alien Stats
let hull = [3, 4, 5, 6];
let firepower = [2, 3, 4];
let accuracy = [0.6, 0.7, 0.8];


//Alien constructor
class Alien {
	constructor (hull, firepower, accuracy) {
		this.hull = hull
		this.firepower = firepower
		this.accuracy = accuracy
	}
	attack () {
		return
	}
};


// All six Aliens each with random stats
//Added a random function for each new alien in order to create a new number each time
let one = new Alien(hull[Math.floor(Math.random() * 4)], firepower[Math.floor(Math.random() * 3)], accuracy[Math.floor(Math.random() * 3)]);
let two = new Alien(hull[Math.floor(Math.random() * 4)], firepower[Math.floor(Math.random() * 3)], accuracy[Math.floor(Math.random() * 3)]);
let three = new Alien(hull[Math.floor(Math.random() * 4)], firepower[Math.floor(Math.random() * 3)], accuracy[Math.floor(Math.random() * 3)]);
let four = new Alien(hull[Math.floor(Math.random() * 4)], firepower[Math.floor(Math.random() * 3)], accuracy[Math.floor(Math.random() * 3)]);
let five = new Alien(hull[Math.floor(Math.random() * 4)], firepower[Math.floor(Math.random() * 3)], accuracy[Math.floor(Math.random() * 3)]);
let six = new Alien(hull[Math.floor(Math.random() * 4)], firepower[Math.floor(Math.random() * 3)], accuracy[Math.floor(Math.random() * 3)]);



//Battle Alien One

while(falcon.hull>0 && one.hull>0) {
	if (Math.random()<=falcon.accuracy) {
		one.hull -= falcon.firepower
	}
	if (one.hull>0 && Math.random()<=one.accuracy) {
		falcon.hull -= one.firepower
	}
};
console.log("Enemy ship:",one);
console.log ("Millenium Falcon:",falcon)

let oneP = prompt("keep fighting?","ok");
	if(oneP==="ok") {
	console.log("***********************************Next Fight!*********************************************")
}
	else {alert("Thanks For Playing!")};





//Battle Alien Two

while(falcon.hull>0 && two.hull>0) {
	if (Math.random()<=falcon.accuracy) {
		two.hull -= falcon.firepower
	}
	if (two.hull>0 && Math.random()<=two.accuracy) {
		falcon.hull -= two.firepower
	}
};
console.log("Enemy ship:",two);
console.log ("Millenium Falcon:",falcon);

let twoP = prompt("keep fighting?","ok");
	if(twoP==="ok") {
	console.log("***********************************Next Fight!*********************************************")
}
	else {alert("Thanks For Playing!")};






//Battle Alien Three

while(falcon.hull>0 && three.hull>0) {
	if (Math.random()<=falcon.accuracy) {
		three.hull -= falcon.firepower
	}
	if (one.hull>0 && Math.random()<=three.accuracy) {
		falcon.hull -= three.firepower
	}
};
console.log("Enemy Ship:",three);
console.log ("Millenium Falcon",falcon)

let threeP = prompt("keep fighting?","ok");
	if(threeP==="ok") {
	console.log("***********************************Next Fight!*********************************************")
}
	else {alert("Thanks For Playing!")};






//Battle Alien Four

while(falcon.hull>0 && four.hull>0) {
	if (Math.random()<=falcon.accuracy) {
		four.hull -= falcon.firepower
	}
	if (one.hull>0 && Math.random()<=four.accuracy) {
		falcon.hull -= four.firepower
	}
};
console.log("Enemy Ship:",four);
console.log ("Millenium Falcon:",falcon)

let fourP = prompt("keep fighting?","ok");
	if(fourP==="ok") {
	console.log("***********************************Next Fight!*********************************************")
}
	else {alert("Thanks For Playing!")};






//Battle Alien Five

while(falcon.hull>0 && five.hull>0) {
	if (Math.random()<=falcon.accuracy) {
		five.hull -= falcon.firepower
	}
	if (one.hull>0 && Math.random()<=five.accuracy) {
		falcon.hull -= five.firepower
	}
};
console.log("Enemy Ship:",five);
console.log ("Millenium Falcon:",falcon)

let fiveP = prompt("keep fighting?","ok");
	if(fiveP==="ok") {
	console.log("***********************************Next Fight!*********************************************")
}
	else {alert("Thanks For Playing!")};






//Battle Alien Six

while(falcon.hull>0 && six.hull>0) {
	if (Math.random()<=falcon.accuracy) {
		six.hull -= falcon.firepower
	}
	if (one.hull>0 && Math.random()<=six.accuracy) {
		falcon.hull -= six.firepower
	}
};
console.log("Enemy Ship:",six);
console.log ("Millenium Falcon:",falcon)

if(falcon.hull>0) {
	alert("Congratulations!, You Won!")
}
else {
	alert("You Died.")
}








