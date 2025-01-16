import { Transaction } from "src/transaction/entities/transaction.entity";
import { User } from "src/user/entities/user.entity";
export declare class Category {
    id: number;
    title: string;
    user: User;
    transactions: Transaction[];
    createdAt: Date;
    updatedAt: Date;
}
