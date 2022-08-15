import "./HolidayItem.scss";

const HolidayItem = (props) => {
    return(
        <div className="HolidayItem">
          <p><span>Name: </span>{props.data.name}</p>
          <p><span>Country: </span>{props.data.country}</p>
          <p><span>Type: </span>{props.data.type}</p>
          <p><span>Date: </span>{props.data.date}</p>
          <p><span>Country: </span>{props.data.country}</p>
          <p><span>Weekday: </span>{props.data.week_day}</p>
        </div>
    );
}

export default HolidayItem;