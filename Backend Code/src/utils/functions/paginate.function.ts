import { FilterQuery, Model } from 'mongoose';
import { PaginationDto } from '../dtos/pagination.dto';

export const paginatedResult = async <M>(
  paginationData: PaginationDto,
  query: FilterQuery<M>,
  model: Model<M>,
  sort?: {},
) => {
  const { limit, page } = paginationData;

  const count = await model.countDocuments(query);

  const foundItems = await model
    .find(query)
    .skip((page - 1) * limit)
    .sort(sort && sort)
    .limit(limit)

  const totalPages = Math.ceil(count / limit);
  
  const nextPage = page + 1 > totalPages ? null : page + 1;

  return {
    count,
    limit,
    totalPages,
    nextPage,
    currentPage: page,
    foundItems,
  };
};
