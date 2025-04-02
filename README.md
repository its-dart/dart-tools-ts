<div align="center">
  <h1>Dart Tools</h1>
  <p>
    <a href="https://npmjs.com/package/dart-tools"><img src="https://img.shields.io/npm/v/dart-tools" alt="NPM"></a>
    <a href="LICENSE"><img src="https://img.shields.io/github/license/its-dart/dart-tools-ts" alt="License"></a>
  </p>
</div>

[Dart](https://itsdart.com?nr=1) is Project Management powered by AI.

`dart-tools` is the Dart TypeScript/JavaScript Library. It enables direct integration with Dart through TypeScript or JavaScript.

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
npm i dart-tools
```

## Usage

### Authentication of the Dart Client

Visit [your Dart profile](https://app.itsdart.com/?settings=account) and save the authentication token into the `DART_TOKEN` environment variable.

### Importing

To use this package in a CommonJS (CJS) script, you can require the module with

```js
const dart = require("dart-tools");
```

To use this package in an ECMAScript Module (MJS) script, you can import the module with

```ts
import * as dart from "dart-tools";
```

### Example

```ts
// Get all critical tasks
import { TaskService, PaginatedConciseTaskList } from "dart-tools";
const filteredTasks: PaginatedConciseTaskList = await TaskService.listTasks({
  priority: "Critical",
});

// Create a new task called 'Update the landing page' with priority 'Critical' (i.e. p0)
import { TaskService, WrappedTask } from "dart-tools";
const task: WrappedTask = await TaskService.createTask({
  item: {
    title: "Update the landing page",
    priority: "Critical",
  },
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
