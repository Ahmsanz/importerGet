import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PaginationInterface } from '../interfaces/pagination.interface';
import { QueryParamsInterface } from '../interfaces/queryParams.interface';
import { Row, RowDocument } from '../schemas/data.schema';
@Injectable()
export class DataService {
    constructor(
        @InjectModel('row') private readonly rowModel: Model<RowDocument>,
    ) {}

    public async getData(queryParams: QueryParamsInterface, pagination?: PaginationInterface) {
        const data: Row[] = await this.rowModel
        .find(queryParams)
        .skip(pagination.skip)
        .limit(pagination.limit)
        .exec()
        
        return data;
    }
}
