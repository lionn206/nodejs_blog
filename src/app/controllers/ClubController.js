const Course = require('../models/Course');
const {mongooseToObject} = require('../../util/mongoose');
class ClubController {
   //[GET] club/:slug
    show(req, res, next) {
        Course.findOne({slug: req.params.slug})
            .then(course => 
                res.render('club/show', {course: mongooseToObject(course)})
            )
            .catch(next); 
    }
   //[GET] club/create
    create(req, res, next) {
        res.render("club/create")
    }

      //[POST] club/store
    async store(req, res, next) {
        // res.json(req.body)
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(formData);
        await course.save();
        res.send('SAVED !!')
    }

    edit(req, res, next) {
        res.render("club/edit")
    }
}
module.exports = new ClubController();
