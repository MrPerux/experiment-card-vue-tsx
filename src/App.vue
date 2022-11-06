<template>
  <div class="app">
    <div class="exploit-statuses">
      <ExploitStatusVue
        :exploit_status="first_exploit_status"
      ></ExploitStatusVue>
      <ExploitStatusVue
        :exploit_status="second_exploit_status"
      ></ExploitStatusVue>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ExploitStatusVue from "./components/ExploitStatus.vue";
import { ExploitStatus } from "./types/exploit_status";

export default defineComponent({
  name: "App",
  components: { ExploitStatusVue },
  data() {
    return {
      first_exploit_status: {
        exploitId: { name: "catch_em_all.py" },
        tick: { value: "21" },
        hasStdOut: false,
        hasStdErr: true,
      } as ExploitStatus,
      second_exploit_status: {
        exploitId: { name: "catch_em_all.py" },
        tick: { value: "22" },
        hasStdOut: true,
        hasStdErr: false,
      } as ExploitStatus,
    };
  },
});
</script>

<style lang="scss">
.app {
  display: flex;
  justify-content: center;
}
</style>
