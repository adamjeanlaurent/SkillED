const express = require('express')
const router = express.Router()

const User = require('../public/models/userModel')
const bodyParser = require('body-parser')
const LearningPath = require('../public/models/learningPathModel')
const Job = require('../public/models/jobModel')


router.use(express.static("public"));

router.use(bodyParser.urlencoded({extended: true}));



router.get('/', (req, res) => {
    res.sendFile('landingPage.html', {root: './views/'})
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
      res.redirect('/interestsPage')
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
      return res.render('learningPath', {title: foundPath.title, courses: foundPath.courses})
    }
  })
})

// how to know what the user's learning plan is ??
router.get('/jobPostings', (req, res) => {
  let userIndustry = 'Tech';
  Job.Job.find({Industry: userIndustry}, (err, jobs) => {
      return res.render('jobPostings', {jobs: jobs})
    
  })
})

router.get('/interestsPage', (req, res) => {
  res.sendFile('interestsPage.html',  {root: './views/'})
})

router.get('/assessment', (req, res) => {
  res.sendFile('assessment.html',  {root: './views/'})
})

router.post('/assessment', (req, res) => {
  return res.redirect('/learningPath');
})

router.get('/enterInterest', (req, res) => {
  res.sendFile('enterInterestsForm.html',  {root: './views/'})
})

module.exports = router