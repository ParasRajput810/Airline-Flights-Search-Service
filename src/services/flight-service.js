const {FlightRepository , AirplaneRepository} = require("../repository/index");
const {datevalidation} = require("../utils/helper");
class FlightService {
    constructor(){
        this.airplanerepository = new AirplaneRepository;
        this.flightrepository = new FlightRepository;
    }

    async createFlight(data){
        try {
            if(!datevalidation(data.arrivalTime , data.departureTime)){
                console.log(datevalidation);
                throw {error : "Arrival Date Must Be greater than Departure date"};
            }

            const airplane = await this.airplanerepository.getAirplane(data.airplaneId);
            const flight = await this.flightrepository.createFlight({...data ,totalSeats : airplane.capacity});
            return flight;    
        } catch (error) {
            throw {error};
        }
    }

    async getAllFlights(filter){
        try {
            const flights = await this.flightrepository.getAllFlights(filter);
            console.log(flights);
            return flights
        } catch (error) {
            console.log("Something wrong happend in service")
            throw {error};
        }
    }
    async getflightbyid(bookingid){
        try {
            const flights = await this.flightrepository.getbyid(bookingid);
            return flights;
        } catch (error) {
            throw {error};
        }
    }
    async updateflight(data , bookingid){
        try {
            const flights = await this.flightrepository.update(data,bookingid);
            return flights;
        } catch (error) {
            console.log("service");
            throw {error};
        }
    }
}

module.exports = FlightService;