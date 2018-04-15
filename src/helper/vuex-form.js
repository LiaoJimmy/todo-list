const toUpperCaseUnderline = (string) => {
  const [first] = string.match(/([a-z0-9]+)/g);
  const rest = string.match(/([A-Z][a-z0-9]*)/g) || [];

  const result = rest.reduce((previous, current) => `${previous}_${current.toUpperCase()}`, first.toUpperCase());
  return result;
};

export const mutationGenerator = (fieldArray) => {
  let object = {};
  fieldArray.forEach((field) => {
    const mutations = {
      [`EDIT_${toUpperCaseUnderline(field)}`](state, { value }) {
        this.state[field] = value;
      },
    };
    object = { ...object, ...mutations };
  });
  return object;
};

export const computedGenerator = (fieldArray) => {
  let object = {};
  fieldArray.forEach((field) => {
    const computed = {
      [field]: {
        get() {
          return this.$store.state[field];
        },
        set(value) {
          this[`EDIT_${toUpperCaseUnderline(field)}`]({ value });
        },
      },
    };
    object = { ...object, ...computed };
  });
  return object;
};

export const methodsGenerator = fieldArray => fieldArray.map(field => `EDIT_${toUpperCaseUnderline(field)}`);

export default {
  mutationGenerator,
};
