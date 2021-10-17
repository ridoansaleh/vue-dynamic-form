<template>
  <h1>{{ title }}</h1>
  <form @submit.prevent="onSubmit">
    <component
      v-for="field in fields"
      :key="field.name"
      :is="field.type"
      v-bind="field"
    ></component>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
import { defineComponent } from "vue";
import { useForm } from "vee-validate";
import TextField from "./TextField.vue";
import RadioField from "./RadioField.vue";
import DatePickerField from "./DatePickerField.vue";
import TextAreaField from "./TextAreaField.vue";
import SelectField from "./SelectField.vue";
import CheckboxField from "./CheckboxField.vue";
import generateFormSchema from "../form-schema";

export default defineComponent({
  name: "DynamicForm",
  props: {
    fields: {
      type: Object,
      required: true,
    },
    title: String,
  },
  components: {
    TextField,
    RadioField,
    DatePickerField,
    TextAreaField,
    SelectField,
    CheckboxField,
  },
  setup(props) {
    const formDefaultValues = props.fields.reduce(
      (obj, item) => ({
        ...obj,
        [item.name]: item.defaultValue,
      }),
      {}
    );
    const formSchema = generateFormSchema(props.fields);

    const { handleSubmit } = useForm({
      initialValues: formDefaultValues,
      validationSchema: formSchema,
    });

    const onSubmit = handleSubmit((values) => console.log(values));

    return {
      onSubmit,
    };
  },
});
</script>

<style>
h1 {
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: auto;
}

.input-container {
  margin-bottom: 15px;
}

.input-error {
  font-size: 12px;
  color: #f15f5f;
  margin-top: 5px;
}
</style>
