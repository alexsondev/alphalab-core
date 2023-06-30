<template>
  <div class="sep-outer">
    <div>
      <svg
        preserveAspectRatio="xMidYMax meet"
        class="svg-separator down"
        viewBox="0 0 1600 200"
        style="display: block"
        data-height="200"
      >
        <polygon
          class=""
          :style="`fill: ${color}`"
          points="-4,0 1604,198 1604,204 -4,204 	"
        />
        <polygon
          class=""
          :style="`opacity: 1; fill: ${darken(0.2)}`"
          points="1604,198 1604,186 -4,0 -4,0 	"
        />
        <polygon
          class=""
          :style="`opacity: 1; fill: ${darken(0.3)}`"
          points="1604,186 1604,174 -4,0 -4,0 	"
        />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import Color from "color";

const props = defineProps({
  color: { type: String, default: "blue" },
});
const color = computed(() => props.color)
const colorGen = computed(() => Color(color.value))
const darken = (i: number) => colorGen.value.darken(i);

</script>

<style>
.sep-outer {
  width: 100%;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
}

.svg-separator {
  display: block;
  background: 0 0;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
  -webkit-transform: translateY(-100%) translateY(2px);
  transform: translateY(-100%) translateY(2px);
  width: 100%;
}
.svg-separator.bottom {
  top: auto;
  bottom: 0;
}
.down {
  transform: translateY(-100%) translateY(2px) scale(1, 1);
  transform-origin: top;
}

.sep-outer + * {
  padding-bottom: 150px !important;
}
</style>
