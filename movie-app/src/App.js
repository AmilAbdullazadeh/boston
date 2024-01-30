
//Components
import { useEffect, useState } from "react";
import { Logo } from "./components/Logo";


import axios from "axios";
import s from "./style.module.css";
//Img


export function App() {
  const [currentTVShow, setCurrentTVShow] = useState(null)

  const API_KEY = "246a451242f816b49952a0d3c24a27b6";
  const BASE_URL = "https://api.themoviedb.org/3/tv/popular"

  async function fetchTVShows() {
    try {
      const response = await axios(`${BASE_URL}?api_key=${API_KEY}`);
      setCurrentTVShow(response.results[0])
    } catch (err) {
      console.error('Something went wrong !')
    }
  }

  useEffect(() => {
    fetchTVShows();

    return () => console.log("Unsubscribe")
  }, [currentTVShow]);

  return (
      <div
          className={s.main_container}
      >
        <div className={s.header}>
          <div className="row">
            <div className="col-4">
              <Logo
                  title='Movie 8k'
                  subtitle='Movie 8k Movies is the best'
                  img={''}
              />
            </div>
            <div className="col-md-12 col-lg-4">
            </div>
          </div>
        </div>
        <div className={s.tv_show_details}>
        </div>
        <div className={s.recommended_shows}>
        </div>
      </div>
  );
}
