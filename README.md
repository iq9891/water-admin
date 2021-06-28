# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). Make sure to enable `vetur.experimental.templateInterpolationService` in settings!

### If Using `<script setup>`

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

### If Using Volar

Run `Volar: Switch TS Plugin on/off` from VSCode command palette.

### If Using Vetur

1. Install and add `@vuedx/typescript-plugin-vue` to the [plugins section](https://www.typescriptlang.org/tsconfig#plugins) in `tsconfig.json`
2. Delete `src/shims-vue.d.ts` as it is no longer needed to provide module info to Typescript
3. Open `src/main.ts` in VSCode
4. Open the VSCode command palette
5. Search and run "Select TypeScript version" -> "Use workspace version"


### 文档目录

- 路由配置，导航高亮规则
- 权限的配置
- ajax 的配置
- use 的使用
- icon
- vuex 相关

``` vue
// 官网： https://iconpark.oceanengine.com/official
// 参数： https://bytedance.feishu.cn/docs/doccnfQ9MVhtfye33SymobB5usb#bIprMt
icon 使用
import { BalanceTwo } from '@icon-park/vue-next';
import Icon from '@@utils/use/components/icon';
components: {
  BalanceTwo,
  Icon,
},
<balance-two theme="filled" size="32" fill="#17bd08" />
    <icon icon-id="29464" size="32"></icon>
```


### 待办

- 一级路径跳转
- 导航高亮匹配
- 二级导航渲染
- 头部右边
- 公共退出
- 二级三级根据权限自动匹配跳转第一个页面


### 新建项目

- 设置 `build/env` 中的字段 ***VITE_PUBLIC_PATH*** ， ***VITE_BASE_HOME*** ， ***VITE_MENU_ACTIVE***
