import { Category } from "src/category/entities/category.entity";
import { Transaction } from "src/transaction/entities/transaction.entity";
export declare class User {
    id: number;
    email: string;
    password: string;
    categories: Category[];
    transactions: Transaction[];
    createdAt: Date;
    updatedAt: Date;
}
