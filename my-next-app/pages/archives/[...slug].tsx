import { NextRouter, useRouter } from "next/router"

// this is a demo of catch-all route -- Refer the file name has ...
export default function Archive() {
  // read the url param, query param
  const router: NextRouter = useRouter();
  // console.log(router);

  // hit the rest api
  // this should be your landing page for all the following urls
  // archives/2023, archives/2023/10, archives/2023/10/30
  console.log(router.query);
  console.log(router.query.slug); // will be an array for the above urls

  const handleGoBack = () => {
    router.push({
      pathname: '/archives'
    });
  }

  const handleGotoYear = () => {
    router.push({
      pathname: "/archives/[year]",
      query: {
        year: '2022'
      }
    });
  }

  return (
    <div>
      <h1>Archives by Year, month and date</h1>
      <p>{router.query.slug}</p>
      <button
        type="button"
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={handleGoBack}
      >
        Go Back
      </button>

      <button type="button"
      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={handleGotoYear}>Go to Year 2022</button>
    </div>
  );
}
