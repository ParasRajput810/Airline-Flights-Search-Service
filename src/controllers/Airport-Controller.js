const {AirportService} = require("../services/index");

const airportservice = new AirportService()

const create = async(req,res)=>{
    try {
        const airport = await airportservice.create(req.body);
        return res.status(201).json({
            body: airport,
            Success : true,
            err : {}
        })
    } catch (error) {
        return res.status(504).json({
            body:{},
            Success:false,
            err:error,
        })
    }
}

const destroy = async(req,res)=>{
    try {
        const airport = await airportservice.delete(req.query);
        return res.status(201).json({
            body: airport,
            Success : true,
            err : {}
        })
    } catch (error) {
        return res.status(504).json({
            body:{},
            Success:false,
            err:error,
        })
    }
}

const update = async (req,res) =>{
    try {
        const airport = await airportservice.update( req.query , req.body);
        return res.status(201).json({
            body: airport,
            Success : true,
            err : {}
        })
    } catch (error) {
        return res.status(504).json({
            body:{},
            Success:false,
            err:error,
        })
    }
}

const getAll = async(req , res)=>{
    try {
        const airport = await airportservice.getAll();
        return res.status(201).json({
            body: airport,
            Success : true,
            err : {}
        })
    } catch (error) {
        return res.status(504).json({
            body:{},
            Success:false,
            err:error,
        })
    }
}

module.exports = {
    create,
    update,
    destroy,
    getAll
}