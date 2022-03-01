<template>
  <div>
    <v-select
      placeholder="Search a stream ..."
      v-model="selected"
      :options="streamsList"
    />
  </div>
</template>

<script>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

export default {
  name: "AutoCompleteInput",
  components: {
    vSelect,
  },
  data: () => {
    return {
      selected: "",
    };
  },
  props:{
      streamsList:Array
  }
};
</script>

<style scoped>
</style>