const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({

    recipe_id: {
        type: String,
        required: true
    },
    recipe_name: {
        type: String,
        require: true
    },
    ingredients: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Recipe', recipeSchema);