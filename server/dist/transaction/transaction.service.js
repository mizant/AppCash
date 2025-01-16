"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const transaction_entity_1 = require("./entities/transaction.entity");
const typeorm_2 = require("typeorm");
let TransactionService = class TransactionService {
    constructor(transactionRepository) {
        this.transactionRepository = transactionRepository;
    }
    async create(createTransactionDto, id) {
        const newTransaction = {
            title: createTransactionDto.title,
            amount: createTransactionDto.amount,
            type: createTransactionDto.type,
            category: { id: +createTransactionDto.category },
            user: { id },
        };
        if (!newTransaction)
            throw new common_1.BadRequestException("something went wrong...");
        return await this.transactionRepository.save(newTransaction);
    }
    async findAll(id) {
        const transactions = await this.transactionRepository.find({
            where: {
                user: { id },
            },
            relations: {
                category: true
            },
            order: {
                createdAt: "DESC",
            }
        });
        return transactions;
    }
    async findOne(id) {
        const transaction = await this.transactionRepository.findOne({
            where: {
                id
            },
            relations: {
                user: true,
                category: true,
            }
        });
        if (!transaction)
            throw new common_1.NotFoundException('transaction not found');
        return transaction;
    }
    async update(id, updateTransactionDto) {
        const transaction = await this.transactionRepository.findOne({
            where: {
                id
            }
        });
        if (!transaction)
            throw new common_1.NotFoundException('Transaction not found');
        return await this.transactionRepository.update(id, updateTransactionDto);
    }
    async remove(id) {
        const transaction = await this.transactionRepository.findOne({
            where: {
                id
            }
        });
        if (!transaction)
            throw new common_1.NotFoundException('Transaction not found');
        return await this.transactionRepository.delete(id);
    }
    async findAllWithPagination(id, page, limit) {
        const transactions = await this.transactionRepository.find({
            where: {
                user: { id }
            },
            relations: {
                category: true,
                user: true,
            },
            order: {
                createdAt: "DESC"
            },
            take: limit,
            skip: (page - 1) * limit,
        });
        return transactions;
    }
    async findAllByType(id, type) {
        const transactions = await this.transactionRepository.find({
            where: {
                user: { id },
                type,
            },
        });
        const total = transactions.reduce((acc, obj) => acc + obj.amount, 0);
        return total;
    }
};
exports.TransactionService = TransactionService;
exports.TransactionService = TransactionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(transaction_entity_1.Transaction)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TransactionService);
//# sourceMappingURL=transaction.service.js.map