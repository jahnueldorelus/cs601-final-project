import anime from "./components/anime/index.js";
import appFooter from "./components/app-footer/index.js";
import appHeader from "./components/app-header/index.js";
import home from "./components/home/index.js";
import music from "./components/music/index.js";
import personalProjects from "./components/personal-projects/index.js";
import education from "./components/education/index.js";
import { routes } from "./routes.js";

// The Vue instance
new Vue({
  el: "#app",
  data: {
    pathname: routes.home,
    routes,
  },
  components: {
    "app-header": appHeader,
    "app-footer": appFooter,
    home: home,
    music: music,
    "personal-projects": personalProjects,
    anime: anime,
    education: education,
  },
  methods: {
    setNewPathName(newPath) {
      this.pathname = newPath;
    },
  },
});
