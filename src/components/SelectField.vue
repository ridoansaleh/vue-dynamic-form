<template>
  <div class="input-container">
    <div class="input">
      <label :for="name">{{ label }}</label>
      <select v-model="value">
        <option v-for="option in options" :value="option">{{ option }}</option>
      </select>
    </div>
    <p v-if="errorMessage" class="input-error">{{ errorMessage }}</p>
  </div>
</template>

<script>
import { defineComponent, toRefs } from "vue";
import { useField } from "vee-validate";

export default defineComponent({
  name: "SelectField",
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
.input {
  display: flex;
  flex-direction: column;
}

.input > label {
  margin-bottom: 5px;
}
</style>
