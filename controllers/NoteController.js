var Note = require('models/Note');

NoteContoller = {
    index: function(req, res, next){
        res.render('index');
    },
    findAll: function(req, res, next){
        Note.find({}, function(err, data){
            if(err){
                res.json(err);
            }else{
                res.json(data);
            }
        })
    },
    findOne: function(req, res, next){
        Note.findOne({_id:req.params.id}, function(err, data){
            if(err){
                res.json(err);
            }else{
                res.json(data);
            }
        });
    },
    add: function(req, res, next){
        var Data = new Note({
            title: req.body.title
        });
        Data.save(function(err, data){
            if(err){
                res.json(err);
            }else{
                res.json({'Success' : data});
            }
        })
    },
    update: function(req, res, next){
        Note.findById(req.params.id, function(err, data){
            data.title = req.body.title;
            data.save(function(err, data){
                if(err){
                    res.json(err);
                }else{
                    res.json({'UPDATED' : data});
                }
            })
        })
    },
    delete: function(req, res, next){
        Note.findById(req.params.id, function(err, data){
            if(err){
                res.json(err);
            }else{
                data.remove(function(err, data){
                    if(err){
                        res.json(err);
                    }else{
                        res.json({'REMOVED': data});
                    }
                })
            }
        })
    }
}

module.exports = NoteContoller