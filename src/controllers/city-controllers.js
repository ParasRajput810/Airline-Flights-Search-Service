const { CityService } = require("../services/index");

const City = new CityService();

const create = async(req,res)=>{
    try {
        const city = await City.createCity(req.body);
        return res.status(204).json({
            data : city,
            Status : "Success",
            Message : "City Created Successfully.",
            err : {}
        });
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
        return res.status(204).json({
            data : city,
            Status : "Success",
            Message : "deleted City  Successfully.",
            err : {}
        });
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
        const city = await City.updateCity(req.body, req.params.id);
        return res.status(204).json({
            data : city,
            Status : "Success",
            Message : "City updated Successfully.",
            err : {}
        });
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
        const city = await City.getCity(req.params.id);
        return res.status(204).json({
            data : city,
            Status : "Success",
            Message : "Got City Successfully.",
            err : {}
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

module.exports = {
    create,
    update,
    destroy,
    getcity
}