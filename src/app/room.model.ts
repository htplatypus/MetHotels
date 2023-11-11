export class Room {
    number: string;
    price: number;
    minibar : boolean;
    spa : boolean;

    constructor(number: string, price: number, minibar : boolean, spa : boolean) {
        this.number = number;
        this.price = price;
        this.minibar = minibar;
        this.spa = spa;
    }
}
