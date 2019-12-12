<template>
  <div class="hello">
    <p v-if="imageData">{{imageData.name}}</p>
    <input
      id="file-upload"
      type="file"
      style="display:none"
      @change="gotFile"
    >
    <div>
      <button @click="openFileDialog">Get Image</button>
      <button @click="$emit('upload-image',imageData)">Upload Image</button>
      <button @click="clearImage">Clear Image</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddItem",
  props: {},
  methods: {
    openFileDialog() {
      document.getElementById("file-upload").click();
    },
    /**
     */
    gotFile(e) {
      this.imageData = e.target.files[0];
      this.$emit("image-changed", this.imageData);
    },
    clearImage() {
      this.imageData = null;
      this.$emit("image-changed", {});
    }
  },
  data() {
    return {
      imageData: {}
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
