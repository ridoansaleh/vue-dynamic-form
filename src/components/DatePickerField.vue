<template>
  <div class="input-container">
    <div class="input">
      <label :for="name">{{ label }}</label>
      <input type="date" v-model="value" :id="name" />
    </div>
    <p v-if="errorMessage" class="input-error">{{ errorMessage }}</p>
  </div>
</template>

<script>
import { defineComponent, toRefs } from "vue";
import { useField } from "vee-validate";

export default defineComponent({
  name: "DatePickerField",
  props: {
    name: {
      type: String,
      required: true,
    },
    label: String,
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
