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
        const response = await request.json();
        console.log(response);
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
