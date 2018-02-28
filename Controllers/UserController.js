const express = require("express");
const body_parser = require("body-parser");
const User = require("../Models/User");
const Loggers = require("../Loggers");

const router = express.Router();

router.use(body_parser.urlencoded({ extended:true }));
router.use(body_parser.json());

/**
 * Methods
 */

/**
 * Post
 */
router.post("/", (req, res) => {

    let body = req.body;

    User.create(
        {
            name: body.name,
            email: body.email,
            password: body.password
        },
        function(err, user){
            
            if(err){
                return res.status(500)
                    .send("An error occured while adding information to database");
            }

            res.status(200).send(user);
            Loggers.usercreated("info", user);
        }
    );
    
});

/**
 * Get all
 */
router.get("/", (req, res) => {
    
    User.find(
        {},
        function(err, users){
    
            if(err){
                return res.status(500)
                    .send("An error occured - no users found");
            }

            res.status(200).send(users);

        }
    );

});

/**
 * Get by id
 */
router.get("/:id", (req,res) =>{

    let params = req.params;

    Users.findById(params.id, (err, user) =>{

        if(err){
            return res.status(500)
                .send("An error occured");
        }

        if(!user){
            return res.status(404)
                .send(`User with this id: ${params.id} does not exist`);
        }

        res.status(200).send(user);

    });

});

/**
 * Update
 */
router.put("/:id", (req, res) => {

    let params = req.params;

    User.findByIdAndUpdate(params.id, req.body, 
        { new: true }, (err, user) => {

        if (err) {
            return res.status(500)
                .send("An error occured while updating user");
        }

        res.status(200).send(user);

    });

});

/**
 * Delete
 */

router.delete("/:id", (req, res) =>{

    let params = req.params;

    User.findByIdAndRemove(params.id, (err, user) => {

        if(err){
            return res.status(500)
                .send("An error occured while deleting a user");
        }

        res.status(200)
            .send(`User: ${user.name}, ${user.email} has been deleted`);
        Logger.userdeleted.emit("info", user.name)

    });

});

module.export = router;