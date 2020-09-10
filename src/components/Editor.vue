<template>
  <div id="app">
    <ckeditor
      :editor="editor"
      v-model="editorData"
      :config="editorConfig"
    ></ckeditor>
    <br />
    <br />
    <button @click="emptyEditor()">Empty the editor</button>
    <button @click="savePost('button pressed', $event)">SAVE</button>

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
    savePost(message, event) {
      if (event) {
        event.preventDefault();
      }
      this.$store.dispatch("gettingNewPost", this.editor.data);
      alert(message);
    },
  },
};
</script>
