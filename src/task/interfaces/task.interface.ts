import { Priority, TaskStatus } from '../constants/task.constants';

export interface Task {
  taskID: string;
  title: string;
  description: string;
  status: TaskStatus;
  deadLine: string;
  startDate: Date;
  endDate: Date;
  priority: Priority;
  userId: string;
  categoryId: string;
  listId: string;
}
