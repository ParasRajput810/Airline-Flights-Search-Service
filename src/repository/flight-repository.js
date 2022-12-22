const { Flight } = require("../models/index");
const { Op } = require("sequelize");

class FlightRepository{

    #createfilter(data){
        let filter ={};

        if(data.arrivalAirportId){
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId){
            filter.departureAirportId = data.departureAirportId;
        }
        if(data.minprice && data.maxprice){
            Object.assign(filter ,  {price : {[Op.between] : [data.minprice , data.maxprice]}});
        }
        else if(data.minprice){
            Object.assign(filter , {price : {[Op.gte] : data.minprice}});
        }
        else if(data.maxprice){
            Object.assign(filter , {price : {[Op.lte] : data.maxprice}});
        }

        return filter;
    }

    async createFlight(data){
        try{
            const flight = await Flight.create(data);
            return flight;
        }
        catch(error){
            throw {error};
        }
    }

    async getAllFlights(filter){
        try {
            const filtered_data = await this.#createfilter(filter);
            const flight = await Flight.findAll({
                where : filtered_data
            });
            return flight;            
        } catch (error) {
            console.log("Something happend in repository")
            throw {error};
        }

    }

}

module.exports = FlightRepository;