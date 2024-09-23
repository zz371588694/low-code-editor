/*
 * @Author: zhuzhan && zz.209218@sieyuan.com
 * @Date: 2024-06-13 14:50:08
 * @LastEditors: zhuzhan && zz.209218@sieyuan.com
 * @LastEditTime: 2024-09-18 20:57:29
 * @FilePath: /sy-low-code-ediotr/src/stores/api.js
 * @Description:
 *
 * Copyright (c) 2024 by zhuzhan, All Rights Reserved.
 */
import { defineStore } from "pinia";
import { reactive, computed, ref } from "vue";

export const useAPIStore = defineStore("API", () => {
	const apis = ref([]),
		apiRequest = ref({});

	const setApis = data => {
		apis.value = data;
	};

	const clearApis = () => {
		apis.value = [];
	};

	const getApi = apiId => {
		return apis.value.find(item => {
			if (item?.id === apiId) {
				return item;
			}
		});
	};

	return { apis, setApis, clearApis, getApi };
});
