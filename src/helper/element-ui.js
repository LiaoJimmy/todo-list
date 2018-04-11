import {
  Button,
  Container,
  Checkbox,
  Header,
  Main,
  Message,
  MessageBox,
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

  const Vue = vue;
  Vue.prototype.$message = Message;
  Vue.prototype.$confirm = MessageBox.confirm;
  Vue.prototype.$prompt = MessageBox.prompt;
};

export default {
  importer,
};
