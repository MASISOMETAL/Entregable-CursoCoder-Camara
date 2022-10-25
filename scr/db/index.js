import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase("photo.db");

export const init = () => {
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "CREATE TABLE IF NOT EXISTS photo (id INTEGER PRIMARY KEY NOT NULL, image TEXT NOT NULL);",
          [],
          () => resolve(),
          (_, err) => reject(err)
        );
      });
    });
  
    return promise;
  };

  export const insertPhoto = (image) => {
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "INSERT INTO photo (image) VALUES (?);",
          [image],
          (_, result) => resolve(result),
          (_, err) => reject(err)
        );
      });
    });
  
    return promise;
  };
  
  export const getPhoto = () => {
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT * FROM photo",
          [],
          (_, result) => resolve(result),
          (_, err) => reject(err)
        );
      });
    });
  
    return promise;
  };