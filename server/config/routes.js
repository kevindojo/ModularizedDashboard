var fishs = require('../controllers/fishs.js');

module.exports = function(app){
    app.get('/', function(request,response){
        fishs.show(request,response);
    })

    app.get('/fishs/new',function(request, response){
        response.render('add');
    })

    app.get('/fishs/edit/:id',function(request, response){
        fishs.edit(request,response);
    })

    app.post('/process', function(request, response){
        fishs.create(request,response);
    })

    app.post('/fishs/:id',function(request,response){
        fishs.update(request, response);
    })

    app.get('/fishs/destory/:id', function(request, response){
        fishs.delete(request, response);
    })


} // end of exports