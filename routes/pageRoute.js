const express = require("express")
const router = express.Router()
const { homePageshow,
    homePageOneshow,
    homePageTwoshow,
    homePageThreeshow,
    aboutPageShow,
    blogsinglepage,
    blogpage,
    contactpage,
    contactpagetwo,
    coursepage,
    coursesinglepage,
    eventspage,
    eventstwopage,
    eventssinglepage,
    faqpage,
    gallerypage,
    policypage,
    registerpage,
    shopsinglepage,
    shoppage,
    teacherpage,
    teachertwopage, 
    teachersinglepage
} =require('../controllers/pageControllers')

router.get('/', homePageshow)
router.get('/home', homePageOneshow)
router.get('/home-2', homePageTwoshow)
router.get('/home-3', homePageThreeshow)
router.get('/about', aboutPageShow)
router.get('/blog-single', blogsinglepage)
router.get('/blog', blogpage)
router.get('/contact', contactpage)
router.get('/contact-2', contactpagetwo)
router.get('/courses', coursepage)
router.get('/courses-single',  coursesinglepage)
router.get('/events', eventspage)
router.get('/events-2',  eventstwopage)
router.get('/events-single',  eventssinglepage)
router.get('/faq', faqpage)
router.get('/gallery',  gallerypage)
router.get('/policy', policypage)
router.get('/register', registerpage)
router.get('/shop-single', shopsinglepage)
router.get('/shop', shoppage)
router.get('/teachers', teacherpage)
router.get('/teachers-2', teachertwopage)
router.get('/teachers-single', teachersinglepage)


module.exports = router
