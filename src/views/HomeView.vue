<template>
  <div>
    <v-container class="mx-auto flex-column d-flex justify-center mb-15" fluid>
      <v-row class="d-flex justify-center align-center" dir="rtl">
        <v-col cols="12" md="8">
          <p class="text-blue-grey-darken-3 pb-2 pt-5">ثبت آدرس</p>
          <v-card class="mx-auto pa-5 card-custom-border" color="white" flat>
            <v-card-title
              class="text-sm-right text-center text-blue-grey-darken-3 pa-5"
              :style="{ whiteSpace: 'normal', lineHeight: '1.6' }"
            >
              لطفا مشخصات و آدرس خود را وارد کنید
            </v-card-title>
            <v-form ref="formRef" v-model="formValid">
              <v-row dir="rtl" class="text-right pa-5">
                <v-col cols="12" md="4">
                  <span class="text-blue-grey-darken-3 py-2">نام</span>
                  <v-text-field
                    placeholder="مثال: علی"
                    variant="outlined"
                    color="primary"
                    class="w-100"
                    dir="rtl"
                    :rules="NameRules"
                    clearable
                    v-model="formData.firstName"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                  <span class="text-blue-grey-darken-3 py-2">نام خانوادگی</span>
                  <v-text-field
                    placeholder="مثال: رضایی"
                    variant="outlined"
                    color="primary"
                    class="w-100"
                    dir="rtl"
                    :rules="NameRules"
                    clearable
                    v-model="formData.lastName"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                  <span class="text-blue-grey-darken-3 py-2"
                    >شماره تلفن همراه</span
                  >
                  <v-text-field
                    placeholder="مثال: 09121234567"
                    variant="outlined"
                    color="primary"
                    class="w-100"
                    dir="rtl"
                    :rules="PhoneRules"
                    required
                    clearable
                    v-model="formData.mobile"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                  <div class="d-flex justify-space-between align-center">
                    <span class="text-blue-grey-darken-3 py-2"
                      >شماره تلفن ثابت
                      <span style="font-size: 13px">(اختیاری)</span></span
                    >
                    <span class="text-caption text-grey-darken-1"
                      >*با پیش شماره</span
                    >
                  </div>
                  <v-text-field
                    placeholder="مثال: 02112345678"
                    variant="outlined"
                    color="primary"
                    class="w-100"
                    dir="rtl"
                    :rules="OptionalPhoneRules"
                    clearable
                    v-model="formData.phone"
                  ></v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  md="8"
                  class="d-flex flex-column justify-center"
                >
                  <span class="text-blue-grey-darken-3 py-2">آدرس</span>
                  <v-text-field
                    variant="outlined"
                    color="primary"
                    class="w-100"
                    dir="rtl"
                    :rules="AddressRules"
                    clearable
                    v-model="formData.address"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" class="d-flex justify-center" dir="rtl">
                  <p
                    class="text-blue-grey-darken-3 d-flex justify-center align-center"
                  >
                    جنسیت
                  </p>
                  <v-radio-group
                    class="d-flex justify-end align-center"
                    v-model="formData.gender"
                    inline
                    dir="rtl"
                  >
                    <v-radio
                      label="خانم"
                      value="female"
                      color="primary"
                      class="text-blue-grey-darken-3"
                    ></v-radio>
                    <v-radio
                      label="آقا"
                      value="male"
                      color="primary"
                      class="text-blue-grey-darken-3"
                    ></v-radio>
                  </v-radio-group>
                </v-col>
              </v-row>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
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
          :disabled="!formValid"
          @click="goToMap"
          flat
        >
          ثبت و ادامه
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formValid: false,
      formData: {
        firstName: "",
        lastName: "",
        mobile: "",
        phone: "",
        address: "",
        gender: "male",
      },
      NameRules: [
        (value) => !!value || "نام نمی‌تواند خالی باشد",
        (value) => /[^0-9]/.test(value) || "نام نمی‌تواند عدد داشته باشد",
        (value) => value.length >= 3 || "نام حداقل باید ۳ حرف باشد",
      ],
      AddressRules: [
        (value) => !!value || "آدرس نمی‌تواند خالی باشد",
        (value) => value.length >= 10 || "آدرس حداقل باید ۱۰ حرف باشد",
      ],
      PhoneRules: [
        (value) => !!value || "شماره موبایل الزامی است",
        (value) => /^\d{11}$/.test(value) || "شماره باید ۱۱ رقم باشد",
      ],
      OptionalPhoneRules: [
        (value) => !value || /^\d{11}$/.test(value) || "شماره باید ۱۱ رقم باشد",
      ],
    };
  },
  methods: {
    goToMap() {
      this.$refs.formRef.validate().then((valid) => {
        if (valid) {
          localStorage.setItem("formData", JSON.stringify(this.formData));
          this.$router.push("/map");
        }
      });
    },
  },
};
</script>

<style>
.card-custom-border {
  border: 1px solid rgba(237, 240, 242, 1);
  border-radius: 4px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
}
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
