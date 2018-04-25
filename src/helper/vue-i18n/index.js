import VueI18n from 'vue-i18n';
import { messages } from './messages';

const initI18n = (vue) => {
  vue.use(VueI18n);

  return new VueI18n({
    locale: 'en-US',
    messages,
  });
};

export default {
  initI18n,
};
