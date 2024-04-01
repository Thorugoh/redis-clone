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
}

export default new DataManager();