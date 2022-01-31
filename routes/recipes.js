const express = require('express');
const recipes = require('../models/recipes');

// import user model
const Recipes = require('../models/recipes');

//Write the http requests in create, update and delete crud functions
const router = express.Router();

//Save recipe details
router.post('/recipe/save', (req, res) => {
    let newRecipes = new Recipes(req.body);
    newRecipes.save((err) => {
        if(err) {
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Recipe details are saved successfully"
        });
    });
});



//Get recipe requests
router.get('/recipe/get', (req, res) => {
    Recipes.find().exec((err,recipes) => {
        if(err) {
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingRecipes:recipes
        });
    });
});



//Get a specific Recipe request
router.get("/recipe/:id",(req, res) =>{
    let recipe_Id = req.params.id;
    recipes.findById(recipe_Id,(err, recipes) =>{
        if(err){
            return res.status(400).json({success:false, err})
        }
        return res.status(200).json({
            success:true,
            recipes
        });
    });
});



//Update Recipe Requests
router.put('/recipe/update/:id', (req, res) => {
    Recipes.findByIdAndUpdate(
        req.params.id, 
        {
            $set:req.body
        },
        (err, post) => {
            if(err) {
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});



//Delete Recipe Requests
router.delete('/recipe/delete/:id', (req, res) => {
    Recipes.findByIdAndRemove(req.params.id).exec((err, deleteRecipe) => {
        if(err) return res.status(400).json({
            message:"Delete unsuccessfull", err
        });
        return res.json({
            message:"Delete Successful", deleteRecipe
        });
    });
});


module.exports = router;