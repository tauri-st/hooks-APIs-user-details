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
        const {results} = await request.json();
        console.log(results[0]);
      } catch (error) {
        console.log("Oh no something went wrong!", error)
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
