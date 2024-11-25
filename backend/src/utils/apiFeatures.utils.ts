// class ApiFeatures{
//     constructor(query,queryStr)
//     {
//         this.query = query;
//         this.queryStr = queryStr;
//     }

//     filter(){
//         const excludeFields=['sort','page','limit','fields'];

//         const queryObj0={...this.queryStr};
//         excludeFields.forEach((el)=>{
//             delete queryObj0[el]
//         });
//         // const movies = await Movie.find().where('duration').equals(req.query.duration).where('ratings').equals(req.query.ratings)
//         // const movies = await Movie.find({})
    
        
//         let queryString = JSON.stringify(queryObj0);
//         const queryObj=JSON.parse(queryString.replace(/\b(gte|gt|lte|lt)\b/g,(match)=>`$${match}`))
//         // console.log(queryObj)
    
//     console.log(queryObj)
//     this.query = this.query.find(queryObj);

//     return this
    
//     }

//     sort(){
//         if(this.queryStr.sort)
//         {
//             const sortBy = this.queryStr.sort.split(',').join(' ')//spliting the content having , and joining by space
//     this.query = this.query.sort(sortBy)//because we send req using comma but for sorting we need space separated
    
//         }
//         else{
//            this.query= this.query.sort('-createdAt')
//         }
//         return this
    
//     }

//     limitFields(){
//         if(this.queryStr.fields){
//             const fields= this.queryStr.fields.split(',').join(' ');
//            this.query =  this.query.select(fields);//applying limiting function
//         }
//         else{
//             // query = query.select('-ratings')//excluding 
//         }
//         return this
//     }

//     paginate(){
//         const page = this.queryStr.page*1||1;
// const limit= this.queryStr.limit*1||10;
// const skip = (page-1)*limit;
// this.query = this.query.skip(skip).limit(limit)
// // if(this.queryStr.page){
// //     const moviesCount =await Movie.countDocuments();
// //     if(skip>=moviesCount)
// //     {
// //         throw new Error("This page is not found");
// //     }
// // }
// return this

//     }
// }


// module.exports = ApiFeatures;