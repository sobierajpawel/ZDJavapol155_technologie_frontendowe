export class Student {
    id : number;
    //Imię i nazwisko jako pole name
    name : string;
    email : string;

    constructor(id : number, name : string, email: string){
        this.id = id;
        this.name = name;
        this.email = email;
    }
}
