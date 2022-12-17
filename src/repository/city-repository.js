const { City } = require("../models/index");

class CityRepository{
    async createCity( body   ){
        try{
            const city = await City.create(body);
            return city;
        }catch(error){
            console.log(body);
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
            const city = await City.update(data,{
                where:{
                    id:cityid
                }
            })
            return city;
        } catch (error) {
            throw {error};
        }
        
    }

    async getcity(cityid){
        try {
            const city = await City.findall({
                where :{
                    id: cityid
                }
            })
            return city;
        } catch (error) {
            throw {error}
        }
    }
}
module.exports = CityRepository;