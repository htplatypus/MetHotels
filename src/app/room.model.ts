export class Room {
    id: string;
    price: number;
    minibar : boolean;
    spa : boolean;

    constructor(number: string, price: number, minibar : boolean, spa : boolean) {
        this.id = number;
        this.price = price;
        this.minibar = minibar;
        this.spa = spa;
    }
}
