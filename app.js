const env = require('dotenv')
env.config()


const express = require('express')
const connectDb = require('./config/connectdb')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const passport = require('passport')
const Tweetsrouter = require('./routes/v1/tweetRoutes')
const Authrouter = require('./routes/v1/authRoutes')
const passportAuth = require('./config/jwt')







const app = express()
const port = process.env.PORT
const dburl = process.env.DBURL


app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use(passport.initialize())
passportAuth(passport)

// Routers
app.use('/api/v1/tweets', Tweetsrouter)
app.use('/api/v1/auth', Authrouter)


connectDb(dburl)



// const repo = new TweetService()

// repo.create({ content: 'hii how are you what are yhou    #QWERTY #singh #rename' })


// async function check() {
//     const userrepo = new UserRepository()
//     const twitterrepo = new TwitterRepostiry()
//     const tweets = await twitterrepo.getAll(0, 10)
//     console.log(tweets)

//     const user = await userrepo.create({
//         name: 'Rajat',
//         email: 'rajat1@gmail.com',
//         password: 'rajat123',
//         mobile: "99141474"

//     })
//     console.log(user)

//     const likeService = new LikesService()
//     await likeService.toggleLike(tweets[0]._id, 'Tweets', user._id)
// }






app.listen(port, () => {
    // check()

    console.log(`Example app listening on port ${port}!`)
})