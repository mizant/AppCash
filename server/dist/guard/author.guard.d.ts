import { CanActivate, ExecutionContext } from "@nestjs/common";
import { CategoryService } from "src/category/category.service";
import { TransactionService } from "src/transaction/transaction.service";
export declare class AuthorGuard implements CanActivate {
    private readonly transactionService;
    private readonly categoryService;
    constructor(transactionService: TransactionService, categoryService: CategoryService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
