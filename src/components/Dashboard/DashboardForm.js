const DashboardForm = () => {
    return (
      <div>
        <select name="country">
          <option selected>All countries</option>
          <option value="GH">Ghana</option>
          <option value="DE">Germany</option>
          <option value="RW">Rwanda</option>
        </select>
      </div>
    );
}

export default DashboardForm;