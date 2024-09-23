<!--
 * @Author: zhuzhan && zz.209218@sieyuan.com
 * @Date: 2024-04-26 10:30:09
 * @LastEditors: zhuzhan && zz.209218@sieyuan.com
 * @LastEditTime: 2024-06-13 09:44:31
 * @FilePath: /low-code-editor/src/App.vue
 * @Description: 
 * 
 * Copyright (c) 2024 by zhuzhan, All Rights Reserved. 
-->
<script setup>
import { ref, h } from "vue";
import components from "/public/componentList.json";
import RenderComponent from "@components/renderComponent/renderPage.vue";
const componentList = ref(components);

const render = item => {
	const { tag } = item;
	h(item.tag);
};
</script>

<template>
	<div class="container">
		<div class="header"></div>
		<div class="content">
			<div class="aside">
				<div class="menu_list">
					<div class="menu_item" v-for="(item, index) in componentList" :key="index" @click="render(item)">
						{{ item.name }}
					</div>
				</div>
			</div>
			<div class="main">
				<render-component></render-component>
			</div>
			<div class="panel"></div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.container {
	height: 100%;
	padding: 10px;
	box-sizing: border-box;

	.header {
		height: 50px;
	}

	.content {
		height: calc(100% - 50px);
		display: flex;

		.aside {
			width: 300px;
			height: 100%;
			border: 1px solid #000;
			overflow: auto;

			.menu {
				&_list {
					display: grid;
					grid-template-columns: 130px 130px;
					grid-column-gap: 10px;
					grid-row-gap: 10px;
					padding: 10px;
				}

				&_item {
					height: 40px;
					width: 130px;
					line-height: 40px;
					text-align: center;
					border: 1px solid rgb(70, 171, 208);
					border-radius: 10px;
					font-size: 14px;

					&:hover {
						cursor: pointer;
					}
				}
			}
		}

		.main {
			width: 1200px;
			height: 100%;
		}

		.panel {
			width: 300px;
			height: 100%;
		}
	}
}
</style>
