export class Products {
    constructor(public no:number, public name:string, public serialNum:number, public Madein: string, public fDate: string, public price:number)
    {}
    printData() {
        return this.no +"      "+ this.name +"      "+ this.serialNum +"      "+ this.Madein +"      "+ this.fDate +"      "+ this.price;
    }
}
