import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://54.147.187.88:8000") // replace <EC2_PUBLIC_IP> with your backend IP
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Error connecting to API"));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React + FastAPI Demo</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
