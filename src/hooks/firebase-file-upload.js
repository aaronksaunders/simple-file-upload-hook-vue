import { toRefs, reactive, onMounted } from "@vue/composition-api";
import firebase from "firebase";
// Required for side-effects
import "firebase/firestore";

import FIREBASE_CONFIG from "../.env.firebase.local"

// initialize firebase, this is directly from the firebase documentation
// regarding getting started for the web
if (firebase.apps.length === 0) {
    firebase.initializeApp(FIREBASE_CONFIG);
  }

const DOCUMENT_COLLECTION_NAME = "image-file";
const STORAGE_FILE_PATH = "images/";

export default function() {
  let state = reactive({
    // error if one happens
    error: null,
    // if the query is loading or ot
    loading: false,
    // if the query is loading or ot
    progress: { value: 0 },
    // result from upload
    resultData: {}
  });

  // get the database
  let db = firebase.firestore();

  const storageRef = firebase.storage().ref();
  const uploadData = async (fileData) => {
    // initialize upload information
    state.error = null;
    state.loading = true;

    state.progress = { value: 0 };
    // ensure unique file names
    let uniquePathName =
      new Date().getTime() +
      "-" +
      firebase.auth().currentUser.uid +
      "-" +
      fileData.name;

    try {
      let ref = storageRef.child(STORAGE_FILE_PATH + uniquePathName);
      let uploadTask = ref.put(fileData,  {
        contentType: fileData.type
      });

      // The first example.
      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        _progress => {
          var value = _progress.bytesTransferred / _progress.totalBytes;
          state.progress = { value };
        },
        _error => {
            state.error = _error;
            state.loading = false;
        },
        async _complete => {
            state.error = null;
            state.loading = false;

          let downloadUrl = await uploadTask.snapshot.ref.getDownloadURL();
          let storageData = {
            //   metaData: uploadTask.snapshot.metadata,
            downloadUrl,
            name: uploadTask.snapshot.metadata.name,
            image: {
              ref: uploadTask.snapshot.ref.fullPath,
              size: uploadTask.snapshot.metadata.size,
              contentType: uploadTask.snapshot.metadata.contentType,
              timeCreated: uploadTask.snapshot.metadata.timeCreated
            }
          };

          // save to collection
          //let docSaved = await onSave(storageData);

          // get document
          //let docData = await docSaved.get();
          state.resultData = {
            ...storageData
          };

          state.progress = { value: 0 };
        }
      );
    } catch (_error) {
        state.loading = false;
        state.error = _error;
    }
  };
  return {
    ...toRefs(state),
    uploadData
  };
}
