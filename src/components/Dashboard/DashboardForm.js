const DashboardForm = () => {
    return (
      <div>
        <select name="country">
          <option selected>All countries</option>
          <option value="GH">Ghana</option>
          <option value="DE">Germany</option>
          <option value="RW">Rwanda</option>
        </select>
        <select name="year">
          <option value="2022" selected>2022</option>
          <option value="2023">2023</option>s
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
      </div>
    );
}

export default DashboardForm;