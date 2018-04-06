import {
  Button,
  Container,
  Header,
  Main,
} from 'element-ui';

export const importer = (vue) => {
  vue.use(Button);
  vue.use(Container);
  vue.use(Header);
  vue.use(Main);
};

export default {
  importer,
};
