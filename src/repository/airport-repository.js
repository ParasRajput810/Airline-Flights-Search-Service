const {Airport} = require("../models/index");

const CrudRepository = require("./crud-repository");

class AriportRepository extends CrudRepository{
    constructor(){
        super(Airport);
    }
}

module.exports = AriportRepository;