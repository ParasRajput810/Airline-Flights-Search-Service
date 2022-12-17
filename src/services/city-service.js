const {CityRepository} = require("../repository/index");

class CityService{
    constructor(){
        this.cityservice = new CityRepository();
    }

    async createCity(data){
        try {
            const city = await this.cityservice.createCity(data);
            return city;    
        } catch (error) {
            throw {error};
        }
    
    }

    async deleteCity(data){
        try {
            const city = await this.cityservice.deleteCity(data);
            return city;
        } catch (error) {
            throw {error};
        }
    }

    async updateCity( cityid , data){
        try{
            const city = await this.cityservice.updateCity(cityid , data)
            return city;
        }catch(error){
            throw {error};
        }
    }
    async getCity(data){
        try {
            const city = await this.cityservice.getcity(data);
            return city;
        } catch (error) {
            throw {error};
        }
    }
}

module.exports = CityService;
