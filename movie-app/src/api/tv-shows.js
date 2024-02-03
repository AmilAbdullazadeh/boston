import axios from "axios";
import { API_KEY, BASE_URL } from "../config";

export class TVShowAPI {

    static async popularTVShows() {
      const response = await axios(
        `${BASE_URL}/tv/popular?api_key=${API_KEY}`
      );
      return response.data.results
    }

  static async tvShowsRecommendations(tv_id) {
      const response = await axios(
        `${BASE_URL}/tv/${tv_id}/recommendations?api_key=${API_KEY}`
      );
      return response.data.results
    }

    static async tvShowsByTitle(title) {
    }

}
