<template>
  <v-app>
    <!-- <main-navigation />
    <topbar />

    <v-main>
      <v-container class="d-flex flex-column">
        <tab-code-editors class="flex-grow-1" />
        <tab-tools class="flex-grow-0" />
      </v-container>
    </v-main>

    <v-footer app>
      <footerbar />
    </v-footer> -->
    <base-layout>
      <div class="d-flex flex-column main-container">
        <tab-code-editors class="flex-grow-1" />
        <tab-tools class="flex-grow-0" />
      </div>

      <template v-slot:header>
        <topbar />
      </template>

      <template v-slot:nav>
        <main-navigation />
      </template>

      <template v-slot:footer>
        <footerbar />
      </template>
    </base-layout>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Topbar from "@/components/Topbar.vue"; // @ is an alias to /src
import MainNavigation from "@/components/MainNavigation.vue"; // @ is an alias to /src
import Footerbar from "@/components/Footerbar.vue"; // @ is an alias to /src
import TabCodeEditors from "@/components/TabCodeEditors.vue"; // @ is an alias to /src
import TabTools from "@/components/TabTools.vue"; // @ is an alias to /src
import BaseLayout from "@/layout/BaseLayout.vue"; // @ is an alias to /src

export default Vue.extend({
  name: "App",

  components: {
    Topbar,
    MainNavigation,
    Footerbar,
    TabCodeEditors,
    TabTools,
    BaseLayout,
  },
});
</script>

<style>
html {
  overflow: hidden;
}

body {
  overflow: hidden;
}

/*
.application {
  height: 100%;
}

header{
  height: 48px !important;
}

footer {
  height: 44px !important;
}
 */
main {
  height: calc(100% - 48px - 44px);
}

v-main {
  height: 100%;
}

.v-main__wrap > * {
  height: 100% !important;
}

.main-container {
  margin: 0px;
}

</style>
