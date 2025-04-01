// Get all critical tasks
import { TaskService, PaginatedConciseTaskList, WrappedTask } from "dart-tools-ts";
const tasks: PaginatedConciseTaskList = await TaskService.listTasks({
  priority: "Critical",
});
console.log("All critical tasks:");
if (tasks.results.length) {
  tasks.results.forEach((task) => {
    console.log(`ID: ${task.id}, Priority: ${task.priority}, Title: ${task.title}`);
  });
} else {
  console.log("No tasks found");
}

// Create a new task called 'Update the landing page' with priority 'Critical' (i.e. p0)
const task: WrappedTask = await TaskService.createTask({
  item: {
    title: "Update the landing page",
    priority: "Critical",
  },
});
console.log("Create task details:");
console.log(`ID: ${task.item.id}, Priority: ${task.item.priority}, Title: ${task.item.title}`);
