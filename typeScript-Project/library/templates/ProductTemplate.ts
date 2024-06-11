import { ProductContract } from "../contracts/ProductContract";

export abstract class ProductTemplate implements ProductContract{
    public Name:string = "";
    public Price: number = 0;
    public Qty: number = 0;
    public abstract Total(): number;
    public abstract Print(): void;
}