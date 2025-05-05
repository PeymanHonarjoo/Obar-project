<template>
  <div>
    <v-container class="d-flex flex-column align-center justify-center" fluid>
      <v-row
        class="d-flex flex-column align-center justify-center align-center"
      >
        <v-col cols="12" class="text-center d-flex justify-center">
          <v-img
            src="../assets/check.svg"
            width="100"
            height="100"
            aspect-ratio="1/1"
          ></v-img>
        </v-col>
        <v-col cols="12" class="text-center">
          <h2 class="text-blue-grey-darken-3">اطلاعات شما با موفقبت ثبت شد</h2>
        </v-col>
        <v-col cols="12" class="text-center">
          <v-btn
            color="primary"
            height="50"
            width="200"
            variant="outlined"
            @click="$router.push('/address-list')"
            flat
          >
            مشاهده اطلاعات
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "SuccessView",
};
</script>

<style scoped></style>
