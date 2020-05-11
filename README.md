![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# Record Audio Button

Web Component built with [Stencil.js](https://github.com/ionic-team/stencil) for *Recording Audio* from **Web** using [Web RTC](https://developer.mozilla.org/docs/Web/API/WebRTC_API) and *Mobile* using native plugins, with a swipe gesture using [Ionic Animations](https://ionicframework.com/docs/utilities/animations) inspired by **WhatsApp**:

```html
<record-audio-button autoplay enable-recording></record-audio-button>
```

## Demo 🎮

Do you want to see this web component in action? Check our demo projects for Angular, React, Vue, VanillaJS, etc, yay! 🎉

<p align="center">
  <img width="300px" alt="Record Audio Button" src="https://github.com/proyecto26/record-audio-button-enterprise/blob/master/img/demo-angular.png?raw=true">
</p>

## Usage 🎉

```html
<record-audio-button
  color="light"
  activated="false"
  disabled="false"
  show
  translucent
  type="submit"
  size="large"
  max-threshold="10"
  button-style=""
  button-class=""
  icon-name="mic"
  icon-size="large"
  icon-style=""
  icon-class=""
  icon-aria-label=""
  icon-ios=""
  icon-md=""
  icon-src=""
  scale-x="1.2"
  scale-y="1.2"
  width="55"
  height="55"
  max-width="90"
  duration="200"
  enable-logs
  enable-recording
  autoPlay
  mime-type="audio/webm"
  time-slice="0"
  audio-bits-per-second="0"
  sample-rate="0"
  desired-samp-rate="0"
  buffer-size="0"
  number-of-audio-channels="0"
>
</record-audio-button>
```

## Getting Started 📖

### Packages

| Project | Package |
| ------- |:-----:|
| **Core** | [`@proyecto26/record-audio-button`](https://github.com/proyecto26/record-audio-button-enterprise)
| **React** | [`@proyecto26/record-audio-button-react`](https://github.com/proyecto26/record-audio-button-enterprise)

<!-- ### Script tag TODO: Check other way

- Put a script tag similar to this `<script src='https://unpkg.com/record-audio-button@1.0.0/dist/record-audio-button.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc -->

### Node Modules
- Run `npm install @proyecto26/record-audio-button --save`
- Put a script tag similar to this `<script src='node_modules/@proyecto26/record-audio-button/dist/record-audio-button.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### In a stencil-starter app
- Run `npm install @proyecto26/record-audio-button --save`
- Add an import to the npm packages `import @proyecto26/record-audio-button;`
- Then you can use the element anywhere in your template, JSX, html etc

## Framework integrations 👨‍💻

### Angular
Using `record-audio-button` component within an Angular project:

#### Including the Custom Elements Schema

Including the `CUSTOM_ELEMENTS_SCHEMA` in the module allows the use of Web Components in the HTML files. Here is an example of adding it to `AppModule`:

```ts
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
```

The `CUSTOM_ELEMENTS_SCHEMA` needs to be included in any module that uses **record-audio-button**.

#### Calling defineCustomElements

**record-audio-button** component includes a function used to load itself in the application window object. That function is called `defineCustomElements()` and needs to be executed once during the bootstrapping of your application. One convenient place to add it is in the `main.ts` file as follows:

```tsx
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { defineCustomElements as defineRecordAudioButton } from '@proyecto26/record-audio-button/loader';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
defineRecordAudioButton(window);
```

[_from stencil documentation_](https://github.com/ionic-team/stencil-site/blob/master/src/docs/framework-integration/angular.md)

### React

- Specific Wrapper

When using a wrapper component, It's not necessary to access the reference directly to attach events, etc. More details [here](./react/README.md).
```tsx
import React from 'react';
import {
  RecordAudioButton
} from '@proyecto26/record-audio-button';

const App = () => {
  return (
    <RecordAudioButton
      color="light"
      scaleX={1.3}
      scaleY={1.3}
      maxWidth={100}
      duration={200}
      autoPlay={false}
      enableLogs
      enableRecording={true}
    />
  );
};
export default App;
```

- Web Component

Other option is using the web component directly: 
```tsx
import React from 'react'
import ReactDOM from 'react-dom'
import { defineCustomElements as defineRecordAudioButton } from '@proyecto26/record-audio-button/loader'
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

defineRecordAudioButton(window);
```

[_from stencil documentation_](https://github.com/ionic-team/stencil-site/blob/master/src/docs/framework-integration/react.md)

### Vue

In order to use the `record-audio-button` Web Component inside of a Vue application, it should be modified to define the custom elements and to inform the Vue compiler which elements to ignore during compilation. This can all be done within the `main.js` file as follows:

```tsx
import Vue from 'vue';
import { defineCustomElements as defineRecordAudioButton } from '@proyecto26/record-audio-button/loader'

import App from './App.vue';

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/ion-\w*/, /record-\w*/];

// Bind the custom element to the window object
defineRecordAudioButton(window);

new Vue({
  render: h => h(App)
}).$mount('#app');
```

[_from stencil documentation_](https://github.com/ionic-team/stencil-site/blob/master/src/docs/framework-integration/vue.md)


## Credits 👍

- Icons made by `Good Ware` from www.flaticon.com
- Wallpaper made by `coolvector` from www.freepik.com

## Happy coding 💯
Made with ❤️

<img width="150px" src="https://avatars0.githubusercontent.com/u/28855608?s=200&v=4" align="right">
