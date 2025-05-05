import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MapView from "@/views/MapView.vue";
import AddressListView from "@/views/AddressListView.vue";
import SuccessView from "@/views/SuccessView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/map",
    name: "mapView",
    component: MapView,
  },
  {
    path: "/address-list",
    name: "addressList",
    component: AddressListView,
  },
  {
    path: "/success",
    name: "successful",
    component: SuccessView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
