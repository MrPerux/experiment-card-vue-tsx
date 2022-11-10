<template>
  <div class="box struct-card p-3 has-background-light">
    <p class="is-family-code mb-1">{{ struct_card.structId.name }}</p>
    <div class="is-flex is-justify-content-space-between">
      <p class="has-text-primary">{{ struct_card.tick.value }}</p>
      <div class="labels is-flex">
        <span
          v-for="(is_active, tag) in struct_card.tags"
          v-bind:key="tag"
          class="tag is-lowercase ml-2 is-clickable"
          v-bind:class="is_active ? 'is-primary' : 'is-white'"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { StructCard } from "@/types/struct_card";
import { PropType } from "@vue/runtime-core";
export default {
  props: {
    struct_card: {
      required: true,
      type: Object as PropType<StructCard>,
    },
  },
};
</script>

<style lang="scss">
@import "../assets/global.scss";
span.tag {
  border-width: 1px;
  border-color: $grey-dark;
  border-style: solid;
}
</style>
