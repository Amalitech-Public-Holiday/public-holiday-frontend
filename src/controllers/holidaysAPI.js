export const getHolidays = (queryString) => {
    try {
        const response = fetch(`https://holidays.abstractapi.com/v1/?${process.env.REACT_APP_API_KEY}&${queryString}`);
        return response.json();
    } catch(error) {
        console.log(error);
    }
}