import { People } from "./people";

export class BM {
  id: number;
  person: People;
  color: string | undefined;
  consistency: string | undefined;
  date: string | undefined;

  constructor(id:number = 0,
    person: People = new People(),
    color?: string,
    consistency?: string,
    date?: string,){
      this.id = id;
      this.person = person;
      this.color = color;
      this.consistency = consistency;
      this.date = date;

    }
}
