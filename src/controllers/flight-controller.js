const {FlightService} = require("../services/index");

const flightservice = new FlightService();

const createFlight = async(req,res)=>{
    try {
        const flight = await flightservice.createFlight(req.body);
        return res.status(201).json({
            data:flight,
            message:"Flight created Successfully",
            Success:true,
            err :{}
        })
    } catch (error) {
        
        return res.status(501).json({
            data : {},
            success : false,
            message : "Cannot able to create flight ",
            error : {error},
        })
    }
}

const getflights = async (req,res) =>{
    try {
        const flights = await flightservice.getAllFlights(req.query);
        return res.status(201).json({
            data:flights,
            message:"Flight fetched Successfully",
            Success:true,
            err :{}
        })
    } catch (error) {
        console.log("Something happend in controller layer")
        return res.status(501).json({
            data : {},
            success : false,
            message : "Cannot able to get flight ",
            error : {error},
        })
    }
}
module.exports = {createFlight, getflights};