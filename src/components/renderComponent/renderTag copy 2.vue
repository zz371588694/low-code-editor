<!--
 * @Author: zhuzhan && zz.209218@sieyuan.com
 * @Date: 2024-04-29 16:05:42
 * @LastEditors: zhuzhan && zz.209218@sieyuan.com
 * @LastEditTime: 2024-09-06 17:23:06
 * @FilePath: /sy-low-code-ediotr/src/components/renderComponent/renderTag copy.vue
 * @Description: 
 * 
 * Copyright (c) 2024 by zhuzhan, All Rights Reserved. 
-->
<template></template>

<script lang="jsx">
import { defineComponent, resolveComponent, ref } from "vue";
import { renderComponentHandler } from "./utils/render-component.jsx";
import { useAPIStore } from "@/stores/api.js";


export default defineComponent({
	name: "render-tag",
	props: {
		tag: {
			type: Object,
			default: () => {},
		},
	},
	setup(props, ctx) {
		const { apis } = useAPIStore();

		const { tag } = props;

		const renderEl = () => {
			if (!tag) {
				return;
			}

			return renderComponentHandler(tag, apis);
		};

		return () => renderEl();
	},
});
</script>

<style lang="scss" scoped></style>
