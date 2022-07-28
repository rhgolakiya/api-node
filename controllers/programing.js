const Contact = require('../models/contact-form');
const Program = require('../models/program');
const DOMParser = require('dom-parser');

exports.getIndex = (req, res, next) => {
        res.render('frontend/index', {
            pageTitle: 'Home',
            path:'/'
        })
};

exports.addProgram = (req,res,next) => {
    res.render('admin/add-program', {
        pageTitle: 'Add Program',
        path:'/admin/addprogram'
    })
}

exports.postProgram = async (req,res,next) => {
    const program = await new Program(req.body);
    program.save();
    return res.redirect('/')
}

exports.getPrograms = (req, res, next) => {
    Program.find() .then(programs => {
            res.render('frontend/programs', {
                programs: programs,
                pageTitle: 'programs',
                path: '/programs'
            });
        })
        .catch(err => {
            const error = new Error(err);
            error.httpStatusCode = 500;
            return next(error);
        });
};

exports.contact = async(req,res,next) => {
     const name  = req.body.name;
    const email  = req.body.email;
    const queries  = req.body.queries;

     const contact = await new Contact({
         name:name,
         email:email,
         queries:queries
     });
     if(!name){
         req.flash('error', 'Invalid email or password.');
     }

     contact.save();
     return res.redirect('/')
}

exports.programDetails = (req, res, next) => {
    const id = req.params.id;
    Program.findById(id)
        .then(program => {
            res.render('frontend/program-detail', {
                program: program,
                pageTitle: program.title,
                path: '/programs'
            });
        })
        .catch(err => console.log(err));
};