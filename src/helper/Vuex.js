import Vuex from 'vuex';

export const getStore = (vue) => {
  vue.use(Vuex);

  return new Vuex.Store({
    state: { },
  });
};

export default {
  getStore,
};
