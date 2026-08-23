import { Injectable } from '@nestjs/common';
import { TaskStoreService } from './task-store.service';
import { Task } from './interface/task';

@Injectable()
export class TaskService {
  constructor(private readonly taskStoreService: TaskStoreService) {}

  public async addTask(task: Task): Promise<Task> {
    task.uuid = crypto.randomUUID();
    task.completed = false;
    task.description = '';
    task.duration = 2;
    task.owner = '';
    return await this.taskStoreService.addTask(task);
  }

  public async getTask(id: string): Promise<Task> {
    return await this.taskStoreService.getTask(id);
  }

  public async getAllTasks(): Promise<Task[]> {
    return await this.taskStoreService.getAllTasks();
  }

  public async deleteTask(id: string): Promise<Task[]> {
    return await this.taskStoreService.deleteTask(id);
  }

  public async filterTask(filter: boolean): Promise<Task[]> {
    return await this.taskStoreService.filterTask(filter);
  }
}
