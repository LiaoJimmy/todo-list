export const toUpperCaseUnderline = (string) => {
  const [first = ''] = string.match(/([a-z0-9]+)/g);
  const rest = string.match(/([A-Z][a-z0-9]*)/g) || [];

  return rest.reduce((previous, current) => `${previous}_${current.toUpperCase()}`, first.toUpperCase());
};

export const mutationGenerator = modalArray =>
  modalArray.reduce((previous, modal) => ({
    ...previous,
    [`EDIT_${toUpperCaseUnderline(modal)}`](state, { value }) {
      this.state[modal] = value;
    },
  }), {});

export const computedGenerator = modalArray => modalArray.reduce((previous, modal) => ({
  ...previous,
  [modal]: {
    get() {
      return this.$store.state[modal];
    },
    set(value) {
      this[`EDIT_${toUpperCaseUnderline(modal)}`]({ value });
    },
  },
}), {});

export const methodsGenerator = fieldArray => fieldArray.map(field => `EDIT_${toUpperCaseUnderline(field)}`);

export default {
  mutationGenerator,
};
