const Joi = require('joi');

const contactSchema = Joi.object({
    name: Joi.string(),
    email:Joi.string().email().required(),
    queries:Joi.string().required()
})

module.exports = async (req,res,next) => {
    try{
       req.body = await contactSchema.validateAsync(req.body);
      next();
    }catch (e) {
      next(e)
    }
}