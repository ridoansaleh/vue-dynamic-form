<template>
  <div class="input-container">
    <div class="label">{{ label }}</div>
    <div class="input" v-for="option in options" :key="option">
      <input type="radio" v-model="value" :id="option" :value="option" />
      <label :for="option">{{ option }}</label>
    </div>
    <p v-if="errorMessage" class="input-error">{{ errorMessage }}</p>
  </div>
</template>

<script>
import { defineComponent, toRefs } from "vue";
import { useField } from "vee-validate";

export default defineComponent({
  name: "RadioField",
  props: {
    name: {
      type: String,
      required: true,
    },
    label: String,
    options: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const { name } = toRefs(props);
    const { value, errorMessage } = useField(name.value);

    return {
      name,
      value,
      errorMessage,
    };
  },
});
</script>

<style scoped>
.label {
  margin-bottom: 5px;
}

.input {
  display: flex;
  flex-direction: row;
}
</style>
