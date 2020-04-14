const express=require('express');
const router  = express.Router()

router.get('/',(req,res) => {
    res.send('paths Page');
}).catch(next);



// add a new post to the db
router.post('/posts', function(req, res, next){
    Post.create(req.body).then(function(post){
        res.send(post);
    }).catch(next);
});

// update a post in the db
router.put('/posts/:id', function(req, res, next){
    Post.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Post.findOne({_id: req.params.id}).then(function(post){
            res.send(post);
        });
    }).catch(next);
});

// delete a post from the db
router.delete('/posts/:id', function(req, res, next){
    Post.findByIdAndRemove({_id: req.params.id}).then(function(post){
        res.send(post);
    }).catch(next);
});

module.exports = router