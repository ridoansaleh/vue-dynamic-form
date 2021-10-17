<template>
  <DynamicForm :fields="fields" :title="title" />
</template>

<script>
import { defineComponent } from "vue";
import DynamicForm from "./components/Index.vue";
import formData from "./data.json";

export default defineComponent({
  name: "App",
  components: {
    DynamicForm,
  },
  setup() {
    return {
      fields: formData.fields,
      title: formData.title,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
