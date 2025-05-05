<template>
  <v-row
    :class="[
      'bg-white footer-shadow footer-style',
      $vuetify.display.smAndDown ? 'fixed-footer' : '',
    ]"
    fluid
  >
    <v-col cols="12" class="d-flex justify-center">
      <v-btn
        class="d-flex justify-center align-center font-weight-bold"
        height="50"
        width="200"
        color="primary"
        @click="handleSubmit()"
        flat
      >
        ثبت و ادامه
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";
export default {
  name: "FooterView",
  inject: ["formData"],
  methods: {
    async handleSubmit() {
      console.log("Form Data:", this.formData);

      if (this.$route.name === "Home") {
        try {
          const response = await axios.post(
            "https://stage.achareh.ir/api/karfarmas/address",
            this.formData
          );
          console.log("ارسال موفق", response.data);
          this.$router.push("/map");
        } catch (error) {
          console.error("خطا در ارسال:", error);
        }
      } else {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style scoped>
.fixed-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
.footer-style {
  z-index: 999;
  padding: 12px 0;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
}
</style>
