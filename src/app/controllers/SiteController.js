const Course = require('../models/Course');
const {mutipleMongooseToObject} = require('../../util/mongoose')
class SiteController {

    async  index(req, res, next) {

         //promise
        Course.find({})
            .then(courses =>  {
                res.render('home',{
                    courses: mutipleMongooseToObject(courses)
                })
            })
            .catch(next);//next:error
    }
   

    
    search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteController();
