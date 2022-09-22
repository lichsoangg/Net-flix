import Contents from "./components/Contents/Contents";
import {GlobalStyles} from "./components/GlobalStyle";
import Intro from "./components/Intro/Intro";
import Menu from "./components/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <GlobalStyles></GlobalStyles>
      <Navbar />
      <Intro />
      <Contents />
      <Menu />
    </div>
  );
}

export default App;
