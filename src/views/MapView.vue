<template>
  <div>
    <v-container>
      <l-map
        style="height: 500px; width: 100%"
        :zoom="13"
        :center="[lat, lng]"
        @click="onMapClick"
      >
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <l-marker :lat-lng="[lat, lng]"></l-marker>
      </l-map>
    </v-container>

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
          @click="submitAddress"
          flat
        >
          ثبت و ادامه
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from "vue3-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  data() {
    return {
      formData: {},
      lat: 35.7717503,
      lng: 51.3365315,
    };
  },
  mounted() {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      this.formData = JSON.parse(savedData);
    } else {
      this.$router.push("/");
    }
  },
  methods: {
    onMapClick(e) {
      this.lat = e.latlng.lat;
      this.lng = e.latlng.lng;
    },
    async submitAddress() {
      const finalData = {
        first_name: this.formData.firstName || "",
        last_name: this.formData.lastName || "",
        coordinate_mobile: this.formData.mobile || "",
        coordinate_phone_number: this.formData.phone || "",
        address: this.formData.address || "",
        gender: this.formData.gender || "",
        region: 1,
        lat: this.lat,
        lng: this.lng,
      };

      console.log("اطلاعات ارسالی:", finalData);

      try {
        const response = await axios.post(
          "https://stage.achareh.ir/api/karfarmas/address",
          finalData,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Basic MDk4MjIyMjIyMjI6U2FuYTEyMzQ1Njc4",
            },
          }
        );
        console.log("successful", response.data);
        localStorage.removeItem("formData");
        this.$router.push("/success");
      } catch (error) {
        console.error("error", error);
        alert(" error.");
        this.$router.push("/success");
      }
    },
  },
};
</script>

<style>
.leaflet-container {
  width: 100%;
  height: 600px !important;
}
</style>
