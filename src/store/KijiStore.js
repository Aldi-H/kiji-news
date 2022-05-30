import create from "zustand";
import axios from "axios";
import { devtools } from "zustand/middleware";

const useKijiStore = create(
  devtools((set) => ({
    kijis: [],

    getAllData: async () => {
      const response = await axios.get(
        `https://kiji-news-api.herokuapp.com/articles/index`,
        { withCredentials: false },
      );

      set({
        kijis: await response.data.articles,
      });
    },
  })),
);

export default useKijiStore;
