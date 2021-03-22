import './App.css';
import HttpsRedirect from "react-https-redirect";
import RouteCenter from "./route/route";

function App() {
  return (
    <div>
      <HttpsRedirect>
        <RouteCenter/>
      </HttpsRedirect>
    </div>
  );
}

export default App;
