import "./styles.css";
import { useState, useEffect } from "react";
import { Loader } from "react-feather";
import UserDetails from "./UserDetails";

const App = () => {

  const [data, setData] = useState({});
  const [status, setStatus] = useState("loading");

  // fetchData needs to be outside of the useEffect hook so that
  // it is available to to pass to UserDetails as a prop
  const fetchData = async () => {
    try {
      setStatus("loading");
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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      {status === "error" && (
        <p>"Something went wrong"</p>
      )}
      {/*The Loader component comes from the react-feather library*/}
      {status === "loading" && <Loader />}
      {status === "success" && (
        <UserDetails data={data} />
      )}
    </div>
  );
};

export default App;
