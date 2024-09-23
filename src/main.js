/*
 * @Author: zhuzhan && zz.209218@sieyuan.com
 * @Date: 2024-04-26 10:30:09
 * @LastEditors: zhuzhan && zz.209218@sieyuan.com
 * @LastEditTime: 2024-09-05 11:28:43
 * @FilePath: /sy-low-code-ediotr/src/main.js
 * @Description:
 *
 * Copyright (c) 2024 by zhuzhan, All Rights Reserved.
 */
import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "element-plus/dist/index.css";
import ElementPlus from "element-plus";

import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ElementPlus);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component);
}

app.mount("#app");
