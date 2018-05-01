module.exports = {
  'Title Text': (browser) => {
    browser
      .url(browser.globals.devServerURL)
      .assert.elementPresent('.title')
      .assert.containsText('.title', 'Todo List')
      .end();
  },
  'Change Language': (browser) => {
    browser
      .url(browser.globals.devServerURL)
      .assert.containsText('.el-dropdown-link > span', 'Change Language')
      .click('div[data-qa=langauge-dropdown]')
      // TODO: should add test for dropdown item
      .end();
  },
  'Add feature': (browser) => {
    browser
      .url(browser.globals.devServerURL)
      .click('.el-icon-plus')
      .assert.containsText('.el-message-box__title > span', 'Add')
      .assert.containsText('.el-message-box__message > p', 'New todo item')
      .setValue('div.el-message-box__input > div.el-input > input', 'Learn Node.js')
      .click('.el-button--primary')
      .assert.containsText('.el-message__content', 'Add new item: Learn Node.js')
      .assert.containsText('tr:nth-child(4) > td.el-table_1_column_2 > div', 'Learn Node.js')
      .assert.cssClassNotPresent('tr:nth-child(4) > td.el-table_1_column_1 > div > label > span', 'is-checked')
      .end();
  },
  'Search feature': (browser) => {
    browser
      .url(browser.globals.devServerURL)
      .setValue('div > .el-input__inner', 'HTML')
      .assert.containsText('tr:nth-child(1) > td.el-table_1_column_2 > div', 'Learn HTML')
      .assert.elementNotPresent('tr:nth-child(2) > td.el-table_1_column_2 > div')
      .assert.elementNotPresent('tr:nth-child(3) > td.el-table_1_column_2 > div')
      .end();
  },
  'Filter feature': (browser) => {
    browser
      .url(browser.globals.devServerURL)
      .assert.containsText('label[data-qa=filter-all-radio] .el-radio__label', 'All')
      .assert.containsText('label[data-qa=filter-checked-radio] .el-radio__label', 'Checked')
      .assert.containsText('label[data-qa=filter-not-checked-radio] .el-radio__label', 'Not Checked')
      .click('label[data-qa=filter-checked-radio]')
      .assert.containsText('tr:nth-child(1) > td.el-table_1_column_2 > div', 'Learn HTML')
      .assert.elementNotPresent('tr:nth-child(2) > td.el-table_1_column_2 > div')
      .assert.elementNotPresent('tr:nth-child(3) > td.el-table_1_column_2 > div')
      .click('label[data-qa=filter-not-checked-radio]')
      .assert.containsText('tr:nth-child(1) > td.el-table_1_column_2 > div', 'Learn CSS')
      .assert.containsText('tr:nth-child(2) > td.el-table_1_column_2 > div', 'Learn JavaScript')
      .assert.elementNotPresent('tr:nth-child(3) > td.el-table_1_column_2 > div')
      .click('label[data-qa=filter-all-radio]')
      .assert.containsText('tr:nth-child(1) > td.el-table_1_column_2 > div', 'Learn HTML')
      .assert.containsText('tr:nth-child(2) > td.el-table_1_column_2 > div', 'Learn CSS')
      .assert.containsText('tr:nth-child(3) > td.el-table_1_column_2 > div', 'Learn JavaScript')
      .end();
  },
  'Default items': (browser) => {
    browser
      .url(browser.globals.devServerURL)
      .assert.containsText('tr:nth-child(1) > td.el-table_1_column_2 > div', 'Learn HTML')
      .assert.containsText('tr:nth-child(2) > td.el-table_1_column_2 > div', 'Learn CSS')
      .assert.containsText('tr:nth-child(3) > td.el-table_1_column_2 > div', 'Learn JavaScript')
      .assert.cssClassPresent('tr:nth-child(1) > td.el-table_1_column_1 > div > label > span', 'is-checked')
      .assert.cssClassNotPresent('tr:nth-child(2) > td.el-table_1_column_1 > div > label > span', 'is-checked')
      .assert.cssClassNotPresent('tr:nth-child(3) > td.el-table_1_column_1 > div > label > span', 'is-checked')
      .assert.cssClassPresent('tr:nth-child(1) > td.el-table_1_column_3 > div > a > i', 'el-icon-edit')
      .assert.cssClassPresent('tr:nth-child(2) > td.el-table_1_column_3 > div > a > i', 'el-icon-edit')
      .assert.cssClassPresent('tr:nth-child(3) > td.el-table_1_column_3 > div > a > i', 'el-icon-edit')
      .assert.cssClassPresent('tr:nth-child(1) > td.el-table_1_column_4 > div > a > i', 'el-icon-delete')
      .assert.cssClassPresent('tr:nth-child(2) > td.el-table_1_column_4 > div > a > i', 'el-icon-delete')
      .assert.cssClassPresent('tr:nth-child(3) > td.el-table_1_column_4 > div > a > i', 'el-icon-delete')
      .end();
  },
  'Edit item feature': (browser) => {
    browser
      .url(browser.globals.devServerURL)
      .click('tr:nth-child(1) > td.el-table_1_column_3 > div > a > i')
      .assert.containsText('.el-message-box__title > span', 'Edit')
      .assert.containsText('.el-message-box__message > p', 'Edit todo item')
      .setValue('div.el-message-box__input > div.el-input > input', ' 5')
      .click('.el-button--primary')
      .assert.containsText('.el-message__content', 'Edit new item: Learn HTML 5')
      .assert.containsText('tr:nth-child(1) > td.el-table_1_column_2 > div', 'Learn HTML 5')
      .end();
  },
  'Delete item feature': (browser) => {
    browser
      .url(browser.globals.devServerURL)
      .click('tr:nth-child(1) > td.el-table_1_column_4 > div > a > i')
      .assert.containsText('.el-message-box__title > span', 'Delete')
      .assert.containsText(
        '.el-message-box__message > p',
        'Are you sure to delete this todo item: Learn HTML',
      )
      .click('.el-button--primary')
      .assert.containsText('.el-message__content', 'Delete item: Learn HTML')
      .assert.containsText('tr:nth-child(1) > td.el-table_1_column_2 > div', 'Learn CSS')
      .assert.containsText('tr:nth-child(2) > td.el-table_1_column_2 > div', 'Learn JavaScript')
      .end();
  },
  'Language route': (browser) => {
    browser
      .url(`${browser.globals.devServerURL}/#/en-US`)
      .assert.containsText('.title', 'Todo List')
      .url(`${browser.globals.devServerURL}/#/zh-TW`)
      .assert.containsText('.title', '待辦事項')
      .url(`${browser.globals.devServerURL}/#/zh-CN`)
      .assert.containsText('.title', '待办事项')
      .end();
  },
};
