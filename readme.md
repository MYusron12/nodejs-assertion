# Node.js Assertion Example

This repository demonstrates how to use assertions in Node.js applications for writing unit tests using Mocha and Chai.

## Installation

Clone the repository:

```bash
git clone https://github.com/MYusron12/nodejs-assertion.git
cd nodejs-assertion
```

Install dependencies:

```bash
npm install
```

## Usage

Run the tests:

```bash
npm test
```

This command will run the Mocha tests located in the `test/` directory.

## Project Structure

```
nodejs-assertion/
│
├── src/
│   ├── math.js
│   └── string.js
│
├── test/
│   ├── math.test.js
│   └── string.test.js
│
├── package.json
└── README.md
```

- **src/**: Contains modules (`math.js`, `string.js`) with functions to be tested.
- **test/**: Contains Mocha test files (`math.test.js`, `string.test.js`) for testing respective modules.
- **package.json**: Includes dependencies (`mocha`, `chai`) and test scripts.

## Technologies Used

- Node.js
- Mocha: JavaScript test framework
- Chai: Assertion library for Node.js

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```

```
