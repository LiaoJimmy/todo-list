<template>
  <el-container>
    <el-header>
      <span class="title">Todo List</span>
    </el-header>
    <el-main/>
    <el-table
      :data="todolist"
      style="width: 50%">
      <el-table-column
        width="125">
        <template slot-scope="scope">
          <el-checkbox
            v-model="todolist[scope.$index].checked"/>
        </template>
      </el-table-column>
      <el-table-column
        prop="item"
        width="525"/>
    </el-table>
  </el-container>
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
