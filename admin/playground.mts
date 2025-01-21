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

// Set up some utilities
const DUID_CHARS = Array.from(Array(26).keys())
  .map((i) => String.fromCharCode(i + 65))
  .concat(Array.from(Array(26).keys()).map((i) => String.fromCharCode(i + 97)))
  .concat(Array.from(Array(10).keys()).map((i) => `${i}`))
  .sort();
export const randomSample = <T,>(arr: T[], k = 1): T[] =>
  Array.from(Array(k), () => arr[Math.floor(Math.random() * arr.length)]);
export const makeDuid = () => randomSample(DUID_CHARS, 12).join("");

const clientDuid = makeDuid();

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
  duid: makeDuid(),
  title: "Update the landing page",
  priority: Priority.CRITICAL,
};
const response = await TransactionsService.transactionsCreate({
  items: [
    {
      duid: makeDuid(),
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
  clientDuid,
});
console.log("Create task response:");
console.log(response);
