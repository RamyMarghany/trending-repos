// Components
import { AppRouter } from "./components/molecules/AppRouter/AppRouter";
import { Navigation } from "./components/molecules/Navigation/Navigation";
// Style
import "./App.css";
function App() {
  return (
    <>
      <Navigation />
      <AppRouter />
    </>
  );
}

export default App;
