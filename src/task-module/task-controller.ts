import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseBoolPipe,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TaskService } from './task.service';
import type { Task } from './interface/task';
import { ParamDto, QueryParamDto, TaskDto } from './dto/task.dto';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getAllTasks(): Promise<Task[]> {
    return await this.taskService.getAllTasks();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async createTask(@Body() task: TaskDto): Promise<Task> {
    return await this.taskService.addTask(task);
  }

  @Get('filter/data')
  @UsePipes(new ValidationPipe())
  async filterTaskById(
    @Query('filter', ParseBoolPipe) filter: boolean,
  ): Promise<Task[]> {
    const data = await this.taskService.filterTask(filter);
    return data;
  }

  @Get(':id')
  @UsePipes(new ValidationPipe())
  async getTaskById(@Param() param: ParamDto): Promise<Task> {
    const data = await this.taskService.getTask(param.id);
    return data;
  }

  @Delete(':id')
  @UsePipes(new ValidationPipe())
  async deleteTaskById(@Param() param: ParamDto): Promise<Task[]> {
    const data = await this.taskService.deleteTask(param.id);
    return data;
  }
}
