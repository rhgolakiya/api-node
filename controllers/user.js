// const User = require('../models/user');
// const bcrypt = require('bcrypt');
// const nodemailer = require('nodemailer');
// const sendgridTransport = require('nodemailer-sendgrid-transport');
// const jwt = require('jsonwebtoken');
//
// const transporter = nodemailer.createTransport(
//     sendgridTransport({
//         auth: {
//             api_key:
//                 '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'
//         }
//     })
// );
// exports.getLogin = (req,res,next)=>{
//     let message = req.flash('error');
//     res.render('auth/login', {
//         pageTitle: 'Login',
//         path:'/login',
//         errorMessage: message,
//     })
// }
//
// exports.getSignup = (req,res,next)=>{
//     let message = req.flash('error');
//     res.render('auth/signup', {
//         pageTitle: 'Signup',
//         path:'/signup',
//         errorMessage: message,
//     })
// }
//
// exports.registerUser = async (req,res,next) => {
//     const name = req.body.name;
//     const email = req.body.email;
//     const password = req.body.password;
//
//    const hashedPassword = await bcrypt.hash(password,8);
//
//    const user = await new User({
//        name:name,
//        email:email,
//        password:hashedPassword
//    })
//     await user.save();
//      res.redirect('/login');
//    return transporter.sendMail({
//       to: email,
//       from: 'ridhamgolakiya7878@gmail.com',
//       subject: 'Signup succeeded!',
//       html: `<h1>Congratulations!</h1>
//            <h2>You successfully signed up on Ridham Golakiya's Demo Site</h2>`
//     });
// }
//
// exports.loginUser = async(req,res,next) => {
//     const email = req.body.email;
//     const password = req.body.password;
//
//     const user = await User.findOne({email});
//
//     if(!user){
//         req.flash('error', 'Wrong credentials.');
//         return res.redirect('/login');
//     }
//     const isEqual = await bcrypt.compare(password,user.password);
//
//     if(!isEqual){
//         req.flash('error', 'Wrong credentials.');
//         return res.redirect('/login');
//     }
//
//     let token = jwt.sign({
//         email:user.email,
//         userId:user._id.toString(),
//     }, process.env.SECRET_KEY,{expiresIn :"5m"});
//
//     // res.json({token:token})
//     return res.redirect('/');
// }