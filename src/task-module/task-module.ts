import { Module } from '@nestjs/common';
import { TaskStoreService } from './task-store.service';
import { TaskService } from './task.service';
import { TaskController } from './task-controller';

@Module({
  imports: [],
  controllers: [TaskController],
  providers: [TaskService, TaskStoreService],
})
export class TaskModule {}
