const {FlightRepository , AirplaneRepository} = require("../repository/index");

class FlightService {
    constructor(){
        this.airplanerepository = new AirplaneRepository;
        this.flightrepository = new FlightRepository;
    }

    async createFlight(data){
        try {
            const airplane = await this.airplanerepository.getAirplane(data.airplaneId);
            const flight = await this.flightrepository.createFlight({...data ,totalSeats : airplane.capacity});
            return flight;    
        } catch (error) {
            throw {error};
        }
    }
}

module.exports = FlightService;