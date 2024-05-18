export class Item{
    id!: number;
    product!: String;
    price!: number;
    quantity!: number;

    total(): number{
        return (this.price * this.quantity);
    }
}