import storage from '@react-native-async-storage/async-storage';
import {errorHandler} from '../../shared/utils/errorHandler';

type Key = 'TOKEN';

class AsyncStorage {
  static async getItem(key: Key) {
    try {
      let value = await storage.getItem(key);
      if (value?.includes('{') || value?.includes('[')) {
        value = JSON.parse(value);
      }
      return value;
    } catch (error) {
      errorHandler(error);
    }
  }

  static async setItem(key: Key, value: any) {
    try {
      if (typeof value === 'object') {
        value = JSON.stringify(value);
      }
      return await storage.setItem(key, value);
    } catch (error) {
      errorHandler(error);
    }
  }
}

export default AsyncStorage;
