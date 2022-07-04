import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { FilterQuery } from 'mongoose';

import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { JoiObjectValidationPipe } from 'src/utils/pipes/validation.pipe';
import { createTaskValidator, updateTaskValidator } from './validators/task.validator';
import { paginationValidator } from 'src/utils/validators/validator';
import { PaginationDto } from 'src/utils/dtos/pagination.dto';
import { Task } from './entities/task.entity';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) { }

  @Post('schedule-task')
  async create(@Body(new JoiObjectValidationPipe(createTaskValidator)) createTaskDto: CreateTaskDto) {
    return await this.taskService.create(createTaskDto);
  }

  @Get('get-all-tasks')
  async findAll(
    @Query(new JoiObjectValidationPipe(paginationValidator.required()))
    query: PaginationDto,
  ) {

    //return a paginated list of users
    const filter: FilterQuery<Task> = {
      isDeleted: false,
      deletedAt: null,
    };

    const foundResult = await this.taskService.search(
      query,
      filter,
      /** sort logic */
      { createdAt: -1 },
    );

    return {
      data: foundResult
    };

  }

  @Get('get-tasks-for-address')
  async fetchTasks(@Query('address') address: string) {
    return await this.taskService.findAll(address)
  }

  @Get(':id')
  async findOneTask(@Param('id') id: string) {
    return await this.taskService.findById(id);
  }

  @Patch('update-task/:id')
  async update(@Param('id') id: string, @Body(new JoiObjectValidationPipe(updateTaskValidator)) updateTaskDto: UpdateTaskDto) {
    return await this.taskService.update(id, updateTaskDto);
  }

  @Delete('delete-task/:id')
  async remove(@Param('id') id: string) {
    return await this.taskService.deleteTask(id);
  }
}
