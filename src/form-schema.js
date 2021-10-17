import * as yup from "yup";

const createYupSchema = (schema, field) => {
  const {
    name,
    validation: { type, rules },
  } = field;
  if (!yup[type]) {
    return schema;
  }
  let validator = yup[type]();
  rules.forEach(({ params, type }) => {
    if (validator[type] && params) {
      validator = validator[type](...params);
    }
  });
  schema[name] = validator;
  return schema;
};

const generateFormSchema = (fields) => {
  const yupSchema = fields.reduce(createYupSchema, {});
  return yup.object().shape(yupSchema);
};

export default generateFormSchema;
