//Components
import { useEffect, useState } from "react";

import { TVShowAPI } from "./api/tv-shows";
import logo from "./assets/img/Screen Shot 2023-03-29 at 17.54.26.png";
import { Logo } from "./components/Logo";
import { TVShowDetail } from "./components/TVShowDetail";
import { BACKDROP_BASE_URL, SMALL_IMG_COVER_BASE_URL } from "./config";
import s from "./style.module.css";


export function App() {
  const [currentTVShow, setCurrentTVShow] = useState(null)
  const [tvShowList, setTVShowList] = useState(null)
  // tvShowList = []

  async function fetchTVShows() {
    try {
      const response = await TVShowAPI.popularTVShows()
      fetchRecoTVSHows(response[0].id);
      setCurrentTVShow(response[0]);
    } catch (err) {
      console.error("Something went wrong !");
    }
  }

  async function fetchRecoTVSHows(id) {
    try {
      const response = await TVShowAPI.tvShowsRecommendations(id)
      setTVShowList(response.slice(0, 10))
    } catch (err) {
      console.error("Something went wrong !");
    }
  }

  useEffect(() => {
    fetchTVShows();

    return () => console.log("Unsubscribe");
  }, []);

    useEffect(() => {
      if (currentTVShow) {
        fetchRecoTVSHows(currentTVShow.id)
      }

      return () => console.log("Unsubscribe");
    }, [currentTVShow]);

  async function updateTVShow(tvShow) {
    setCurrentTVShow(tvShow);
  }

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
          <div className="col-md-12 col-lg-4">{/* SearchBar */}</div>
        </div>
      </div>
      <div className={s.tv_show_details}>
        {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
      </div>
      {/* tvshow list => recommendations */}
      <div className={s.recommended_shows}>
        <div>
          <div className={s.title}>You'll probably like :</div>
          <div className={s.list}>
            {tvShowList && tvShowList.map((item) => (
              <span className={s.tv_show_item}>
                <div className={s.container}>
                  <img
                    alt={item.name}
                    src={SMALL_IMG_COVER_BASE_URL + item.poster_path}
                    className={s.img}
                    onClick={() => updateTVShow(item)}
                  />
                  <div className={s.title}>{item.name}</div>
                </div>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
