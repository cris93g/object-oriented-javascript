/*
1. Create a Abstract Creature class that is NOT allowed to be instantiated. Find a way to prevent this class from being instantiated with an instance.  In the Creature class, include two abstract methods.  move(), and act().  These methods are NOT allowed to be invoked from the Abstract class, so throw an error in these methods if they are invoked by any inherited sub-classes.  

Create at least 3 sub-classes that inherit from the Abstract Creature Class.  Example sub-classes are: 
    -Human
    -Dinosaur
    -Bird
    -Reptile
    -Fish

These sub-classes MUST implement the abstract methods of move() and act(), which are found on the abstract Creature class. In addition to the 2 abstract methods, implement 1 unique method on each sub-class.  Also, each sub-class MUST have at least 2 unique property fields on them.  Example property fields are:
    -name
    -weight
    -food
    -age

*/

class Creature {
	constructor() {
		if (this.constructor == Creature) {
			throw new Error(`unable to do Abstract methos`);
		}
	}
	act() {
		throw new Error(`act method is Abstract cannot be run`);
	}
	move() {
		throw new Error('move method is Abstract cannot be run');
	}
}

class Human extends Creature {
	constructor(name, age, game) {
		super();
		this.name = name;
		this.age = age;
	}
	act() {
		console.log(`Hi my name is ${this.name}`);
	}
	move(game) {
		console.log(`Im currently playing ${this.game}`);
	}
	thought(age) {
		console.log(`Im currently ${this.age} years old, I should start planning my party soon for next year`);
	}
}

class Fish extends Creature {
	constructor(name, food) {
		this.name = name;
		this.food = algae;
	}
	act() {
		console.log(`Hi my name is ${this.name}`);
	}
	move() {
		console.log(`I love to swim around water`);
	}
	fact() {
		console.log(
			`A lot of people think that I have a terrible memory but reaseach shows I can stay trained months after being trained`
		);
	}
	eat() {
		console.log(`I love to eat things such as ${this.food}`);
	}
}

class Dinosaur extends Creature {
	constructor(name, food) {
		this.food = food;
	}
	act() {
		console.log(`I love to roam alot except when i see big meteors`);
	}
	move(food) {
		console.log(`I think I'm getting a little hungry I might have some ${this.food} later today`);
	}
	fact() {
		console.log(`The tallest dinosaur to be found was 18.5 meters long`);
	}
	hello() {
		console.log(`Hey my name is ${this.name} the Dinosaur.`);
	}
}

/*
2. For the following Person class, modify the class methods, so the sub-class methods will successfully fire.  For the Teacher method, a set of methods have already been set up.  For the Student class, it will be up to you to determine how to set up the methods to fire in the Student sub-class.  :
*/

class Person {
	name;

	eat() {
		console.log(this.name + ' is eating');
	}

	sleep() {
		console.log(this.name + ' is sleeping');
	}

	code() {
		console.log(this.name + ' is coding');
	}

	repeat() {
		console.log(this.name + ' is repeating the above steps, yet another time');
	}

	explain() {
		//this function should contain a console.log() explaining what you had to do to get the correct functions to work, and the reasoning behind what you did.
		console.log(
			`Took of the = from most methods in Person since in javascript it has an order of operation and will check the field first before prototype`
		);
	}
}

class Teacher extends Person {
	//refactor the methods in this Teacher class, so all of these methods override the methods in the Person super class.
	constructor(name) {
		super(name);
		this.name = name;
	}
	eat = () => console.log(this.name + ' loves to teach before eating');
	sleep = () => console.log(this.name + ' sleeps after preparing the lesson plan');
	code = () => console.log(this.name + ' codes first, then teaches it the next day.');
	repeat = () => console.log(this.name + ' teaches, codes, eats, sleeps, and repeats');
}

class Student extends Person {
	constructor(name) {
		super(name);
		this.name = name;
	}
	eat = () => console.log(`${this.name} eats a bunch of healthy things.`);
	sleep = () => console.log(`${this.name} cant fall asleep anymore as all he wants to do is study.`);
	code = () => console.log(`${this.name} loves to code.`);
	repeat = () => console.log(`${this.name} keeps repeating coding lessons so he doesnt forget anything`);
}

const teacher = new Teacher('Dr. Teacher');

teacher.explain();

const student = new Student('Pupil Student');

student.explain();

teacher.eat();
teacher.sleep();
teacher.code();
teacher.repeat();

student.eat();
student.sleep();
student.code();
student.repeat();

//****************************************************************************************************************************************************************************************
//Bonus Exercise:

//3. Consider the following class:
class Cook {
	prepare = (food1, food2, food3) => {
		console.log('The cook is cooking ' + food1, food2, food3);
	};

	prepare() {
		console.log('The cook is cooking');
	}

	explain = () =>
		console.log(
			/*"what could you do to get the prepare function to print out the food items that are being passed in to the function?  Once you figure it out, Write down your thought process in this explain method."*/
			`I kinda did it here on top but pretty much i changed the methods prepared and added to the field to check that first and make the prepape into just a method in the prototype`
		);
}

const cook = new Cook();

cook.prepare('turkey', 'salami', 'pizza');

cook.explain();
