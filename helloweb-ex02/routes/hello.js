const express = require("express");
const router = express.Router();
router.route("/01").get(function(req,resp){
    resp.render("hello/01");
});

router.route("/02").get(function(req,resp){
    const data = {
        no:req.query=no || '',
        email:req.query.email || ''
    }
    resp.render("hello/02",data);
    
});

module.exports = router;