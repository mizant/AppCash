import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { Transaction } from './entities/transaction.entity';
import { Repository } from 'typeorm';
export declare class TransactionService {
    private readonly transactionRepository;
    constructor(transactionRepository: Repository<Transaction>);
    create(createTransactionDto: CreateTransactionDto, id: number): Promise<{
        title: string;
        amount: number;
        type: "expense" | "income";
        category: {
            id: number;
        };
        user: {
            id: number;
        };
    } & Transaction>;
    findAll(id: number): Promise<Transaction[]>;
    findOne(id: number): Promise<Transaction>;
    update(id: number, updateTransactionDto: UpdateTransactionDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    findAllWithPagination(id: number, page: number, limit: number): Promise<Transaction[]>;
    findAllByType(id: number, type: string): Promise<number>;
}
