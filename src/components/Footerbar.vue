<template>
  <v-system-bar window dark>
    <v-icon>mdi-message</v-icon>
    <span>10 unread messages</span>
    <v-spacer></v-spacer>
    <v-icon>mdi-minus</v-icon>
    <v-icon>mdi-checkbox-blank-outline</v-icon>
    <v-icon>mdi-close</v-icon>
  </v-system-bar>
</template>
<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  name: "Footerbar",
})
export default class Footerbar extends Vue {}
</script>
<style scoped>
.v-system-bar {
  height: 100% !important;
}
</style>