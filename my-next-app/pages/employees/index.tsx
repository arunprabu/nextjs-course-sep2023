import EmployeesList from "./list";
import NewEmployee from "./new";

export default function Employees() {
  return (
    <div>
      <h1>Employees Home Page</h1>
      <div>
        <NewEmployee />
      </div>

      <div>
        <EmployeesList />
      </div>
    </div>
  )
}
