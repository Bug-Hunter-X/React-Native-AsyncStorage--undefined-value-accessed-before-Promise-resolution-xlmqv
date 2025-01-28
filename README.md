# React Native AsyncStorage: undefined value accessed before Promise resolution

This repository demonstrates a common error in React Native when working with AsyncStorage: accessing the stored value before the asynchronous operation completes.  This results in an undefined value being used, leading to unexpected behavior or crashes.

The `bug.js` file shows the erroneous code, while `bugSolution.js` provides a corrected version using Promises and async/await.

## How to reproduce:

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run the app on an emulator or device.
4. Observe the console logs. The `bug.js` version will show an error because the value is undefined, while `bugSolution.js` will correctly display the stored value.