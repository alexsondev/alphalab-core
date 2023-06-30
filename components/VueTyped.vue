<template>
  <div>
    <span ref="el" />
  </div>
</template>

<script setup lang="ts">
import Typed from "typed.js";

import { ref } from "vue";

const emit = defineEmits(["begin", "start", "complete", "destroy", "stop", "stringTyped"]);
const el = ref();

let typed: Typed | undefined;
let restart: Boolean;

const props = defineProps({
    strings: {
        type: Array < String >,
        default: ['']
    },
    contentType: { type: String, default: 'html' },

    autostart: {
        type: Boolean,
        default: true
    },
    smartBackspace: {
        type: Boolean,
        default: true,
    },
    typeSpeed: {
        type: Number,
        default: 50,
    },
    backSpeed: {
        type: Number,
        default: 5,
    },
    loop: {
        type: Boolean,
        default: false,
    },
    showCursor: {
        type: Boolean,
        default: true,
    },
    bindInputFocusEvents: {
      type: Boolean,
      default:true
    }
});

defineExpose({
    start: () => {
        typed?.start()
    },
    reset: (restart: boolean) => {
        typed?.reset(restart)
    },
    stop: () => {
        typed?.stop()
    },
    destroy: () => {
        typed?.destroy()
    },
    toggle: () => {
        typed?.toggle()
    },
    instantiate: () => {
        instantiate()
    }
})
onActivated(() => {
    // console.log('onActivated')
})
onDeactivated(() => {
    // console.log('onDeactivated')
})
onUnmounted(() => {
    // console.log('onUnmounted')
    // typed.destroy();
})

onMounted(() => {
    console.log('onMounted')
    if (props.autostart) instantiate();
});

const instantiate = () => {
    console.log('instantiate', props)

    typed = new Typed(props.el || el.value, Object.assign({
        onStart: (arrayPos: number, self: Typed) => {
            console.log(typed, "start")
            emit("start")
        },

        onBegin: (self: Typed) => {
            console.log(typed, "begin")
            emit("begin")
        },

        onComplete: (self: Typed) => {

            setTimeout(() => {
                self.cursor.hidden = true
            }, 1000);
            console.log(typed, "complete")
            emit("complete")
        },

        onDestroy: (self: Typed) => {
            console.log(typed, "destroy")
            typed = undefined;
            emit("destroy")
            if (restart) {
                instantiate()
            }
        },

        onStringTyped: (arrayPos: number, self: Typed) => {
            console.log(typed, "stringTyped")
            emit("stringTyped", arrayPos, self)
        },

        preStringTyped: (arrayPos: number, self: Typed) => {},

        onLastStringBackspaced: (self: Typed) => {},

        onTypingPaused: (arrayPos: number, self: Typed) => {},

        onTypingResumed: (arrayPos: number, self: Typed) => {},

        onReset: (self: Typed) => {},

        onStop: (arrayPos: number, self: Typed) => {},
    }, props))

};
</script>
