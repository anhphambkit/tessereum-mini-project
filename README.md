# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Tasks
1. Using TypeScript ✔
2. Using PugHTML ✔
3. Using Vite + Vue3 ✔
4. Using Quasar ✔
5. Page show list User ✔
6. Page show detail User ✔
7. Delete + Create User ✔
8. Using GET, POST, PUT, DELETE method ✔

## Create .env file before running project
```bash
# Create .env file with configs (example):
VITE_BASE_URL=https://reqres.in/api
```

## Run unit-test
```bash
npm test
```

## How to run
Local server:
```bash
1. npm install
2. npm run dev
```

## Screenshots
<div align="center">
    <h4>List User Page</h4>
    <img width=70% alt="home" src="https://github.com/anhphambkit/tessereum-mini-project/blob/main/docs/list.png">
</div>
<div align="center">
    <h4>Detail page</h4>
    <img src="https://github.com/anhphambkit/tessereum-mini-project/blob/main/docs/detail.png" width=70% />
</div>
<div align="center">
    <h4>Create page</h4>
    <img src="https://github.com/anhphambkit/tessereum-mini-project/blob/main/docs/create.png" width=70% />
</div>
<div align="center">
    <h4>Delete Confirm</h4>
    <img src="https://github.com/anhphambkit/tessereum-mini-project/blob/main/docs/delete.png" width=70% />
</div>

## Recommended IDE Setup

- Node Env [v16.16.0]
- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).
