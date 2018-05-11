<template>
  <el-container>
    <el-header>
      <span class="title">{{ $t('title') }}</span>
      <div class="header-right">
        <el-dropdown
          @command="changeLanguageOnCommand"
          data-qa="langauge-dropdown"
        >
          <span class="el-dropdown-link">
            <span>{{ $t('changeLanguage') }}</span>
            <i class="el-icon-arrow-down el-icon--right"/>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              command="en-US"
              data-qa="enus-dropdown-item"
            >{{ $t('english') }}</el-dropdown-item>
            <el-dropdown-item
              command="zh-TW"
              data-qa="zhtw-dropdown-item"
            >{{ $t('traditionalChinese') }}</el-dropdown-item>
            <el-dropdown-item
              command="zh-CN"
              data-qa="zhcn-dropdown-item"
            >{{ $t('simplifiedChinese') }}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <i
          class="el-icon-plus"
          @click="addOnClick"
        />
      </div>
    </el-header>
    <el-main>
      <el-row>
        <el-col :sm="12">
          <el-input
            :placeholder="$t('searchPlaceholder')"
            v-model="search"
          />
        </el-col>
        <el-col :sm="12">
          <el-radio-group v-model="filterChecked">
            <el-col
              :xs="8"
              :sm="4">
              <el-radio
                :label="ALL"
                data-qa="filter-all-radio"
              >
                {{ $t('all') }}
              </el-radio>
            </el-col>
            <el-col
              :xs="8"
              :sm="5">
              <el-radio
                :label="CHECKED"
                data-qa="filter-checked-radio"
              >
                {{ $t('checked') }}
              </el-radio>
            </el-col>
            <el-col
              :xs="8"
              :sm="4">
              <el-radio
                :label="NOT_CHECKED"
                data-qa="filter-not-checked-radio"
              >
                {{ $t('notChecked') }}
              </el-radio>
            </el-col>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-table
        :data="filterItems"
      >
        <el-table-column width="125">
          <template slot-scope="scope">
            <el-checkbox
              v-model="scope.row.checked"
              data-qa="item-checkbox"
            />
          </template>
        </el-table-column>
        <el-table-column prop="item"/>
        <el-table-column :width="100 * width / 1280">
          <template slot-scope="scope">
            <a @click="editOnClick(scope)">
              <i
                class="el-icon-edit"
                data-qa="item-edit-icon"
              />
            </a>
          </template>
        </el-table-column>
        <el-table-column :width="100 * width / 1280" >
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
  computedGenerator,
  methodsGenerator,
} from 'vuex-model-helper';
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
import { supportLanguage } from '../../helper/vue-i18n/messages';
import { tItemValidator } from './validatation';
import './style.scss';

export default {
  computed: {
    ...mapGetters([
      'filterItems',
    ]),
    ...computedGenerator([
      'filterChecked',
      'search',
    ]),
    ALL: { get() { return ALL; } },
    CHECKED: { get() { return CHECKED; } },
    NOT_CHECKED: { get() { return NOT_CHECKED; } },
    width() {
      return document.body.clientWidth;
    },
  },
  created() {
    this.$i18n.locale = this.$route.name;
  },
  methods: {
    ...mapMutations([
      ...methodsGenerator([
        'filterChecked',
        'search',
      ]),
      ADD_ITEM,
      EDIT_ITEM,
      DELETE_ITEM,
    ]),
    addOnClick() {
      this.$prompt(
        this.$t('addItemDescription'), this.$t('add'),
        {
          cancelButtonText: this.$t('cancel'),
          confirmButtonText: this.$t('ok'),
          inputValidator: tItemValidator(this.$t),
        },
      ).then(({ value }) => {
        this[ADD_ITEM]({ item: value });
        this.$message({
          type: 'success',
          message: this.$t('addItemSuccessfully', { item: value }),
        });
      }).catch(() => {});
    },
    changeLanguageOnCommand(language) {
      this.$router.push(language);
    },
    deleteOnClick({ row: { index, item } }) {
      this.$confirm(
        this.$t('deleteItemDescription', { item }), this.$t('delete'),
        {
          cancelButtonText: this.$t('cancel'),
          confirmButtonText: this.$t('ok'),
          type: 'warning',
        },
      ).then(() => {
        this[DELETE_ITEM]({ index });
        this.$message({
          type: 'success',
          message: this.$t('deleteItemSuccessfully', { item }),
        });
      }).catch(() => {});
    },
    editOnClick({ row: { index, item } }) {
      this.$prompt(
        this.$t('editItemDescription'), this.$t('edit'),
        {
          cancelButtonText: this.$t('cancel'),
          confirmButtonText: this.$t('ok'),
          inputValidator: tItemValidator,
          inputValue: item,
        },
      ).then(({ value }) => {
        this[EDIT_ITEM]({ index, item: value });
        this.$message({
          type: 'success',
          message: this.$t('editItemSuccessfully', { item: value }),
        });
      }).catch(() => {});
    },
  },
  watch: {
    $route({ name }) {
      const locale = supportLanguage.find(language => language === name);
      this.$i18n.locale = locale;
    },
  },
};
</script>
