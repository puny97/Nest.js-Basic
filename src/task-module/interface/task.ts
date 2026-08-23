export interface Task {
  uuid?: string;
  name: string;
  completed?: boolean;
  description?: string;
  duration?: number;
  owner?: string;
}
