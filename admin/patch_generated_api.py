#!/usr/bin/env python3
"""
This Python script automates the process of patching generated API files by comparing two directories: one containing files generated without the `--useOptions` flag and another with the flag enabled.
It selectively applies differences for specific target functions.

Below is an example of the diff for the `/dart/generated/services/TaskService.ts` file consumed by `make_function_selective_diff` function:

--- a/dart/generated/services/TaskService.ts
+++ b/dart/generated-with-options/services/TaskService.ts
@@ -16 +15,0 @@ export class TaskService {
-   * @param requestBody
@@ -20 +19,3 @@ export class TaskService {
-  public static createTask(
+  public static createTask({
+    requestBody,
+  }: {
@@ -22 +23 @@ export class TaskService {
-  ): CancelablePromise<WrappedTask> {
+  }): CancelablePromise<WrappedTask> {
@@ -33 +33,0 @@ export class TaskService {
-   * @param id
@@ -37 +37,3 @@ export class TaskService {
-  public static retrieveTask(
+  public static retrieveTask({
+    id,
+  }: {
@@ -39 +41 @@ export class TaskService {
-  ): CancelablePromise<WrappedTask> {
+  }): CancelablePromise<WrappedTask> {
@@ -54,2 +55,0 @@ export class TaskService {
-   * @param id
-   * @param requestBody
@@ -59 +59,4 @@ export class TaskService {
-  public static updateTask(
+  public static updateTask({
+    id,
+    requestBody,
+  }: {
@@ -62 +65 @@ export class TaskService {
-  ): CancelablePromise<WrappedTask> {
+  }): CancelablePromise<WrappedTask> {
@@ -79 +81,0 @@ export class TaskService {
-   * @param id
@@ -83 +85,3 @@ export class TaskService {
-  public static deleteTask(
+  public static deleteTask({
+    id,
+  }: {
@@ -85 +89 @@ export class TaskService {
-  ): CancelablePromise<WrappedTask> {
+  }): CancelablePromise<WrappedTask> {
@@ -98,22 +101,0 @@ export class TaskService {
-   * @param assignee
-   * @param assigneeDuid
-   * @param dartboard
-   * @param dartboardDuid
-   * @param description
-   * @param dueAtAfter
-   * @param dueAtBefore
-   * @param duids Filter by DUIDs
-   * @param inTrash
-   * @param isDraft
-   * @param kind
-   * @param limit Number of results to return per page.
-   * @param offset The initial index from which to return the results.
-   * @param priority
-   * @param size
-   * @param startAtAfter
-   * @param startAtBefore
-   * @param status
-   * @param statusDuid
-   * @param subscriberDuid
-   * @param tag
-   * @param title
@@ -123 +105,24 @@ export class TaskService {
-  public static listTasks(
+  public static listTasks({
+    assignee,
+    assigneeDuid,
+    dartboard,
+    dartboardDuid,
+    description,
+    dueAtAfter,
+    dueAtBefore,
+    duids,
+    inTrash,
+    isDraft,
+    kind,
+    limit,
+    offset,
+    priority,
+    size,
+    startAtAfter,
+    startAtBefore,
+    status,
+    statusDuid,
+    subscriberDuid,
+    tag,
+    title,
+  }: {
@@ -130,0 +136,3 @@ export class TaskService {
+    /**
+     * Filter by DUIDs
+     */
@@ -134,0 +143,3 @@ export class TaskService {
+    /**
+     * Number of results to return per page.
+     */
@@ -135,0 +147,3 @@ export class TaskService {
+    /**
+     * The initial index from which to return the results.
+     */
@@ -146 +160 @@ export class TaskService {
-  ): CancelablePromise<PaginatedConciseTaskList> {
+  }): CancelablePromise<PaginatedConciseTaskList> {
"""

import os
import sys
import subprocess
import tempfile


FILES_TO_PATCH: dict[str, list[str]] = {"services/TaskService.ts": ["listTasks"]}


def make_function_selective_diff(diff: str, target_function_names: list[str]) -> str:
    diff_lines = diff.splitlines()
    selective_diff = []

    finalized_func_diff_count = 0
    func_diff_start = None
    func_diff_end = None
    is_func_detected = False

    for idx, line in enumerate(diff_lines):
        prev_line = diff_lines[idx - 1] if idx > 0 else ""
        if line.startswith("---") or line.startswith("+++"):
            selective_diff.append(line)
            continue
        if line.startswith("@@ -") and is_func_detected and func_diff_start and func_diff_end:
            selective_diff.extend(diff_lines[func_diff_start:idx])
            finalized_func_diff_count += 1
            func_diff_end = None
            func_diff_start = None
            is_func_detected = False
        elif line.startswith("-   * @param") and prev_line.startswith("@@ -"):
            func_diff_start = idx - 1
        elif line.startswith(f"+  public static "):
            for func_name in target_function_names:
                if line.startswith(f"+  public static {func_name}({{") and prev_line.startswith(
                    f"-  public static {func_name}("
                ):
                    is_func_detected = True
                    break
        elif is_func_detected and line.startswith("+  }): ") and prev_line.startswith("-  ): "):
            func_diff_end = idx

    if is_func_detected and func_diff_start and func_diff_end:
        finalized_func_diff_count += 1
        selective_diff.extend(diff_lines[func_diff_start:])
    selective_diff.append("\n")

    if finalized_func_diff_count != len(target_function_names):
        sys.exit(f"Error: Expected {len(target_function_names)} function diffs, but found {finalized_func_diff_count}.")

    return "\n".join(selective_diff)


def main():
    if len(sys.argv) != 3:
        print("Usage: python patch_generated_api.py <path_to_generated_api> <path_to_generated_with_options_api>>")
        sys.exit(1)

    generated_dir = sys.argv[1]
    generated_with_options_dir = sys.argv[2]

    for target_file_path, target_function_names in FILES_TO_PATCH.items():
        print(f"Processing {target_file_path}")
        file_to_patch = os.path.join(generated_dir, target_file_path)
        file_generated_with_options = os.path.join(generated_with_options_dir, target_file_path)

        for path in (file_to_patch, file_generated_with_options):
            if not os.path.exists(path):
                sys.exit(f"File {path} does not exist")

        try:
            result = subprocess.run(
                ["git", "diff", "--no-index", "--unified=0", file_to_patch, file_generated_with_options],
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE,
                text=True,
            )
            if result.returncode not in (0, 1):  # 0: no diff, 1: diff found
                sys.exit(f"Error running git diff: {result.stderr.strip()}")

            function_selective_diff = make_function_selective_diff(result.stdout, target_function_names)
            with tempfile.NamedTemporaryFile(delete=False, suffix=".patch") as temp_patch_file:
                temp_patch_file.write(function_selective_diff.encode())
                temp_patch_file_path = temp_patch_file.name

            try:
                subprocess.run(
                    ["patch", file_to_patch, temp_patch_file_path],
                    check=True,
                    text=True,
                )
                print(f"Patch applied successfully to {file_to_patch}")
            except subprocess.CalledProcessError as e:
                sys.exit(f"Failed to apply patch to {file_to_patch}: {e}")
            finally:
                os.remove(temp_patch_file_path)
        except subprocess.CalledProcessError as e:
            sys.exit(f"Error running git diff: {e}")


if __name__ == "__main__":
    main()
