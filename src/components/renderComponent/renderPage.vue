<!--
 * @Author: zhuzhan && zz.209218@sieyuan.com
 * @Date: 2024-04-26 14:29:23
 * @LastEditors: zhuzhan && zz.209218@sieyuan.com
 * @LastEditTime: 2024-09-09 19:34:11
 * @FilePath: /sy-low-code-ediotr/src/components/renderComponent/renderPage.vue
 * @Description: 
 * 
 * Copyright (c) 2024 by zhuzhan, All Rights Reserved. 
-->
<template>
	<div class="page" ref="page" :style="rootStyle">
		<render-tag v-for="(item, index) in tagList" :key="index" :tag="item"></render-tag>
	</div>
</template>
<script setup lang="jsx">
import { onMounted, ref } from "vue";
import { useAPIStore } from "@store/api";
// import components from "/public/componentList.json";
import data from "../data/2.json";
import RenderTag from "./renderTag.vue";
const page = ref(null);

//默认根元素属性
const rootStyle = ref({});

//渲染的元素列表
const tagList = ref([]);
const APIStore = useAPIStore();

//渲染页面
const renderPage = pageData => {
	if (!pageData) {
		return;
	}

	const { type, apis } = pageData;

	if (type !== "page") {
		return;
	}

	//取出配置文件中的属性进行赋值
	const { style, tags } = pageData;

	rootStyle.value = style;

	//取出节点
	tagList.value = tags;

	//将api相关的数据存储到pinia中，作为全局状态管理
	// console.log(apis);
	APIStore.setApis(apis);
};

onMounted(() => {
	renderPage(data);
	// style.value = {
	// 	overflow: "auto",
	// 	backgroundColor: "#000",
	// 	height: "100%",
	// };
});
</script>

<style lang="scss">
.page {
	position: relative;
}
</style>
