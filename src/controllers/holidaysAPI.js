import axios  from "axios";

export const getHolidays = (queryString) => {
    const BASE_URL =
      "https://holidays.abstractapi.com/v1/?api_key=7a77b0e55d6649a99d99ec720c3e549a";
      try {
        const response = axios.get(`${BASE_URL}${queryString}`);
        return response;
    } catch(error) {
        console.log(error);
    }
}