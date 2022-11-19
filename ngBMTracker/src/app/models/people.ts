export class People {
  id: number;
  sex: string;
  dateOfBirth: string;
  allergies: string;
  medHistory: string;

  constructor(  id: number = 0,
    sex: string = "",
    dateOfBirth: string = "",
    allergies: string = "",
    medHistory: string = "",

  ){
    this.id = id;
    this.sex = sex;
    this.dateOfBirth = dateOfBirth;
    this.allergies = allergies;
    this.medHistory = medHistory;


  }

}
