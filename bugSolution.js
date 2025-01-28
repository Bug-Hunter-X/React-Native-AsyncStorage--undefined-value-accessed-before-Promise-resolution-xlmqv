The solution involves using the `.then()` method of the Promise returned by `AsyncStorage.getItem()` to handle the asynchronous operation.  This ensures that the value is accessed only after it has been retrieved successfully.

Alternatively, `async/await` can be used for cleaner asynchronous code.

```javascript
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error('Error storing data:', e);
  }
};

const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    console.error('Error retrieving data:', e);
  }
};

// Example usage:
const myData = await getData('myKey');
console.log('Data:', myData);
```