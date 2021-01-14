<template>
  <div class="d-flex flex-column overflow-h">
    <v-tabs v-model="tab" background-color="primary" dark class="flex-grow-0">
      <v-tab v-for="item in tabs" :key="item.header">
        {{ item.header }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab" class="flex-grow-1 overflow-a">
      <v-tab-item v-for="item in tabs" :key="item.header">
        <code-editor :content="item.content" />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
import CodeEditor from "@/components/CodeEditor.vue";
@Component({
  name: "TabCodeEditors",
  components: { CodeEditor },
})
export default class TabCodeEditors extends Vue {
  tabs: { header: string; content: string }[] = [];
  tab: any = null;
  mounted() {
    this.tabs = [
      { header: "Tab1", content: "Test" },
      { header: "Tab2", content: "Test2" },
    ];
  }
}
</script>
<style>
.overflow-h {
  overflow: hidden;
}

.overflow-a {
  overflow: auto;
}
</style>