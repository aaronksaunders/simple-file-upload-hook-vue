# simple-file-upload-hook-vue

## firebase configuration
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
