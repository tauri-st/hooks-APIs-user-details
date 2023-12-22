import "./styles.css";
import { useState, useEffect } from "react";
import { Loader } from "react-feather";
import UserDetails from "./UserDetails";

const App = () => {

  const [data, setData] = useState({});
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await fetch("https://randomuser.me/api/");
        // Check out what request gives before extracting JSON 
        // to see the status of the request, looking for
        // request.status = 200 success status
        console.log(request);
        const {results} = await request.json();
        if (request.status === 200) {
          setData(results[0]);
          setStatus("success");
        }
        console.log(data);
        //console.log(results[0]);
      } catch (error) {
        console.log("Oh no something went wrong!", error);
        setStatus("error");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <UserDetails />
    </div>
  );
};

export default App;
