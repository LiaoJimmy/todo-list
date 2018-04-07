<template>
  <el-table :data="todolist">
    <el-table-column
      width="125">
      <template slot-scope="scope">
        <el-checkbox
          v-model="todolist[scope.$index].checked"
        />
      </template>
    </el-table-column>
    <el-table-column
      prop="item"
    />
  </el-table>
</template>

<script>
import { mapState } from 'vuex';
import './style.scss';

export default {
  computed: {
    ...mapState([
      'todolist',
    ]),
  },
};
</script>
