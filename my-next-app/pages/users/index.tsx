export default function Users(props: any) {
  console.log(props);

  return (
    <div className="pt-5 ps-5">
      <h1>Listing Users (SSR)</h1>
      <ul role="list" className="divide-y divide-gray-100">
        {props.users.map((user: any) => {
          return (
            <li className="flex justify-between gap-x-6 py-5" key={user.id}>
              <div className="flex min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {user.name}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    Email: {user.email}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    Phone: {user.phone}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
        
      </ul>
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await res.json()
 
  // Pass data to the page via props
  return { props: { users } }
}