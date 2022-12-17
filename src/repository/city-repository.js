const { City } = require("../models/index");

class CityRepository{
    async createCity( { name }  ){
        try{
            const city = await City.create({name});
            return city;
        }catch(error){
            console.log();
            throw {error};
        }
    }

    async deleteCity(cityid){
        try {
            await City.destroy({
                where:{
                    id : cityid
                }
            });
            return true;
        } catch (error) {
            throw {error};
        }
    }

    async updateCity(cityid , data){
        try {
            const city = await City.findByPk(cityid);
            city.name = data.name;
            await city.save();
            return city;
        } catch (error) {
            throw {error};
        }
        
    }

    async getcity(cityid){
        try {
            const city = await City.findByPk(cityid)
            return city;
        } catch (error) {
            console.log(cityid)
            throw {error}
        }
    }

    async getall(){
        try {
            const city = await City.findAll();
            return city;
        } catch (error) {
            
            throw {error};
        }
    }
}
module.exports = CityRepository;