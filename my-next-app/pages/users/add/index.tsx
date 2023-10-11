import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function AddUser() {
  const {register, handleSubmit } = useForm();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  
  const handleAddUser = (data: any) => {
    setIsLoading(true);
    console.log(data);
    // this data should be saved by hitting REST API
    // 1. What's the REST API URL? /api/users
    // 2. What's the HTTP Method? POST
    // 3. What's the REST API Client? fetch
    fetch("/api/users", {
      method: "POST",
      body: JSON.stringify(data), // we need to JSON data
      headers: {
        // req header
        "Content-type": "application/json", // sending the data in json
      },
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((resInJson) => {
        console.log(resInJson);
        setIsSaved(true);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      })
      .finally(() => {
        console.log("It is over!");
        setIsLoading(false);
      });
  }

  return (
    <div className="ps-5">
      <h1 className="text-base font-semibold leading-7 text-gray-900">
        Add User
      </h1>
      {isError && (
        <div className="bg-red-500 text-sm text-white rounded-md p-4">
          <h4>Some Error Occurred. try again later!</h4>
        </div>
      )}

      {isSaved && (
        <div className="bg-green-500 text-sm text-white rounded-md p-4">
          <h4>Saved Successfully!</h4>
        </div>
      )}

      <form onSubmit={handleSubmit(handleAddUser)}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="nameInput"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Enter name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    {...register("name")}
                    id="nameInput"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="phoneInput"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Enter Phone
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    {...register("phone")}
                    id="phoneInput"
                    autoComplete="phone-number"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="emailInput"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Enter Email address
                </label>
                <div className="mt-2">
                  <input
                    id="emailInput"
                    {...register("email")}
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-4 mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {isLoading ? "Submitting..." : "Save"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
