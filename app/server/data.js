let instance = null;

let data = {};

class DataManager {
  constructor(){
    if(!instance){
      instance = this;
    }

    return instance;
  }

  getData(){
    return data;
  }

  setData(newData){
    data = { ...data, ...newData};
  }

  removeData(key){
    delete data[key];
  }
}

export default new DataManager();