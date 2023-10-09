import EmployeesList from "./list";
import NewEmployee from "./new";

export default function Employees() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <h1>Employees Home Page</h1>
      <div>
        <NewEmployee />
      </div>

      <div>
        <EmployeesList />
      </div>
    </div>
  );
}
