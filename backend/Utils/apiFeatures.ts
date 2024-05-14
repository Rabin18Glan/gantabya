import { Query } from 'mongoose';

interface QueryString {
    sort?: string;
    page?: number;
    limit?: number;
    fields?: string;
    [key: string]: any;
}

class ApiFeatures<T> {
    query: Query<T[], T>;
    queryStr: QueryString;

    constructor(query: Query<T[], T>, queryStr: QueryString) {
        this.query = query;
        this.queryStr = queryStr;
    }

    filter() {
        const excludeFields = ['sort', 'page', 'limit', 'fields'];
        const queryObj = { ...this.queryStr };
        
        excludeFields.forEach((el) => {
            delete queryObj[el];
        });
        
        let queryString = JSON.stringify(queryObj);
        const parsedQuery = JSON.parse(queryString.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`));

        this.query = this.query.find(parsedQuery);

        return this;
    }

    sort() {
        if (this.queryStr.sort) {
            const sortBy = this.queryStr.sort.split(',').join(' ');
            this.query = this.query.sort(sortBy);
        } else {
            this.query = this.query.sort('-createdAt');
        }
        
        return this;
    }

    limitFields() {
        if (this.queryStr.fields) {
            const fields = this.queryStr.fields.split(',').join(' ');
            this.query = this.query.select(fields);
        }
        
        return this;
    }

}

export default ApiFeatures;
