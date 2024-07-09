const hastagModel = require('../models/hastags')

class HastagRepostiry {

    async create(data) {
        try {
            const hastag = await hastagModel.create(data)
            return hastag
        } catch (error) {
            console.log(error)

        }
    }

    async bulckcreate(data) {
        try { 
            const hastag = await hastagModel.insertMany(data)
            return hastag
        }
        catch (error) { 
            console.log(error)
        }
    }

    async get(id) {
        try {
            const hastag = await hastagModel.findById(id)
            return hastag
        }
        catch (error) {
            console.log(error)
        }
    }



    async destroy(id) {
        try {
            const hastag = await hastagModel.findByIdAndDelete(id)
            return hastag
        } catch (Err) {
            console.log(Err)
        }
    }

    async findByName(titlelist) {
        try { 
            const hastag = await hastagModel.find({ title: { $in: titlelist } })
            return hastag

        }
        catch (error) { 
            console.log(error)
        }
    }

}

module.exports = HastagRepostiry