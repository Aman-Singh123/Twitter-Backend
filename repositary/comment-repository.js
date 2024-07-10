const CommentModel = require('../models/comment');
const CrudRepository = require('./crudRepositary');

class CommentRepositary extends CrudRepository {
    constructor() { 
        super(CommentModel);
    }

    
}


module.exports = CommentRepositary