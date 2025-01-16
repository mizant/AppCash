import { Category } from "src/category/entities/category.entity";
import { User } from "src/user/entities/user.entity";
export declare class Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    user: User;
    category: Category;
    createdAt: Date;
    updatedAt: Date;
}
