const express = require('express')
const router = express.Router()

const User = require('../public/models/userModel')
const bodyParser = require('body-parser')
const LearningPath = require('../public/models/learningPathModel')


router.use(express.static("public"));

router.use(bodyParser.urlencoded({extended: true}));



router.get('/', (req, res) => {
    res.send('Hello world')
})


router.get('/createProfile', (req,res) => {
  res.sendFile('createProfile.html', {root: './views/'})
}) 

router.post('/createProfile', (req, res) => {
  User.User.findOne({email: req.body.email}, (err, foundUser) => {
    if(foundUser == null) {
      const testUser = new User.User({
        fullName: 'Adam Jean-Laurent',
        email: 'test@gmail.com',
        DOB: '1-25-98',
        Gender: 'Male',
        Password: 'password123'
      })
      testUser.save()
      return res.status(201).json(testUser);
    }
    else {
      let error = "That user already exists";
      return res.render('createProfile', {error: error});
    }
  })
})

// MAKE PROFILE PAGE
router.get('/makeProfile', (req,res) => {
  res.sendFile('makeProfile.html', {root: './views/'})
}) 

router.post('/makeProfile', (req,res) => {
  console.log(req.body)
  return res.status(201).json(req.body);
}) 


router.get('/allUsers', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
      } catch (err) {
        res.status(500).json({ message: err.message })
      }
})

// how to get the learning path ??
router.get('/learningPath', (req, res) => {
  let userLearningPath = 'Web Development'
  LearningPath.LearningPath.findOne((err, foundPath) => {
    if(foundPath != null) {
      return res.render('../views/learningPath.ejs', {title: foundPath.title, courses: foundPath.courses})
    }
  })
})

module.exports = router