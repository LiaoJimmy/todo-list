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
        <el-table-column
          width="100">
          <template slot-scope="scope">
            <a @click="editOnClick(scope)">
              <i class="el-icon-edit"/>
            </a>
          </template>
        </el-table-column>
        <el-table-column
          width="100">
          <template slot-scope="scope">
            <a @click="deleteOnClick(scope)">
              <i class="el-icon-delete"/>
            </a>
          </template>
        </el-table-column>
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
  ADD_ITEM,
  CHECK_ITEM,
  EDIT_ITEM,
  DELETE_ITEM,
} from './mutation-types';
import { itemValidator } from './validatation';
import './style.scss';

export default {
  computed: {
    ...mapState([
      'todolist',
    ]),
  },
  methods: {
    ...mapMutations([
      ADD_ITEM,
      CHECK_ITEM,
      EDIT_ITEM,
      DELETE_ITEM,
    ]),
    addOnClick() {
      this.$prompt(
        'New todo item', 'Add',
        {
          cancelButtonText: 'Cancel',
          confirmButtonText: 'OK',
          inputValidator: itemValidator,
        },
      ).then(({ value }) => {
        this[ADD_ITEM]({ item: value });
        this.$message({
          type: 'success',
          message: `Add new item: ${value}`,
        });
      }).catch(() => {});
    },
    checkedOnChange(index) {
      this[CHECK_ITEM]({ index });
    },
    deleteOnClick({ row: { index, item } }) {
      this.$confirm(
        `Are you sure to delete this todo item: ${item}`, 'Delete',
        {
          cancelButtonText: 'Cancel',
          confirmButtonText: 'OK',
          type: 'warning',
        },
      ).then(() => {
        this[DELETE_ITEM]({ index });
        this.$message({
          type: 'success',
          message: `Delete item: ${item}`,
        });
      }).catch(() => {});
    },
    editOnClick({ row: { index, item } }) {
      this.$prompt(
        'Edit todo item', 'Edit',
        {
          cancelButtonText: 'Cancel',
          confirmButtonText: 'OK',
          inputValidator: itemValidator,
          inputValue: item,
        },
      ).then(({ value }) => {
        this[EDIT_ITEM]({ index, item: value });
        this.$message({
          type: 'success',
          message: `Edit new item: ${value}`,
        });
      }).catch(() => {});
    },
  },
};
</script>
