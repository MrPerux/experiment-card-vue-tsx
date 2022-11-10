<template>
  <div class="app container">
    <div class="struct-cardes pt-5">
      <StructCardVue :struct_card="first_struct_card"></StructCardVue>
      <StructCardVue :struct_card="second_struct_card"></StructCardVue>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StructCardVue from "./components/StructCard.vue";
import { StructCard } from "./types/struct_card";

export default defineComponent({
  name: "App",
  components: { StructCardVue },
  data() {
    return {
      first_struct_card: {
        structId: { name: "catch_em_all.py" },
        tick: { value: "21" },
        tags: { StdOut: false, StdErr: true },
      } as StructCard,
      second_struct_card: {
        structId: { name: "catch_em_all.py" },
        tick: { value: "22" },
        tags: { StdOut: true, StdErr: false },
      } as StructCard,
    };
  },
});
</script>
