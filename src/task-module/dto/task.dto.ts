import { IsBoolean, IsDefined, IsString, IsUUID } from 'class-validator';

export class TaskDto {
  @IsDefined()
  @IsString()
  name!: string;
}

export class ParamDto {
  @IsDefined()
  @IsUUID()
  id!: string;
}

export class QueryParamDto {
  @IsDefined()
  @IsBoolean()
  filter!: boolean;
}
