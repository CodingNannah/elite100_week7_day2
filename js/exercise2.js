//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the person's age by 1 each time the method is called.

Create two people using the 'new' keyword, and print 
both of their infos and increment one person's
age by 3 years. 

Use an arrow function for both methods (opt)
*/

// Create our Person Prototype
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;

        // addAge method that takes a single parameter, adding to the age 
        this.addAge = function(age){
            return this.age +=1;
        }    

        // printInfo method
        this.printInfo = function(name, age){
            console.log(`${this.name} is ${this.age} years old.`)
         }

    }
}


let barnie = new Person('Barnie', 26)
console.table(barnie.printInfo())


let bambam = new Person('BamBam', 2)
console.table(bambam.printInfo())
bambam.addAge()
bambam.addAge()
bambam.addAge()
console.table(bambam.printInfo())

// Try these if time:
// Use an arrow to create the printInfo method


// Use an arrow addAge method that takes a single parameter, adding to the age 


