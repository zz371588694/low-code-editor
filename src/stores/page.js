/*
 * @Author: zhuzhan && zz.209218@sieyuan.com
 * @Date: 2024-04-26 15:14:19
 * @LastEditors: zhuzhan && zz.209218@sieyuan.com
 * @LastEditTime: 2024-04-29 09:57:06
 * @FilePath: /low-code-editor/src/stores/page.js
 * @Description:
 *
 * Copyright (c) 2024 by zhuzhan, All Rights Reserved.
 */
import { ref } from "vue";
import { defineStore } from "pinia";

export const usePageStore = defineStore("page", () => {
	const page = ref({
		type: "page",
		title: "",
		backgroundImage: "",
		backgroundColor: "",
		children: [],
		dataSource: [],
	});

	function renderPage() {
		const { children } = page;
		children.forEach(child => {});
	}

    function renderComponent(){
        
    }

	function addEl() {}

	function removeEl() {}

	function modifyEl() {}

	return { page, renderPage, addEl, removeEl, modifyEl };
});
