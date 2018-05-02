export const toUpperCaseUnderline = text => text.match(/([A-Z]?[a-z0-9]+)/g).map(item => item.toUpperCase()).join('_');

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
