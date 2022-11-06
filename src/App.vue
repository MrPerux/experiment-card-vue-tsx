<template>
  <div class="app">
    Welcome to the wonderous world of Vue. Please look around. Stay a while.
  </div>
  <span>My name is: {{ name }} </span>
  <br />
  <button @click="changeName('Johanathan')">Let's change that name</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {},
  data() {
    return { name: "Sir Thomason III junior" };
  },
  methods: {
    changeName(name: string) {
      this.name = name;
    },
  },
});
</script>

<style lang="scss"></style>
