export const i18nValidator = (t, validator) => (text) => {
  const result = validator(text);
  return result === true ? true : t(result);
};

export default {
  i18nValidator,
};
