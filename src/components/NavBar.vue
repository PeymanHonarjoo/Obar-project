<template>
  <div>
    <v-app-bar :elevation="0" class="border-b-md">
      <v-app-bar-item class="ma-sm-5 pa-sm-5">
        <v-btn
          color="primary"
          class="px-sm-0"
          @click="$router.push('/address-list')"
        >
          مشاهده آدرس ها
        </v-btn>
      </v-app-bar-item>
      <v-app-bar-item class="ma-sm-5 pa-sm-5">
        <v-btn
          color="blue-grey-darken-3"
          class="px-sm-0"
          @click="$router.push('/')"
          >ثبت آدرس</v-btn
        >
      </v-app-bar-item>
      <v-app-bar-title
        class="ma-5 pa-5 d-flex justify-end"
        @click="$emit('toggle-drawer')"
      >
        <v-img
          :width="100"
          aspect-ratio="16/9"
          cover
          src="../assets/logo.svg"
        ></v-img>
      </v-app-bar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
