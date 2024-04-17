const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Course = new Schema({
    name: { type: String, require: true},
    description: { type: String},
    image: { type: String},
    slug: {type: String, slug: 'name' , unique: true },
    videoID: { type: String, require: true},
    level: {type: String}
}, {
    timestamps: true,
}
);

//add plugin soft delete 
mongoose.plugin(slug);
Course.plugin(mongoose_delete);

module.exports = mongoose.model('Course', Course);