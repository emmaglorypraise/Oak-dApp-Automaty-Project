import * as Joi from "joi";

export const paginationValidator = Joi.object({
    limit: Joi.number().default(50),
    page: Joi.number().default(1),
    searchTerm: Joi.string().default(''),
    startDate: Joi.date().default(null),
    endDate: Joi.date().default(null),
  });