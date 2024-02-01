//Components
import { useEffect, useState } from "react";

import { TVShowAPI } from "./api/tv-shows";
import logo from "./assets/img/Screen Shot 2023-03-29 at 17.54.26.png";
import { Logo } from "./components/Logo";
import { TVShowDetail } from "./components/TVShowDetail";
import { BACKDROP_BASE_URL } from "./config";
import s from "./style.module.css";


export function App() {
  const [currentTVShow, setCurrentTVShow] = useState(null)

  async function fetchTVShows() {
    try {
      const response = await TVShowAPI.popularTVShows()
      setCurrentTVShow(response[0]);
    } catch (err) {
      console.error("Something went wrong !");
    }
  }

  useEffect( () => {
   fetchTVShows()

   return () => console.log("Unsubscribe")
  }, []);

  return (
    <div
      className={s.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
             url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <Logo
              img={logo}
              title="Movie Site"
              subtitle="The best movie site"
            />
          </div>
          <div className="col-md-12 col-lg-4">
            {/* SearchBar */}
          </div>
        </div>
      </div>
      <div className={s.tv_show_details}>
        {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
      </div>
      <div className={s.recommended_shows}>
        {/* TVShowList */}
      </div>
    </div>
  );
}
