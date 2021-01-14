<template>
  <div class="home">
    <code-editor/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CodeEditor from '@/components/CodeEditor.vue'; // @ is an alias to /src

@Component({
  components: {
    CodeEditor
  },
})
export default class Home extends Vue {}
</script>
