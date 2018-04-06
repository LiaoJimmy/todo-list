import {
  Button,
  Container,
  Checkbox,
  Header,
  Main,
  Table,
  TableColumn,
} from 'element-ui';

export const importer = (vue) => {
  vue.use(Button);
  vue.use(Container);
  vue.use(Checkbox);
  vue.use(Header);
  vue.use(Main);
  vue.use(Table);
  vue.use(TableColumn);
};

export default {
  importer,
};
