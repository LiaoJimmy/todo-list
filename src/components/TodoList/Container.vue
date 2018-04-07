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
      <el-table
        :data="todolist"
        @current-change="tableOnCurrentChange"
      >
        <el-table-column
          width="125">
          <template slot-scope="scope">
            <el-checkbox
              :checked="scope.row.checked"
              @change="checkedOnChange(scope.$index)"
            />
          </template>
        </el-table-column>
        <el-table-column
          prop="item"
        />
      </el-table>
    </el-main>
  </el-container>
</template>

<script>
import {
  mapMutations,
  mapState,
} from 'vuex';

import {
  ADD_TODO_ITEM,
  CHECK_TODO_ITEM,
} from './mutation-types';
import { addPromptItem } from './validatation';
import './style.scss';

export default {
  computed: {
    ...mapState([
      'todolist',
    ]),
  },
  methods: {
    ...mapMutations([
      ADD_TODO_ITEM,
      CHECK_TODO_ITEM,
    ]),
    addOnClick() {
      this.$prompt(
        'New todo item', 'Add',
        {
          cancelButtonText: 'Cancel',
          confirmButtonText: 'OK',
          inputValidator: addPromptItem,
        },
      ).then(({ value }) => {
        this[ADD_TODO_ITEM]({ item: value });
        this.$message({
          type: 'success',
          message: `Add new item: ${value}`,
        });
      }).catch(() => {});
    },
    checkedOnChange(index) {
      this[CHECK_TODO_ITEM]({ index });
    },
    tableOnCurrentChange() {

    },
  },
};
</script>
