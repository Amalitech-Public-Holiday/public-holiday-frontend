import "./DashboardResults.scss";

const DashboardResults = (props) => {
  return (
    <div className="DashboardResults">
      <div className="HolidaysList">
        {props.children}
      </div>
    </div>
  );
}

export default DashboardResults;