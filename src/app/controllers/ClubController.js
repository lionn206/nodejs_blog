const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");
class ClubController {
  //[GET] club/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) =>
        res.render("club/show", { course: mongooseToObject(course) })
      )
      .catch(next);
  }
  //[GET] club/create
  create(req, res, next) {
    res.render("club/create");
  }

  //[POST] club/store
  async store(req, res, next) {
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    const course = new Course(formData);
    await course
      .save()
      .then(() => res.redirect("/me/stored/club"))
      .catch(next);
  }

  //[Get] club/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) =>
        res.render("club/edit", { course: mongooseToObject(course) })
      )
      .catch(next);
  }
  //[PUT] club/:id
  async update(req, res, next) {
    await Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/stored/club"))
      .catch(next);
  }

  //[DELETE] club/:id
  async delete(req, res, next) {
    await Course.delete({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  //[DELETE] club/:id/force
  async forceDelete(req, res, next) {
    await Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  //[PATCH] club/:id/restore
  async restore(req, res, next) {
    await Course.restore({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
}
module.exports = new ClubController();
