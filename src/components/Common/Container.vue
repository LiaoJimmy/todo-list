<template>
  <el-container>
    <el-header>
      <span class="title">Todo List</span>
      <i
        class="el-icon-plus"
        @click="addOnClick"
      />
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>

<script>
import { addPromptItem } from './validatation';
import './style.scss';

export default {
  methods: {
    addOnClick() {
      this.$prompt(
        'New todo item', 'Add',
        {
          cancelButtonText: 'Cancel',
          confirmButtonText: 'OK',
          inputValidator: addPromptItem,
        },
      ).then(({ value }) => {
        this.$message({
          type: 'success',
          message: `Add new item: ${value}`,
        });
      }).catch(() => {});
    },
  },
};
</script>
