<template>
  <el-container>
    <el-header>
      <span class="title">Todo List</span>
    </el-header>
    <el-main/>
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
