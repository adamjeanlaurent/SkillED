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

// MAKE PROFILE PAGE
router.get('/makeProfile', (req,res) => {
  res.sendFile('makeProfile.html', {root: './views/'})
}) 

router.post('/makeProfile', (req,res) => {
  if(
    req.body.fullname_input != null &&
    req.body.email_input != null &&
    req.body.dob_input != null &&
    req.body.gender_input != null &&
    req.body.gender_input != null &&
    req.body.password_input != null
    
  ) {
      const user = new User.User({
        fullName: req.body.fullname_input,
        email: req.body.email_input,
        DOB: req.body.dob_input,
        Gender: req.body.gender_input,
        Password: req.body.password_input
      })
      user.save()
      // res.status(201).json(user);
      res.redirect('/')
  } else {
    res.status(400).json({ message: err.message })
  }
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