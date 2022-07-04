import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { FilterQuery, Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Task } from './entities/task.entity';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PaginationDto } from 'src/utils/dtos/pagination.dto';
import { paginatedResult } from 'src/utils/functions/paginate.function';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(Task.name) private readonly taskModel: Model<Task>,
  ) { }

  /**
  * This method creates a task
  * @param task
  * @returns
  */
  async create(task: Task) {

    try {

      const initializeNewTask = new this.taskModel(task);

      const scheduleTask = await initializeNewTask.save();

      return {
        status: true,
        message: "task scheduled successfully",
        scheduleTask
      };

    } catch (error) {
      throw new BadRequestException(error.message)
    }

  }

  /**
  * This method returns a single task by the id provided
  * @param id
  * @returns
  */
  async findById(id: string) {

    try {

      const task = await this.taskModel.findById(id);

      if (!task) {
        throw new NotFoundException('task not found')
      }

      return {
        status: true,
        task
      }

    } catch (error) {
      throw new BadRequestException(error.message);
    }

  }

  /**
  * This method updates a task
  * @param id
  * @param updateTaskDto
  * @returns
  */
  async update(id: string, updateTaskDto: UpdateTaskDto) {

    try {

      const updateTask = await this.taskModel.findByIdAndUpdate(
        id,
        { ...updateTaskDto },
        { new: true });

      if (!updateTask) {
        throw new NotFoundException('task not found')
      }

      return {
        status: true,
        message: "Updated successfully",
        updateTask
      }

    } catch (error) {
      throw new BadRequestException(error.message);
    }

  }

  /**
  * This method deletes a task
  * @param id
  * @returns
  */
  async deleteTask(id: string) {

    try {

      const deleteTask = await this.taskModel.findByIdAndDelete(id)

      if (!deleteTask) {
        throw new NotFoundException('task not found');
      }

      return {
        status: true,
        message: 'task deleted successfully'
      }

    } catch (error) {
      throw new BadRequestException(error.message)
    }

  }

  /**
  * This method returns a paginated list of all tasks
  * @param query
  * @param filter
  * @param sort
  * @returns
  */
  async search(
    query: PaginationDto,
    filter: FilterQuery<Task>,
    sort?: Record<string, unknown>,
  ) {

    try {

      const result = await paginatedResult(
        query,
        filter,
        this.taskModel,
        sort,
      );

      return result

    } catch (error) {
      throw new BadRequestException(error.message);
    }

  }

  /**
 * This method returns a list of all tasks by an address
 * @param address
 * @returns
 */
  async findAll(address: string) {
    try {

      const result = await this.taskModel.find({ address })

      return result;
    } catch (e) {
      throw new NotFoundException(e.message)
    }
  }

}
