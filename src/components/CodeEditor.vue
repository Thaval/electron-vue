<template>
  <textarea :id="currentCounter" v-model="content"></textarea>
</template>
<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
import CodeMirror from "codemirror";
import "codemirror/mode/javascript/javascript.js";

@Component({
  name: "CodeEditor",
})
export default class CodeEditor extends Vue {
  options: any = {
    //Monaco Editor Options
  };

  static editorCounter = 0;
  currentCounter = 0;

  private editor!: CodeMirror.Editor;

  @Prop({ default: "" })
  content!: string;

  constructor() {
    super();
    this.currentCounter = ++CodeEditor.editorCounter;
  }

  mounted() {
    const txtEle = document.getElementById(
      this.currentCounter.toString()
    ) as HTMLTextAreaElement;
    this.editor = CodeMirror.fromTextArea(txtEle, {
      mode: "htmlmixed",
      extraKeys: { "Ctrl-Space": "autocomplete" },
      lineNumbers: true,
      // autoCloseTags: true,
      theme: "base16-dark",
    });
  }

  selectAll() {
    CodeMirror.commands["selectAll"](this.editor);
  }

  onChange(value: any) {
    console.log(value);
  }
}
</script>
<style>
@import "../../node_modules/codemirror/lib/codemirror.css";
@import "../../node_modules/codemirror/theme/base16-dark.css";

.CodeMirror {
  height: 100% !important;
}

.v-window-item {
  height: 100% !important;
}

.v-window__container {
  height: 100% !important;
}
</style>