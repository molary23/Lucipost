import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (value, name) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(name, jsonValue);
  } catch (error) {
    console.log(`Error Saving ${name}`, error);
  }
};

export const loadData = async (name) => {
  try {
    const value = await AsyncStorage.getItem(name);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (error) {
    console.log(`Error Loading ${name}`, error);
  }
};
