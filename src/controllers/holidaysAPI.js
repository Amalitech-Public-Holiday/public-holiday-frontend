export const getHolidays = (queryString) => {
    try {
        const response = fetch(
          `https://holidays.abstractapi.com/v1/?api_key=8b5a95ad022b47939ec50054a90d651c${queryString}`
        );
        return response.json();
    } catch(error) {
        console.log(error);
    }
}