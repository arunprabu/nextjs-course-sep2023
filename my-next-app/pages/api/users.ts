// api url: /api/users
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id?: number;
  name?: string;
  phone?: string;
  email?: string;
  status: string
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  // reading res object
  console.log(req); // log will appear in command prompt console
  // Http Method
  console.log(req.method);
  // We can also get form data if the method is post
  console.log(req.body); 

  // for url param and query param -- try req.params and req.query

  switch (req.method) {
    case "GET": // read
      res.json({ status: "NOT IMPLEMENTED" });
      break;

    case "POST": // create
      // connect to the database (oracle, mysql, postgresql, maria db, mongodb)
      // execute db query 
      // save the data (req.body)
      // process the res 
      res.status(201).json({
        id: 11,
        ...req.body,
      });

    case "PUT": // update -- you can also use PATCH
      res.json({ status: "NOT IMPLEMENTED" });
      break;

    case "DELETE": // delete
      res.json({ status: "NOT IMPLEMENTED" });
      break;

    default:
      res.json({ status: "NOT IMPLEMENTED" });
      break;
  }
 
}
