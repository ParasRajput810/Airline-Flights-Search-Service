const { CityService } = require("../services/index");

const City = new CityService();

const create = async(req,res)=>{
    try {
        const city = await City.createCity(req.body);
        return res.status(201).json({
            data:city,
            success :true,
            message : "City Created Successfully",
            err:{}
        }
        ) 
    } catch (error) {
        return res.status(501).json({
            data:{},
            Status:"Failed",
            Message:"Cannot Create city",
            err :{error}
        })
    }
}

const destroy = async(req,res)=>{
    try {
        const city = await City.deleteCity(req.params.id);
        return res.status(202).json({
            data: city,
            success:true,
            message : "City Deleted Successfully",
            err : {}
        })
    } catch (error) {
        return res.status(501).json({
            data:{},
            Status:"Failed",
            Message:"Cannot delete city",
            err :{error}
        })
    }
}
const update = async(req,res)=>{
    try {
        const city = await City.updateCity( req.params.id , req.body);
        return res.status(206).json({
            data :city,
            Success: true,
            message : "City Updated Successfully",
            err : {},
        })
    } catch (error) {
        return res.status(501).json({
            data:{},
            Status:"Failed",
            Message:"Cannot update city",
            err :{error}
        })
    }
}
const getcity = async(req,res)=>{
    try {
        const response = await City.getCity(req.params.id);
        console.log(response)
        return res.status(200).json({
            data:response,
            sucess : true,
            message : "Successfully fetched a city"
        });
    } catch (error) {
        return res.status(501).json({
            data:{},
            Status:"Failed",
            Message:"Cannot get city",
            err :{error}
        })
    }
}

const getall = async(req,res)=>{
    try {
        const city = await City.getAll(req.query);
        return res.status(207).json({
            data : city,
            success : true,
            message : "City Fetched Successfully",
            error:{},
        })
    } catch (error) {
        console.log("Error in controller")
        return res.status(501).json({
            data : {},
            success : false,
            message : "Cannot able to fetch ",
            error : {error},
        })
    }
}

module.exports = {
    create,
    update,
    destroy,
    getcity,
    getall,
}