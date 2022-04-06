import Header from "./component/Header";
import Trending from "./component/Trending";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Popular from "./component/Popular";
import AnimeList from "./component/AnimeList";
import AnimePanel from "./component/AnimePanel";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./MainRouter";
import AnimeProvider from "./component/store/AnimeProvider";

function App() {
  return (
    <div>
     <AnimeProvider>
    <BrowserRouter>
      <MainRouter/>
    </BrowserRouter>
    </AnimeProvider>
    </div>
  );
}

export default App;
