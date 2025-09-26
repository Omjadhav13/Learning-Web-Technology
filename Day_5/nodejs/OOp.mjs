export class Person{
    //data member
    pname="om";
    pcontact=12345;
    paddress="Mumbai";

  
    //member function
    personDetails(){
        return `Name:${this.pname} Contact: ${this.pcontact} Address: ${this.paddress}`;
    }
}
