<template>
  <div>
    <v-container class="mx-auto flex-column d-flex justify-center">
      <v-row>
        <v-col cols="12" class="text-end">
          <p class="text-blue-grey-darken-3 font-weight-bold">
            آدرس‌ها و مشخصات
          </p>
        </v-col>

        <v-col
          v-for="item in addresses"
          :key="item.address_id"
          cols="12"
          dir="rtl"
        >
          <v-card class="mb-4 pa-4" elevation="2">
            <v-row class="d-flex justify-start">
              <v-col cols="4">
                <p class="d-flex flex-column justify-end">
                  <span class="text-grey mb-1">نام:</span>
                  {{ item.first_name }}
                </p>
              </v-col>
              <v-col cols="4">
                <p class="d-flex flex-column justify-end">
                  <span class="text-grey mb-1">نام خانوادگی:</span>
                  {{ item.last_name }}
                </p>
              </v-col>
              <v-col cols="4">
                <p class="d-flex flex-column justify-end">
                  <span class="text-grey mb-1">آدرس:</span>
                  {{ item.address }}
                </p>
              </v-col>
              <v-col cols="4">
                <p class="d-flex flex-column justify-end">
                  <span class="text-grey mb-1">منطقه:</span>
                  {{ item.region?.name || "---" }}
                </p>
              </v-col>
              <v-col cols="4">
                <p class="d-flex flex-column justify-end">
                  <span class="text-grey mb-1">شهر:</span>
                  {{ item.region?.city_object?.city_name }}
                </p>
              </v-col>
              <v-col cols="4">
                <p class="d-flex flex-column justify-end">
                  <span class="text-grey mb-1">موبایل:</span>
                  {{ item.coordinate_mobile || "نامشخص" }}
                </p>
              </v-col>
              <v-col cols="4">
                <p class="d-flex flex-column justify-end">
                  <span class="text-grey mb-1">تلفن:</span>
                  {{ item.coordinate_phone_number || "نامشخص" }}
                </p>
              </v-col>
              <v-col cols="4">
                <p class="d-flex flex-column justify-end">
                  <span class="text-grey mb-1">مختصات:</span> lat:
                  {{ item.lat }}, lng:
                  {{ item.lng }}
                </p>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AddressList",
  data() {
    return {
      addresses: [],
    };
  },
  mounted() {
    this.fetchAddresses();
  },
  methods: {
    async fetchAddresses() {
      try {
        const response = await axios.get(
          "https://stage.achareh.ir/api/karfarmas/address",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Basic MDk4MjIyMjIyMjI6U2FuYTEyMzQ1Njc4",
            },
          }
        );
        this.addresses = response.data;
      } catch (error) {
        console.error(" خطا در دریافت آدرس‌ها:", error);
        alert("دریافت آدرس‌ها با خطا مواجه شد.");
      }
    },
  },
};
</script>

<style scoped>
.text-grey {
  color: #9b9b9b;
  font-size: 14px;
}
</style>
