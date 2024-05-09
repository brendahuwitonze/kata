class Animal {
    constructor(name, age, legs, species, status) {
      this.name = name;
      this.age = age;
      this.legs = legs;
      this.species = species;
      this.status = status;
    }
    introduce() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  }
  
class Shark extends Animal {
    constructor(name,age,status) {
       super(name,age,status);
       this.legs=0
       this.species='shark'
       this.status=status
      
     }
   }
   
   class Cat extends Animal {
     constructor(name,age,status){
   super(name,age,status)
       this.legs=4
       this.species='cat'
       this.status=status
       
   }
      introduce() {
       return `${super.introduce()}  Meow meow!`;
     }
   }
   
   class Dog extends Animal {
    constructor(name,age,status,master='puppy'){
         super(name,age,status)
         this.legs=4
         this.species='dog'
         this.master=master
         this.status=status
      
     }
    greetMaster(){
     return "Hello "+ this.master
   }
   
   }