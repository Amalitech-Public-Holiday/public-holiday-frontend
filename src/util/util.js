export const generateDays = (defaultValue) => {
      const days = [];
      for (let i = 0; i < 32; i++) {
          if (i === 0) {
            days.push(<option value={defaultValue} key={0}>Any day</option>);
            continue;
          }
          const number = i <= 9 ? `0${i}` : i;
          days.push(<option value={number} key={i}>{number}</option>);
      }
      return days;
  }