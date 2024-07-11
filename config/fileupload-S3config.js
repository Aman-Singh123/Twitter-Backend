const multer = require('multer')
const multerS3 = require('multer-s3')
const aws = require('aws-sdk')
aws.config.update({
    region: process.env.Region,
    secretAccessKey: process.env.SecretKey,
    accessKeyId: process.env.Acess_Key,

})
const s3 = new aws.S3()


const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.bucket,
        acl: 'public-read',
        metadata: function (req, file, cb) { 
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) { 
            cb(null, Date.now().toString())
        }
    })
})


module.exports = upload