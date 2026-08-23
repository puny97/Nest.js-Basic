import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './interface/task';

@Injectable()
export class TaskStoreService {
  public tasks: Task[] = [];

  public async addTask(task: Task): Promise<Task> {
    this.tasks.push(task);
    return task;
  }

  public async getTask(id: string): Promise<Task> {
    const task = this.tasks.filter((task) => task.uuid === id);
    if (task && task.length > 0) {
      return task[0];
    }
    throw new NotFoundException(`Task with id ${id} not found`);
  }

  public async getAllTasks(): Promise<Task[]> {
    return this.tasks;
  }

  public async deleteTask(id: string): Promise<Task[]> {
    const newTasks = this.tasks.filter((task) => task.uuid !== id);
    this.tasks = newTasks;
    return this.tasks;
  }

  public async filterTask(filter: boolean): Promise<Task[]> {
    if (!filter) {
      return this.tasks;
    }
    const newTasks = this.tasks.filter((task) => task.completed === filter);
    return newTasks;
  }
}
