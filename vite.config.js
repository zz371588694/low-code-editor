/*
 * @Author: zhuzhan && zz.209218@sieyuan.com
 * @Date: 2024-04-26 10:30:09
 * @LastEditors: zhuzhan && zz.209218@sieyuan.com
 * @LastEditTime: 2024-06-13 15:01:28
 * @FilePath: /low-code-editor/vite.config.js
 * @Description: 
 * 
 * Copyright (c) 2024 by zhuzhan, All Rights Reserved. 
 */
import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), vueJsx()],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
			"@components": fileURLToPath(new URL("./src/components", import.meta.url)),
			"@store":fileURLToPath(new URL("./src/stores", import.meta.url)),
		},
	},
});
