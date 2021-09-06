import JoditEditor from './JoditEditor.vue';
export default {
    install: (app) => {
        app.component('jodit-editor', JoditEditor);
    },

}
export { JoditEditor }