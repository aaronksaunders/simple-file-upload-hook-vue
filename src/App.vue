<template>
  <div id="app">
    <AddItem @upload-image="onSaveImage" @image-changed="setCurrentImage" />
   <p v-if="error">{{error.message}}</p>
   <p v-if="resultData.image">{{resultData}}</p>
   <p v-if="progress">{{progress.value}}</p>
    <MainPage />
  </div>
</template>

<script>
/* eslint no-console: off */
import MainPage from "./components/MainPage.vue";
import AddItem from "./components/AddItem";

import useFirebaseFileUpload from "./hooks/firebase-file-upload";

export default {
  name: "app",
  components: {
    MainPage,
    AddItem
  },
  setup() {
    let state = useFirebaseFileUpload();
    return {
      ...state,
      uploadData : state.uploadData
    };
  },
  methods: {
    setCurrentImage(_image) {
      console.log(_image);
      this.fileData = _image;
      this.error = {};
      this.resultData = {};
    },
    onSaveImage(_image) {
      console.log("Save Image");
      console.log(this.fileData);
      this.uploadData(this.fileData);
      
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
