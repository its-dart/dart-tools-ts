// Get all tasks assigned to someone with a name or email like Peter
import { type PaginatedTaskList, TasksService } from "dart-tools-ts";
const tasks: PaginatedTaskList = await TasksService.tasksList("Peter");
console.log("Peter's tasks:");
if (tasks.results.length) {
  tasks.results.forEach((task) => {
    console.log(
      `DUID: ${task.duid}, Priority: ${task.priority}, Title: ${task.title}`
    );
  });
} else {
  console.log("No tasks found");
}

// Create a new task called 'Update the landing page' with priority 'Critical' (i.e. p0)
import {
  OperationModelKind,
  OperationKind,
  Priority,
  type TaskCreate,
  TransactionKind,
  TransactionsService,
} from "dart-tools-ts";

const taskCreate: TaskCreate = {
  title: "Update the landing page",
  priority: Priority.CRITICAL,
};
const response = await TransactionsService.transactionsCreate({
  items: [
    {
      kind: TransactionKind.TASK_CREATE,
      operations: [
        {
          kind: OperationKind.CREATE,
          model: OperationModelKind.TASK,
          data: taskCreate,
        },
      ],
    },
  ],
});
console.log("Create task response:");
console.log(response);
