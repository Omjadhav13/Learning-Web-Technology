class Person{
    //data member
    pname="om";
    pcontact=12345;
    paddress="Mumbai";

    //contsructor
    constructor(name,contact,address){
        this.pname=name;
        this.pcontact=contact;
        this.paddress=address
    }
    //member function
    personDetails(){
        return `Name:${this.pname} Contact: ${this.pcontact} Address: ${this.paddress}`;
    }
}

//how to create object of a class
let personObj=new Person();
console.log(personObj.pname);
console.log(personObj.pcontact);
console.log(personObj.paddress);
console.log(personObj.personDetails());
//contsructor calling
let personObj1=new Person("amaan",54321,"Pune");
console.log(personObj1.personDetails());