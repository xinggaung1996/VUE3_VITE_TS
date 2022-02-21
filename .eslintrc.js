/*
 * @Description: eslint 配置文件
 * @Version: 2.0
 * @Author: Do not edit
 * @Date: 2022-02-21 13:40:04
 * @LastEditors: XG
 * @LastEditTime: 2022-02-21 18:30:07
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  /* 指定如何解析语法。*/
  parser: "vue-eslint-parser",
  /* 优先级低于parse的语法解析配置 */
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  globals: {
    Nullable: true,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    // 此条内容开启会导致 全局定义的 ts 类型报  no-undef 错误，因为
    // https://cn.eslint.org/docs/rules/
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended", // typescript-eslint推荐规则,
    // 'prettier',
    // 'plugin:prettier/recommended',
  ],
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    // 各个规则配置含义参考http://eslint.cn/docs/rules/
    "array-bracket-spacing": ["error", "always"], // 数组紧贴括号部分不允许包含空格
    "object-curly-spacing": ["error", "always"], // 对象紧贴花括号部分不允许包含空格
    "block-spacing": ["error", "always"], // 单行代码块中紧贴括号部分不允许包含空格
    "no-multiple-empty-lines": "error", // 不允许多个空行
    "no-var": "error", // 禁止使用 var
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"], // 优先使用 interface 而不是 type
    // 关闭此规则 使用 prettier 的格式化规则， 感觉prettier 更加合理，
    // 而且一起使用会有冲突
    "vue/max-attributes-per-line": ["off"],
    // 强制使用驼峰命名
    "vue/component-name-in-template-casing": [
      "error",
      "PascalCase",
      {
        registeredComponentsOnly: false,
        ignores: [],
      },
    ],
  },
};
