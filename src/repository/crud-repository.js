class CrudRepository{
    constructor(model){
        this.model = model
    }

    async create(data){
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            throw {error};
        }
    } 

    async delete(airportId){
        try {
            const result = await this.model.destroy({where :{
                id : airportId
            }});
            return result;
        } catch (error) {
            throw {error};
        }
    }

    async getAll(data){
        try {
            const result =await this.model.findAll({where:{
                id : data
            }});
            return result;
        } catch (error) {
            throw {error};
        }
    }

    async update( Aiportid , data){
        try {
            const result =await this.model.update(data , {
                where:{
                    id:Aiportid
                }
            });
            return result;
        } catch (error) {
            throw {error};
        }
    }
}

module.exports = CrudRepository;