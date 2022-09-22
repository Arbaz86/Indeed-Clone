const getLocalData = (key) => {
  if (key) {
    var data = localStorage.getItem(key);
    data = JSON.parse(data);
    return data;
  }
};

const saveLocalData = (key, value) => {
  if (key && value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export { getLocalData, saveLocalData };
