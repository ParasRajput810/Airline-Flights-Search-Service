class CrudService{

    constructor(repository){
        this.repository = repository;
    }

    async create(data){
        console.log("2");
        try {
            const airport = await this.repository.create(data);
            return airport   
        } catch (error) {
            throw {error};
        }
    }

    async delete(data){
        try {
            const airport = await this.repository.destroy(data);
            return airport;
        } catch (error) {
            throw {error};
        }
    }

    async update(airportid , data){
        try {
            const airport = await this.repository.update(airportid , data);
            return airport;
        } catch (error) {
            throw {error};
        }
    }

    async getAll(data){
        try {
            const airport = await this.repository.findAll(data);
            return airport;
        } catch (error) {
            throw {error};
        }
    }

}

module.exports = CrudService;