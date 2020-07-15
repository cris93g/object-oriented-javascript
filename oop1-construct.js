//1. Create a Class called WhyClass.  This class should have one property, and two methods.  THe property is called "purpose", and stores a string.  This string should clearly explain why classes are used in Object Oriented Programming.  The first method is called explain().  This method should print the contents stored in the purpose 'field' of the class.  The second method is called pieces().  This 2nd method should print out the various parts that are essential to building a class.  Instantiate the class, and invoke the method so the results are showing in the console once this file is run.

//your code here...

class WhyClass {
	constructor() {
		this._purpose = `Classes are important cause they gives a way to package our code and functionality all into this small obj templates that we can keep reusing.`;
	}
	explain() {
		console.log(`${this._purpose}`);
	}
	pieces() {
		console.log(
			`The pieces for a class are the Class it self, constructor with any items that will be shared within that class,functionality of that specific item your making the class for, and lastly to call that class make a new instance of it with the word new`
		);
	}
}

const myClass = new WhyClass();
myClass.explain();
myClass.pieces();

/*2. You are exploring the rainforests of the Amazon.  You have observed many different types of wildlife on your excursion.  To jog your memory, some different types of wildlife that you observed are found in the following URL : https://www.ietravel.com/blog/amazon-rainforest-animals-beginners-guide-21-species.  Feel free to use other resources online if you wish.

Create a class that can categorize at least 6 of the creatures that you recall observing the Amazon.  Each creature should have 3 unique characteristics, and 2 unique actions that it can do. */

//your code here...

class AnimalCreator {
	constructor(type, isMammal, habitat, sound, nocturnal) {
		(this._type = type),
			(this._isMammal = isMammal),
			(this._habitat = habitat),
			(this.sound = sound),
			(this.nocturnal = nocturnal);
	}
	makeNoice() {
		console.log(`this animal goes ${this.sound}`);
	}
	wakeUp() {
		this.nocturnal ? console.log(`I like to wake up at night`) : console.log(`I like to wake up in the morning`);
	}
}

const blackCaiman = new AnimalCreator(
	'alligator',
	false,
	'slow-moving rivers, streams and lakes, and ventures into flooded savannah and wetlands',
	'hiss',
	true
);
const amazonRiverDolphin = new AnimalCreator('toothed whale', true, 'Amazon and Orinoco river basins', 'click', false);

const jaguar = new AnimalCreator(
	'Panthera',
	true,
	'arid scrubland, thick tropical forests, swamps, coastal mangroves, lowland river valleys, grasslands, and mixed-conifer forests',
	'Rawr',
	true
);

const squirrelMonkey = new AnimalCreator(
	'primates',
	true,
	'primary and secondary forest, gallery forest and forest edge',
	'chatter',
	false
);
const greenAnaconda = new AnimalCreator(
	'boa',
	true,
	'swamps, marshes, and slow-moving streams, mainly in the tropical rain forests',
	'hiss',
	true
);
const spectacledOwl = new AnimalCreator('owl', true, 'near to water', 'hoot', true);

/*3. Convert the following Object Literals into a general class called Shape, and instantiate the class to generate the object literals
*/

class Shape {
	constructor(name, sides, length, width, radius) {
		this.name = name;
		this.sides = sides;
		this.base;
		this.height;
		this.length = length;
		this.width = width;
		this.radius = radius;
	}
	calcArea() {
		if (this.name === 'triangle') {
			return triangleArea(this.name, this.sides[0], this.sides[2]);
		}
		if (this.name === 'rectangle') {
			return rectangleArea(this.name, this.length, this.width);
		}
		if (this.name === 'circle') {
			return circleArea(this.name, this.radius);
		}
	}
	calcPerimeter() {
		if (this.name === 'triangle') {
			return trianglePerimeter(this.name, this.sides[0], this.sides[1], this.sides[2]);
		}
		if (this.name === 'rectangle') {
			return rectanglePerimeter(this.name, this.length, this.width);
		}
		if (this.name === 'circle') {
			return circlePerimeter(this.name, this.radius);
		}
	}
}
////////////////////HELPER FUNCTIONS//////////////////////////////////////////////////////////
//Ive always like to have helper functions if i want to use them somewhere else
function triangleArea(name, s1, s2) {
	let base = s1;
	let height = Math.sqrt(Math.pow(s2, 2) - Math.pow(base / 2, 2));
	console.log(`${name}'s area is calculated to be : ${0.5 * base * height}`);
}

function rectangleArea(name, s1, s2) {
	console.log(`${name}'s area is calculated to be : ${s1 * s2}`);
}

function circleArea(name, s1) {
	console.log(`${name}'s area is calculated to be : ${(Math.PI * s1 ** 2).toFixed(2)}`);
}

function trianglePerimeter(name, s1, s2, s3) {
	let base = s1;
	console.log(`${name}'s perimeter is calculated to be : ${base + (s2 + s3)}`);
}

function rectanglePerimeter(name, s1, s2) {
	console.log(`${name}'s perimeter is calculated to be : ${2 * s1 + 2 * s2}`);
}

function circlePerimeter(name, s1) {
	console.log(`${name}'s circumference is calculated to be : ${(2 * Math.PI * s1).toFixed(2)}`);
}

////////////////////creating my new classes
const newTriangle = new Shape('triangle', [ 4, 7, 7 ], null, null, null);
newTriangle.calcArea();
newTriangle.calcPerimeter();

const newRectangle = new Shape('rectangle', 4, 2, 5, null);
newRectangle.calcArea();
newRectangle.calcPerimeter();

const newCircle = new Shape('circle', 1, null, null, 5);
newCircle.calcArea();
newCircle.calcPerimeter();

/*********************************************** 
Bonus Exercises:

//4. Create three more instances of the Shape class for a pentagon, hexagon, and an octagon.  Add in  comments explaining the formulas for calculating the perimeter and the areas of these 3 shapes.  Also, as noted above, if you use the formula to calculate the height of the triangle instead of hard coding it, you will also obtain the bonus for this exercise.  The dimensions for the triangle are already provided for you in the triangle object literal.


//5. Below is a class Earth.  It is instantiated with a earth 'instance'.  Because there is only 1 known earth, we don't want multiple instances of earth.  Modify the class so the properties are usuable WITHOUT instantiating the class.

*/

class Earth {
	name;
	planetNum; //distance from the sun.  1-mercury, 2-venus, 3-earth, ...

	constructor(name, num) {
		this.name = name;
		this.planetNum = num;
	}
}

const earth = new Earth('earth', 3);
console.log(earth);
