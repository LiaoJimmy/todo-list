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
      <el-input
        placeholder="Search for items"
        v-model="search"
      />
      <el-radio-group v-model="filterChecked">
        <el-radio :label="ALL">All</el-radio>
        <el-radio :label="CHECKED">Checked</el-radio>
        <el-radio :label="NOT_CHECKED">Not Checked</el-radio>
      </el-radio-group>
      <el-table
        :data="filterItems"
      >
        <el-table-column
          width="125">
          <template slot-scope="scope">
            <el-checkbox
              v-model="scope.row.checked"
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
  mapGetters,
  mapMutations,
} from 'vuex';
import {
  ALL,
  CHECKED,
  NOT_CHECKED,
} from './filter-checked';
import {
  ADD_ITEM,
  EDIT_ITEM,
  DELETE_ITEM,
} from './mutation-types';
import { itemValidator } from './validatation';
import './style.scss';

export default {
  computed: {
    ...mapGetters([
      'filterItems',
    ]),
    filterChecked: {
      get() { return this.$store.state.filterChecked; },
      set(value) { this.$store.state.filterChecked = value; },
    },
    search: {
      get() { return this.$store.state.search; },
      set(value) { this.$store.state.search = value; },
    },
    ALL: { get() { return ALL; } },
    CHECKED: { get() { return CHECKED; } },
    NOT_CHECKED: { get() { return NOT_CHECKED; } },
  },
  methods: {
    ...mapMutations([
      ADD_ITEM,
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
