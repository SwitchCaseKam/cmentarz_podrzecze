import { TouchSequence } from 'selenium-webdriver';

export class Person {
    id: number;
    name: string;
    surname: string;
    birthDate: string;
    deathDate: string;
    tombId: number;
    sex: string;

    constructor(person: any, {}) {
        this.id = person.id;
        this.name = person.name;
        this.surname = person.surname;
        this.birthDate = person.birthDate;
        this.deathDate = person.deathDate;
        this.tombId = person.tombId;
        this.sex = person.sex;
    }

}
