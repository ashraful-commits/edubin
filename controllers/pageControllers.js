const path = require("path")

const homePageshow = (req,res) => {
        res.status(200).sendFile(path.join(__dirname,'../public/index.html'));
}

const homePageOneshow = (req,res) => {
        res.status(200).sendFile(path.join(__dirname,'../public/index-2.html'));
}
const homePageTwoshow = (req,res) => {
        res.status(200).sendFile(path.join(__dirname,'../public/index-3.html'));
}
const homePageThreeshow = (req,res) => {
        res.status(200).sendFile(path.join(__dirname,'../public/index-4.html'));
}
const aboutPageShow = (req,res) => {
        res.status(200).sendFile(path.join(__dirname,'../public/about.html'));
}
const blogsinglepage = (req,res) => {
        res.status(200).sendFile(path.join(__dirname,'../public/blog-single.html'));
}
const blogpage= (req,res) => {
        res.status(200).sendFile(path.join(__dirname,'../public/blog.html'));
}
const contactpage= (req,res) => {
        res.status(200).sendFile(path.join(__dirname,'../public/contact.html'));
}
const contactpagetwo= (req,res) => {
        res.status(200).sendFile(path.join(__dirname,'../public/contact-2.html'));
}
const coursepage= (req,res) => {
        res.status(200).sendFile(path.join(__dirname,'../public/courses.html'));
}
const coursesinglepage= (req,res) => {
        res.status(200).sendFile(path.join(__dirname,'../public/courses-single.html'));
}
const eventspage= (req,res) => {
        res.status(200).sendFile(path.join(__dirname,'../public/events.html'));
}
const eventstwopage= (req,res) => {
        res.status(200).sendFile(path.join(__dirname,'../public/events-2.html'));
}
const eventssinglepage= (req,res) => {
        res.status(200).sendFile(path.join(__dirname,'../public/events-single.html'));
}
const faqpage= (req,res) => {
        res.status(200).sendFile(path.join(__dirname,'../public/faq.html'));
}
const gallerypage= (req,res) => {
        res.status(200).sendFile(path.join(__dirname,'../public/gallery.html'));
}

const policypage= (req,res) => {
        res.status(200).sendFile(path.join(__dirname,'../public/policy.html'));
}
const registerpage= (req,res) => {
        res.status(200).sendFile(path.join(__dirname,'../public/register.html'));
}
const shopsinglepage= (req,res) => {
        res.status(200).sendFile(path.join(__dirname,'../public/shop-single.html'));
}
const shoppage= (req,res) => {
        res.status(200).sendFile(path.join(__dirname,'../public/shop.html'));
}
const teacherpage= (req,res) => {
        res.status(200).sendFile(path.join(__dirname,'../public/teachers.html'));
}
const teachertwopage= (req,res) => {
        res.status(200).sendFile(path.join(__dirname,'../public/teachers-2.html'));
}
const teachersinglepage= (req,res) => {
        res.status(200).sendFile(path.join(__dirname,'../public/teachers-single.html'));
}





module.exports = {
    homePageshow,
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
}