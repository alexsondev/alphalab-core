<template>
  <div class="sep-outer">
    <div>
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
          :style="`fill: ${color}`"
        />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
// import Color from "color";

const props = defineProps({
  color: String,
  secondColor: String,
  thirdColor: String,
});

// const colorGen = Color(props.color);

const color = ref(props.color);
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

</style>
