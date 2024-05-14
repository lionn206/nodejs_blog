const Course = require("../models/Course");
const { mutipleMongooseToObject } = require("../../util/mongoose");
class MeController {
  //[GET] /me/stored/club
  async storedClub(req, res, next) {
    Promise.all([Course.find({}),Course.countDocumentsWithDeleted({deleted: true})])
      .then(([courses,deletedCount])=>{
        res.render("me/stored-club", {
          deletedCount,
          courses: mutipleMongooseToObject(courses),
        })
      })
      .catch(next);




  }

  //[GET] /me/trash/club
  async trashClub(req, res, next) {
    await Course.findWithDeleted({ deleted: true })
      .then((courses) => {
        res.render("me/trash-club", {
          courses: mutipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }
}
module.exports = new MeController();
