const Course = require('../models/Course');
const {mutipleMongooseToObject} = require('../../util/mongoose')
class MeController {
    //[GET] /me/stored/club
    async storedClub(req, res, next) {
        await Course.find({})
        .then(courses => {
            res.render('me/stored-club', {courses: mutipleMongooseToObject(courses)})
        })
        .catch(next)
       
    }
}
module.exports = new MeController();
