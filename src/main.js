// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {
  transitions,
  VApp,
  VBtn,
  VCard,
  VDataIterator,
  VDatePicker,
  VDataTable,
  VDivider,
  VFooter,
  VGrid,
  VIcon,
  VList,
  VNavigationDrawer,
  VPagination,
  VRadioGroup,
  VSelect,
  VSpeedDial,
  VTextField,
  VToolbar,
  Vuetify
} from 'vuetify';
import '../node_modules/vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VBtn,
    VCard,
    VDataIterator,
    VDataTable,
    VDatePicker,
    VDivider,
    VFooter,
    VGrid,
    VIcon,
    VList,
    VNavigationDrawer,
    VRadioGroup,
    VSelect,
    VSpeedDial,
    VTextField,
    VToolbar,
    VPagination,
    transitions
  }
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
