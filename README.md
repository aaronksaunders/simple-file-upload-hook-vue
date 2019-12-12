# simple-file-upload-hook-vue
This code is a continuation of a [series of blog posts](https://dev.to/aaronksaunders/vuejs-composition-api-sample-app-w-video-d04) where we have create [react-hook](https://reactjs.org/docs/hooks-intro.html) functionality using the new [vuejs](https://vuejs.org) [vue-composition](https://github.com/vuejs/composition-api) api functionality from vuejs. The series starts with a basic compisition function and then shows how to create hooks that save the data to Firebase.

In this last post in the series we create a simple [vue-composition](https://github.com/vuejs/composition-api) function for uploading a file to [firebase storage](https://firebase.google.com/docs/web/setup?authuser=0).

## Firebase configuration
you will need to create a `src/.env.firebase.local` and put your own project information for firebase. The file is structured similar to this:
```javascript
export default {
  /* YOUR CONFIGURATION GOES HERE */
  apiKey: "AIz99999TTdjRdmEt_00000000000-Mv0M",
  authDomain: "00000000000-10000.firebaseapp.com",
  databaseURL: "https://00000000000-10000.firebaseio.com",
  projectId: "00000000000-10000",
  storageBucket: "00000000000-10000.appspot.com",
  messagingSenderId: "00000000000-10000",
  appId: "1:00000000000-10000:web:00000000000-10000"
};
```
>Information for setting up your project to use firebase [Firebase Project Setup](https://firebase.google.com/docs/web/setup?authuser=0)

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
