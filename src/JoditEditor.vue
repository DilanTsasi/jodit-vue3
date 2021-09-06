<template>
  <textarea></textarea>
</template>

<script>
import { Jodit } from 'jodit'
export default {
    name: 'joditvue3',
    props: {
        editorOptions:{
            type:Object,
            required:false,
            default(){
                return{
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
        },
        modelValue:{
            type:String,
            required:false
        }
    },
    emits: ['update:modelValue'],
    data: () => ({ editor: null }),
    computed: {
        editorConfig () {
        const config = { ...this.editorOptions }
            return config
        }
        
    },
    watch: {
        value (newValue) {
        if (this.editor.value !== newValue) this.editor.value = newValue
        }
    },
    mounted () {
        this.editor = new Jodit(this.$el, this.editorConfig)
        this.editor.value=this.modelValue
        this.editor.events.on('change', newValue => this.$emit('update:modelValue', newValue))
    },
    beforeUnmount () {
        this.editor.destruct()
    }
}
</script>