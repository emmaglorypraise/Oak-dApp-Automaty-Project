import * as Joi from 'joi';
import { envConfiguration as env } from './env.configuration';

// define validation for all env variables
export const envValidationSchema = Joi.object({
  [env.MONGODB_COMPASS]: Joi.string().trim().required(),
  [env.PORT]: Joi.number(),
});
