import "./App.css";
import Hero from "./components/Hero";
// import NavBar from "./components/NavBar";
import AreaInteresse from "./views/AreaInteresse";
// import Home from "./views/Home";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Hero />

      <main>
        {/* <Home /> */}
				<AreaInteresse />
				<AboutMe />
      </main>
    </div>
  );
}

export default App;
