<template>
  <v-app class="rtl bg-grey-lighten-3" dir="rtl">
    <v-main>
      <NavBar />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  name: "App",
  components: {
    NavBar,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.rtl {
  direction: rtl;
  text-align: right;
}
* {
  font-family: "Vazirmatn", sans-serif;
}
</style>
