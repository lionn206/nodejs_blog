module.exports = {
    mutipleMongooseToObject: function (mongooses){
        return mongooses.map(mongoose => mongoose.toObject()); //toObject: chuyển document ở mongoose thành thành đối tượng:
    },
    mongooseToObject: function (mongoose){
        return mongoose ? mongoose.toObject(): mongoose;
    }

};