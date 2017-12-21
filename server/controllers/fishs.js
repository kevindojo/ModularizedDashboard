var mongoose = require('mongoose');
var Fish = mongoose.model('Fish');


module.exports = {
    show: function(request, response){
        Fish.find({}, function(err,fishs){
            if(err){
                console.log("something went wrong SHOW/READ ERROR",err);
            } else {
                console.log('SUCCESS for SHOW/READ');
                response.render('index', { pass :fishs })
            }
        })
    },

    create: function(request, response){
        var fish = new Fish({ 
            name: request.body.name, 
            color: request.body.color, 
            size: request.body.size });
        fish.save(function(err){
            if(err){
                console.log('ERROR in CREATE', err);
            } else {
                console.log('SUCCESS in CREATE     22');
                response.redirect('/');
            }
        })
    },

    update: function(request,response){
        Fish.update({ _id:request.params.id }, { $set: {
            name: request.body.name,
            color: request.body.color,
            size: request.body.size}}, function(err,fishs){
            if(err) {
                console.log('ERROR in UPDATE',err);
            } else {
                console.log('SUCCESS in UPDATE     22');
                response.redirect('/');
            }
        })
    },

    delete: function(request, response){
        Fish.remove({ _id:request.params.id }, function(err,fishs){
            if(err){
                console.log('ERROR in DELETE',err);
            } else {
                console.log('SUCCESS in DELETE    22');
                response.redirect('/');
            }
        })
    },

    edit: function(request,response){
        Fish.findOne({_id:request.params.id}, function(err,fishs){
            if(err){
                console.log('ERROR in EDIT', err);
            } else {
                console.log('SUCCESS in LOADING EDIT     22')
                response.render('edit', { pass : fishs })
            }
        })
    }
} // end of exports