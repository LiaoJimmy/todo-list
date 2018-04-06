import {
  Button,
  Container,
  Header,
} from 'element-ui';

export const importer = (vue) => {
  vue.use(Button);
  vue.use(Container);
  vue.use(Header);
};

export default {
  importer,
};
