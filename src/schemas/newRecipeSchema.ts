import Joi from 'joi';

export const newRecipeSchema = Joi.object({
  title: Joi.string().required(),
  image: Joi.string().uri().required(),
  ingredients: Joi.string().required(),
  method: Joi.string().required(),
  portions: Joi.number().integer().required(),
  time: Joi.number().integer().required(),
  utensils: Joi.array().items(Joi.string()).required(),
  userId: Joi.string().required()
});
