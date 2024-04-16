const newsRouter = require('./news');
const siteRouter = require('./site');
const clubRouter = require('./club');
const meRouter = require('./me');


function route(app) {
    app.use('/news', newsRouter);
    app.use('/me', meRouter);
    app.use('/club', clubRouter);
    app.use('/', siteRouter);
}

module.exports = route;
