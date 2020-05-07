const axios = require('axios');

export const getAllEmployee = async (id) => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BASEURL}/api/v1/employees`);
    return res.data;
    } catch (error) {
      alert('get 에러' + JSON.stringify(error.response));
      console.log(error);
    }
};

export const getOneEmployee = async (id) => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BASEURL}/api/v1/employees/${id}`);
    return res.data;
    } catch (error) {
      alert('get 에러' + JSON.stringify(error.response));
      console.log(error);
    }
};

export const createOneEmployee = async (id) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BASEURL}/api/v1/employees/${id}`);
    return res.data;
    } catch (error) {
      alert('get 에러' + JSON.stringify(error.response));
      console.log(error);
    }
};