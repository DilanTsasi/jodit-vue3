
# Jodit Vue 3 Editor
A Jodit WYSIWYG editor wrapper for vue3


## Installation

Install with npm

```bash
  npm install jodit-vue3
```
Or With yarn

```bash
  yarn add jodit-vue3
```

## Import and use
This is just a wrapper, so you will have to include the stylesheet for Jodit in your app for it to work properly

### Import globally
```bash
//main.js
import 'jodit/build/jodit.min.css'
import { createApp } from 'vue';
import JoditEditor from 'jodit-vue3'

const app = createApp(App);
app.use(JoditEditor);
```
### Import Localy
```bash
<script>
import {JoditEditor} from 'jodit-vue3';
export default {
  components: {
    JoditEditor
  },
  ...
}
</script>
```

### and use
```bash
//app.vue
<template>
  <jodit-editor v-model="content"></jodit-editor>
</template>

```
## Properties

| Property  | Type     | Required | Description       |
| :-------- | :------- | :----    | :------------------------- |
| editorOptions | Object | false    | the editor options for jodit editor  |

for a full list of Jodit editor Options, visit https://xdsoft.net/jodit/doc/options/

##example

```bash
<template>
  <jodit-editor v-model="content" :editorOptions="options"></jodit-editor>
</template>
<script>
import {JoditEditor} from 'jodit-vue3';
export default {
  name:'Edit',
  components: {
      JoditEditor
  },
  data(){
    return{
      content:"",
      options:{
        textIcons: false,
        iframe: false,
        iframeStyle: '*,.jodit_wysiwyg {color:red;}',
        height: 'auto',
        minHeight:400,
        maxHeight:600,
        defaultMode: Jodit.MODE_WYSIWYG,
        imageDefaultWidth:'100%',
        observer: {
            timeout: 100
        },
        commandToHotkeys: {
            'openreplacedialog': 'ctrl+p'
        },
      }
    }
  }
}
</script>
```


## Author

- [@dilantsasi](https://www.github.com/dilantsasi)

## Follow me

- [Twitter@dilantsasi](https://www.twitter.com/dilantsasi) 
- [LinkedIn](https://www.linkedin.com/in/dilan-tsasi-21656a134)

  