import Joi from 'joi';

export const newRecipeSchema = Joi.object({
  title: Joi.string().required(),
  image: Joi.string().uri().required(),
  portions: Joi.number().integer().required(),
  time: Joi.number().integer().required(),
  ingredients: Joi.array().items(Joi.string()).required(),
  method: Joi.array().items(Joi.string()).required(),
});
