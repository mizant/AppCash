import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    create(createCategoryDto: CreateCategoryDto, req: any): Promise<{
        title: string;
        user: {
            id: number;
        };
    } & import("./entities/category.entity").Category>;
    findAll(req: any): Promise<import("./entities/category.entity").Category[]>;
    findOne(id: string): Promise<import("./entities/category.entity").Category>;
    update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<string | import("typeorm").DeleteResult>;
}
