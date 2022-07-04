import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { Task, TaskSchema } from './entities/task.entity';

@Global()
@Module({
  controllers: [TaskController],
  providers: [TaskService],
  
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Task.name,
        useFactory: () => {
          const schema = TaskSchema;
          return schema;
        },
      },
    ]),
  ],
  exports: [TaskService]
})
export class TaskModule {}
