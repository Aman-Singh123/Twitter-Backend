const multer = require('multer')
const multerS3 = require('multer-s3')
const aws = require('aws-sdk')
const { S3Client } = require('@aws-sdk/client-s3');
const { Upload } = require('@aws-sdk/lib-storage');
// aws.config.update({
//     region: process.env.Region,
//     secretAccessKey: process.env.SecretKey,
//     accessKeyId: process.env.Acess_Key,

// })
// const s3 = new aws.S3()
const s3 = new S3Client({
    region: process.env.Region, // e.g., 'us-east-1'
    credentials: {
        accessKeyId: process.env.Acess_Key,
        secretAccessKey: process.env.SecretKey ,
    },
});


const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.bucket,
        metadata: function (req, file, cb) { 
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString() + '-' + file.originalname);
        },
    })
})


module.exports = upload