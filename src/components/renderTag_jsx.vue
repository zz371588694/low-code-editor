<!--
 * @Author: zhuzhan && zz.209218@sieyuan.com
 * @Date: 2024-04-29 16:05:42
 * @LastEditors: zhuzhan && zz.209218@sieyuan.com
 * @LastEditTime: 2024-06-11 16:43:33
 * @FilePath: /low-code-editor/src/components/renderTag.vue
 * @Description: 
 * 
 * Copyright (c) 2024 by zhuzhan, All Rights Reserved. 
-->
<template></template>

<script lang="jsx">
import { defineComponent, h, resolveComponent, ref } from "vue";
export default defineComponent({
	name: "RenderTag",
	props: {
		tag: {
			type: String,
			required: false,
		},
	},
	setup(props, ctx) {
		const test1 = ref("1");
		const handleChange = value => {
			test1.value = value;
		};
		const tag = resolveComponent("el-select");
		return () =>
			h(
				tag,
				{ size: "large", style: "width:200px", modelValue: test1.value, "onUpdate:modelValue": handleChange },
				{
					default: () => [
						h(resolveComponent("el-option"), {
							label: "1",
							value: "1",
						}),
						h(resolveComponent("el-option"), {
							label: "2",
							value: "2",
						}),
						h(resolveComponent("el-option"), {
							label: "3",
							value: "3",
						}),
					],
				}
			);
	},
});
</script>

<style lang="scss" scoped></style>
