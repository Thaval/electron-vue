<template>
  <div class="base-layout-container">
    <header class="header">
      <slot name="header"> Header </slot>
    </header>
    <div class="content-body">
      <main class="content">
        <slot> Content </slot>
      </main>
      <nav class="sidenav">
        <slot name="nav"> Sidenav </slot>
      </nav>
    </div>
    <footer class="footer">
      <slot name="footer"> Footer </slot>
    </footer>
  </div>
</template>
<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  name: "BaseLayout",
})
export default class BaseLayout extends Vue {}
</script>
<style scoped>
.base-layout-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0;
}

.header {
  flex: 0 0 50px;
}

.content-body {
  flex: 1 1 auto;
  overflow: hidden;
  display: flex;
  flex-direction: row;
}

.content-body .content {
  flex: 1 1 auto;
  overflow: auto;
}

.content-body .sidenav {
  order: -1;
  flex: 0 0 200px;
  overflow: auto;
}

.footer {
  flex: 0 0 50px;
}

.content {
    height: 100% !important;
}
.content > * {
    height: 100% !important;
}
</style>