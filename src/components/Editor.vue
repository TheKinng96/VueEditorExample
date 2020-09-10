<template>
  <div id="app">
    <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
    <button v-on:click="emptyEditor()">Empty the editor</button>

    <h2>Editor data</h2>
    <code>{{ editorData }}</code>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  name: "app",
  data() {
    return {
      editor: ClassicEditor,
      editorData: "<p>Write something...</p>",
      editorConfig: {
        //
      },
      editorDisabled: true,
    };
  },
  methods: {
    emptyEditor() {
      this.editorData = "";
    },
  },
};
</script>
