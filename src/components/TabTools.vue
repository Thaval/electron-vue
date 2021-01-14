<template>
  <div>
    <v-tabs v-model="tab" background-color="primary" dark>
      <v-tab v-for="item in tabs" :key="item.header">
        {{ item.header }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in tabs" :key="item.header">
        <v-card flat>
          <v-card-text>
            <code-editor :content="item.content" />
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  name: "TabTools",
})
export default class TabTools extends Vue {
  tabs: { header: string; content: string }[] = [];
  tab: any = null;

  created() {
    this.tabs = [
      { header: "Output", content: "" },
      { header: "Problems", content: "" },
      { header: "Terminal", content: "" },
    ];
  }
}
</script>
<style scoped>
</style>