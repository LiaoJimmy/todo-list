import {
  Button,
  Checkbox,
  Col,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Header,
  Input,
  Main,
  Message,
  MessageBox,
  Radio,
  RadioGroup,
  Row,
  Table,
  TableColumn,
} from 'element-ui';
import en from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';

locale.use(en);

const init = (vue) => {
  vue.use(Button);
  vue.use(Checkbox);
  vue.use(Col);
  vue.use(Container);
  vue.use(Dropdown);
  vue.use(DropdownItem);
  vue.use(DropdownMenu);
  vue.use(Header);
  vue.use(Input);
  vue.use(Main);
  vue.use(Radio);
  vue.use(RadioGroup);
  vue.use(Row);
  vue.use(Table);
  vue.use(TableColumn);

  const Vue = vue;
  Vue.prototype.$message = Message;
  Vue.prototype.$confirm = MessageBox.confirm;
  Vue.prototype.$prompt = MessageBox.prompt;
};

export default {
  init,
};
