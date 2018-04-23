import { i18nValidator } from '../../helper/vue-i18n/i18n-validator';

export const itemValidator = (text) => {
  if (!text || text.trim().length <= 0) {
    return 'itemEmpty';
  } else if (text.length > 20) {
    return 'itemMoreThan20Characters';
  }

  return true;
};

export const tItemValidator = t => i18nValidator(t, itemValidator);

export default {
  itemValidator,
  tItemValidator,
};
