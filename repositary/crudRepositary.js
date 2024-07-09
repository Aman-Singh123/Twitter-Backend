const { trusted } = require("mongoose")

class CrudRepository {
    constructor(model) { 
        this.model = model

    }

    async create(data) {
        try {
            const result = await this.model.create(data)
            return result
        } catch (error) {
            console.log('Error in create Crud Repo')
            throw error
        }
    }

    async destroy(id) {
        try { 
            const result = await this.model.findByIdAndDelete(id)
            return result
        }
        catch (err) {
            console.log('Error in destroy Crud Repo')
            throw err
        }
    }
    async get(id) {
        try {
            const result = await this.model.findById(id)
            return result
        }
        catch (err) {
            console.log('Error in get Crud Repo')
            throw err
        }
    }
    async getall() {
        try {
            const result = await this.model.find()
            return result
        }
        catch (err) {
            console.log('Error in getall Crud Repo')
            throw err
        }
    }

    async update(id, data) {
        try {
            const result = await this.model.findByIdAndUpdate(id, data,{new: true})
            return result
        }
        catch (err) {
            console.log('Error in update Crud Repo')
            throw err
            }
    }

}

module.exports = CrudRepository