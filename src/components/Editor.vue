<template>
  <editor-content :editor="editor" />
</template>

<script>
import { Editor, EditorContent } from "tiptap";

export default {
  components: {
    EditorContent,
  },
  data() {
    return {
      editor: new Editor({
        content: "<p>This is just a boring paragraph</p>",
      }),
    };
  },
  beforeDestroy() {
    this.editor.destroy();
  },
};
</script>
