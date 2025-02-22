<div align="center">
  <h1>Dart Tools TS</h1>
  <p>
    <a href="https://npmjs.com/package/dart-tools-ts"><img src="https://img.shields.io/npm/v/dart-tools-ts" alt="NPM"></a>
    <a href="LICENSE"><img src="https://img.shields.io/github/license/its-dart/dart-tools-ts" alt="License"></a>
  </p>
</div>

[Dart](https://itsdart.com?nr=1) is Project Management powered by AI.

`dart-tools-ts` is the Dart TypeScript/JavaScript Library. It enables direct integration with Dart through TypeScript or JavaScript.


- [Installation](#installation)
- [Usage](#usage)
  - [Authentication of the Dart Client](#authentication-of-the-dart-client)
  - [Importing](#importing)
  - [Example](#example)
- [Help and Resources](#help-and-resources)
- [Contributing](#contributing)
- [License](#license)



## Installation

```sh
npm i dart-tools-ts
```


## Usage


### Authentication of the Dart Client

Visit [your Dart profile](https://app.itsdart.com/?settings=account) and save the authentication token into the `DART_TOKEN` environment variable.

### Importing

To use this package in a CommonJS (CJS) script, you can require the module with

```js
const dart = require("dart-tools-ts");
```

To use this package in an ECMAScript Module (MJS) script, you can import the module with

```ts
import * as dart from "dart-tools-ts";
```

### Example

```ts
// Get all tasks assigned to someone with a name or email like Peter
import { type PaginatedTaskList, TasksService } from "dart-tools-ts";
const filteredTasks: PaginatedTaskList = await TasksService.tasksList("Peter");

// Create a new task called 'Update the landing page' with priority 'Critical' (i.e. p0)
import { OperationModelKind, OperationKind, Priority, type TaskCreate, TransactionKind, TransactionsService } from "dart-tools-ts";

const taskCreate: TaskCreate = {
  title: "Update the landing page",
  priority: Priority.CRITICAL,
};
const createResult = await TransactionsService.transactionsCreate({
  items: [{
    kind: TransactionKind.TASK_CREATE,
    operations: [{
      kind: OperationKind.CREATE,
      model: OperationModelKind.TASK,
      data: taskCreate,
    }],
  }],
});
```


## Help and Resources

- [Homepage](https://www.itsdart.com/?nr=1)
- [Web App](https://app.itsdart.com/)
- [Help Center](https://help.itsdart.com/)
- [Bugs and Features](https://app.itsdart.com/p/r/JFyPnhL9En61)
- [Library Source](https://github.com/its-dart/dart-tools/)
- [Chat on Discord](https://discord.gg/RExv8jEkSh)
- Email us at [support@itsdart.com](mailto:support@itsdart.com)


## Contributing

Contributions are welcome! Please open an issue or submit a pull request.


## License

This project is licensed under [the MIT License](LICENSE).
