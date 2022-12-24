const {AirportRepository} = require("../repository/index");
const CrudService = require("./curd-service");

class AirportService extends CrudService{
    constructor(){
        const airportrepository = new AirportRepository();
        super(airportrepository);
    }
}

module.exports = AirportService;