export class BM {
  id: number;
  color: string | undefined;
  consistency: string | undefined;
  date: string | undefined;

  constructor(id:number = 0,
    color?: string,
    consistency?: string,
    date?: string,){
      this.id = id;
      this.color = color;
      this.consistency = consistency;
      this.date = date;
    }
}
