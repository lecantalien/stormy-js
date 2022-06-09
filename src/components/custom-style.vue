<template>
  <div className="custom-style">
    <!-- your code here :) -->
    <div ref="styleWrapper"
         className="style-wrapper"></div>
  </div>
</template>

<script>
import ThemesService from "@/services/ThemesService";
import {ToastService} from "@/mixins/ToastService";

export default {
  name: "custom-style",
  mixins: [ToastService],
  props: {},
  data() {
    return {
      d: null,
      themesService: ThemesService,
      // css content
      cssContent: undefined,
      // last state
      currentTheme: null,
    }
  },
  watch: {
    currentUser: {
      handler(newValue) {
        console.log('currentUser', newValue);
        this.changeTheme(newValue?.customStyle);
      },
      deep: true,
      immediate: true,
    },
    /*/
    // Version non deep
    currentUser(newValue){
      console.log('currentUser', newValue);
      this.changeTheme(newValue?.customStyle);
    }//*/
  },
  computed: {
    currentUser() {
      return this.$store.getters.getUser;
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    updateTheme() {
      let divContent = this.$refs.styleWrapper;
      divContent.innerHTML = '<style>'
          + this.cssContent + '</style>';
    },
    changeTheme(themeID) {
      if (this.currentTheme === themeID) return;
      this.currentTheme = themeID;
      this.themesService.getTheme(themeID)
          .then(response => {
            console.log('changeTheme', response);
            let cssContent = response?.data;
            if (cssContent === null || cssContent === undefined) {
              throw new Error('Theme not found');
            }
            this.cssContent = cssContent;
            this.updateTheme();
          })
          .catch(error => {
            console.log('changeTheme', error);
            this.AppToast
                .error('Impossible de charger le theme 😁');
          });
    },
  },
  components: {},
  beforeUnmount() {
  }
}
</script>
<style scoped>
</style>