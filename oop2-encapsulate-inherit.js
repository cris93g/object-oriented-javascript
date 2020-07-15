/* 
1. Create the following classes:
    - Book class. It should have an author and publisher property.
    - Author class. It should have a name and books property.
    - Publisher class.  It should have an authors and books property.
    - Review class.  It should have a rating and user property.
    -Prevent the properties from being accessed by outside code, using the encapsulation concept of "private variables".  Create methods that return the values of these private variables in case other pieces of the code need to access the data of the 4 classes.  Also create methods that allow outside code to "set" new values for the properties on the classes, without directly manipulating the values themselves. 

    //your code here...


    //used the new # to create private variables

       class Book {
        #author;
        #publisher;
        constructor(author, publisher) {
            this.#author = author;
            this.#publisher = publisher;
        }
        getAuthor() {
            return this.#author;
        }
        setAuthor(author) {
            this.#author = author;
        }
        getPublisher() {
            return this.#publisher;
        }
        
        setPublisher(publisher) {
            this.#publisher = publisher;
        }
    }
    
    
    
    class Author {
        #name;
        #books;
        constructor(name, books) {
            this.#name = name;
            this.#books = books;
        }
        getName() {
            return this.#name;
        }
         setName(name) {
            this.#name = name;
        }
        getBooks() {
            return this.#books;
        }
        setBooks(books) {
            this.#books = books;
        }
    }
    
    class Publisher {
        #authors;
        #books;
        constructor(authors, books) {
            this.#authors = authors;
            this.#books = books;
        }
        getAuthors() {
            return this.#authors;
        }
         setAuthors(authors) {
            this.#authors = authors;
        }
        getBooks() {
            return this.#books;
        }
        setBooks(books) {
            this.#books = books;
        }
    }
    
    class Review {
        #rating;
        #user;
        constructor(rating, user) {
            this.#rating = rating;
            this.#user = user;
        }
        getRating() {
            return this.#rating;
        }
        setRating(rating) {
            this.#rating = rating;
        }
        getUser() {
            return this.#user;
        }
        setUser(user) {
            this.#user = user;
        }
    }

////////////////////////////////////////////////I wanted to show i know whats going on under the hood of a Class pre "new" keyword //////////////////
//function that creates obj inside lives my function object
function Book (author,publisher){
  const newBook=Object.create(bookFunctions)
  newBook.author=author;
  newBook.publisher=publisher;
  return newBook;
}

bookFunctions={
  getAuthor:function(){
    console.log(`My author's name is ${this.author}`)
  },
  getPublisher:function(){
    console.log(`My publisher's name is ${this.publisher}`)
  }
}

const myBook = Book('Cristian','cool.inc')
console.log(myBook)

//creates my sub class
function subBook (subName,subAuthor,title){
  const newSubBook = Book(subName,subAuthor);
  //this is the important part it takes the link __proto__ that it currently has and attaches it to subBookFUnctions
  Object.setPrototypeOf(newSubBook,subBookFunctions)
  newSubBook.title=title;
  return newSubBook
}

const subBookFunctions={
  getTitle:function(){
    console.log(`my author is ${this.title}`)
  }
}
//in here we mutate the __proto__ from subBookFunctions so we can inherit the properties of bookFunctions 
Object.setPrototypeOf(subBookFunctions,bookFunctions)
const mySubBook = subBook('notcristian','notcool.inc','lordofthecristians')
mySubBook.getPublisher()
console.log(mySubBook)







2. Create the following classes:
    - Umbrella class.  It should have a an organization name.  It should only have a single instance.  Umbrella is the "Parent Organization" e.g. Allegis Group
    - Company class. It should have a compnay name and # of employees.  Create at least 3 different companies that are children of the Umbrella Organization.  (e.g. TEKsystems, Aerotek, etc.)
    - Site class. It should have the name of the company, and the location of the site.  It is a child class that inherits from the Company class.  Create 3 sites for each company.
    - Employee class. It should have a employee name, job title, and salary properties. Create 10 employee instances: 1 CEO, 1 Manager, 1 Secretary, 2 Engineers, 1 Financial Officer, 1 Janitor, 1 Marketer, 1 HR Personnel, 1 Lawyer.  Feel free to add other employee roles at your own discretion.
    
    - For each class, add 2 properties and 2 methods to each.  The properties and methods should make sense, considering what the classes are supposed to be representing.



    //your code here...

class Umbrella{
  constructor(mainCompName,mainCompFounded){
    this.mainCompName=mainCompName;
    this.mainCompFounded=mainCompFounded;
  }
  getMainCompName(){
    console.log(`My Company name is ${this.mainCompName}`);
  }
  getMainCompFound(){
    console.log(`I was founded on ${this.mainCompFounded}`)
  }
}

const cristianInc= new Umbrella('CristianInc',1993);

console.log(cristianInc)

class Company extends Umbrella{
  constructor(mainCompName,subCompName,numEmployees){
    super(mainCompName)
    this.subCompName=subCompName;
    this.numEmployees=numEmployees;
  }
  getNumberOfEmployees(){
    console.log(`I currently have ${this.numEmployees} in ${this.subCompName}`)
  }
  getThanksMainComp(){
    console.log(`We love our main Company ${this.mainCompName}`)
  }
}

const tinyChris = new Company('CristianInc','tinyChris',1000);
const bigChris =new Company('CristianInc','bigChris',250);
const notChris = new Company('CristianInc','notChris',812);
console.log(notChris)

class Site extends Company{
  slogan;
  constructor(mainCompName,subCompName,siteName,employeeCount,hours){
    super(mainCompName,subCompName)
    this.siteName=siteName;
    this.employeeCount=employeeCount;
    this.hours='9-5';
  }
  setSlogan(slo){
    this.slogan=slo;
    console.log(`Our new slogan is ${this.slogan}`)
  }
  getHours(){
    console.log(`Our current hours are ${this.hours}`)
  }
  getThanksToSubComp(){
    console.log(`We love our company ${this.subCompName}`)
  }
}

const sanF= new Site('CristianInc','tinyChris','SANFRANCISCO')
console.log(sanF)
sanF.getHours()
sanF.getThanksToSubComp()
console.log(sanF.setSlogan('Go Warriors'))
const dallasT= new Site('bigChris','Dallas')
const houston= new Site('notChris','houston')


class Employee extends Site{
  constructor(mainCompName,subCompName,siteName,employeeName,jobTitle,salary){
    super(mainCompName,subCompName,siteName);
    this.employeeName=employeeName;
    this.jobTitle=jobTitle;
    this.salary=salary;
  }
  getIntroduction(){
    console.log(`Hi my name is ${this.employeeName} and I am the ${this.jobTitle} at the ${this.siteName} branch of the company ${this.subCompName}`)
  }
  getMyHours(){
    console.log(`Welp im currently on my ${this.hours} job call me after 5pm`)
  }
}

const adam = new Employee('CristianInc','bigChris','dallasT','Adam','CEO',150,000)
console.log(adam)
adam.getIntroduction()
adam.getMyHours()
const scot = new Employee('CristianInc','bigChris','dallasT','Scot','Manage',80,000)
const edna = new Employee('CristianInc','bigChris','dallasT','Edna','Secretary',30,000)
const christian = new Employee('CristianInc','bigChris','dallasT','Christian','engineer',80,000)
const tyler = new Employee('CristianInc','bigChris','dallasT','Tyler','engineer',80,000)
const sam = new Employee('CristianInc','bigChris','dallasT','Sam','Financial officer',70,000)
const raulph = new Employee('CristianInc','bigChris','dallasT','Raulph','janitor',30,000)
const steve = new Employee('CristianInc','bigChris','dallasT','Steve','Marketer',100,000)
const dan = new Employee('CristianInc','bigChris','dallasT','Dan','HR',90,000)
const tom = new Employee('CristianInc','bigChris','dallasT','Lawyer','CEO',120,000)


/****************************************************************************************************************************************************************************************   
Bonus Exercise:

3. Building on Exercise 1, Do the following : 
- Create a Bookstore class.  It should contain a collection of various Book Instances.
- Each Book Instance should contain the Instances of the relavant Authors, Publishers, and Reviews.
- Each Publisher should contain Instances of the Authors that are affiliated with the relavant Publisher.  

Each Book instance should contain instances of the Authors, the Publishers, and the Reviews pertinent to each book.  This exercise is using the advanced encapsulation concept of "composition", reflecting a "HAS A" relationship.
*/

//your code here...
