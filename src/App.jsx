import brilliancyIcon from "./assets/brilliancyicon.png";
import "./App.css";
import Clock from "./component/Clock.jsx";

function App() {
  return (
    <div
      style={
        {
          // display: "flex",
          // justifyContent: "space-around",
          // flexDirection: "column",
        }
      }
    >
      <img src={brilliancyIcon} className="logo" alt="Brillancy Logo" />
      <div>
        <h1>Brilliancy Cloud</h1>
        <h2>Coming Soon!</h2>
        <div>
          <Clock />
        </div>
      </div>
    </div>
  );
}

export default App;
