// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  // Initialize Firebase
  config: {
    apiKey: 'AIzaSyDB9ViN2lsfZy0X1R9mUA534N9z_q6_KFU',
    authDomain: 'syntesys-web.firebaseapp.com',
    databaseURL: 'https://syntesys-web.firebaseio.com',
    projectId: 'syntesys-web',
    storageBucket: 'syntesys-web.appspot.com',
    messagingSenderId: '681863317191'
  }
};
