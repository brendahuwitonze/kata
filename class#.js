class Person {
    constructor( firstName ='John', lastName = 'Doe', age=0, gender='Male')
    {
       this.firstName =firstName
      this.lastName = lastName
      this.age=age
      this.gender=gender
    }
    sayFullName(){
        return`${this.firstName} ${this.lastName}`
    }
   static greetExtraTerrestrials(raceName){
       return `Welcome to Planet Earth ${raceName}`
   }
    
  }

  let person1 = new Person();
  let person2 = new Person('Jane','Brendah',21,'Female')
  console.log(person2.sayFullName())
  