<template>
  <label class="text-reader">
    Read File
    <input type="file" @change="loadTextFromFile" />
    <p v-if="isLoaded">{{ fileName }}</p>
  </label>
</template>

<script>
export default {
  data() {
    return {
      file: "",
      isLoaded: false,
    };
  },
  computed: {
    fileName() {
      return this.file.name;
    },
  },
  methods: {
    loadTextFromFile(ev) {
      this.file = ev.target.files[0];
      const reader = new FileReader();

      reader.onload = (e) => this.$emit("load", e.target.result);
      reader.readAsDataURL(this.file);
      this.isLoaded = true;
    },
  },
};
</script>

<style>
.text-reader {
  position: relative;
  overflow: hidden;
  display: inline-block;

  /* Fancy button looking */
  border: 2px solid black;
  border-radius: 5px;
  padding: 8px 12px;
  cursor: pointer;
}
.text-reader input {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0;
}
</style>
