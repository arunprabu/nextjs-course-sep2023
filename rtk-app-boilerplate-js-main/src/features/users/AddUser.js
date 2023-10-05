import { useDispatch } from "react-redux";
import { addUserAsync } from "./usersSlice";

const AddUser = () => {
  // TODO: Learn more about react-hook-form
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Read form data using react-hook-form
    // mock form data
    const dummyFormData = {
      name: "John",
      email: "j@k.com",
      phone: 32456723546,
    };
    console.log(dummyFormData);

    // call dispatch with addUserAsync(dummyFormData)
    dispatch(addUserAsync(dummyFormData));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nameInput" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" id="nameInput" />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneInput" className="form-label">
            Phone
          </label>
          <input type="text" className="form-control" id="phoneInput" />
        </div>
        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">
            Email address
          </label>
          <input type="email" className="form-control" id="emailInput" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddUser;