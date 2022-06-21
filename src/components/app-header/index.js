import { routes } from "../../routes.js";

export default Vue.component("navigation", {
  template: `
    <header>
      <nav class="app-container-width">
        <ul>
          <li><h3 @click="setNewPathName('${routes.home}')">Home</h3></li>
          <li><h3 @click="setNewPathName('${routes.music}')">Music</h3></li>
          <li><h3 @click="setNewPathName('${routes.personalProjects}')">Personal Projects</h3></li>
          <li><h3 @click="setNewPathName('${routes.anime}')">Anime</h3></li>
          <li><h3 @click="setNewPathName('${routes.education}')">Education</h3></li>
        </ul>
      </nav>
    </header>
  `,
  props: {
    setNewPathName: Function,
  },
});
