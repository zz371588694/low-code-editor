/*
 * @Author: zhuzhan && zz.209218@sieyuan.com
 * @Date: 2024-09-06 16:27:09
 * @LastEditors: zhuzhan && zz.209218@sieyuan.com
 * @LastEditTime: 2024-09-09 19:33:25
 * @FilePath: /sy-low-code-ediotr/src/components/renderComponent/renderTag.jsx
 * @Description:
 *
 * Copyright (c) 2024 by zhuzhan, All Rights Reserved.
 */
import { defineComponent, toRefs } from "vue";
import { renderComponentHandler } from "./utils/render-component.jsx";
import { useAPIStore } from "@/stores/api.js";

export default defineComponent({
	name: "render-tag",
	props: {
		tag: {
			type: Object,
			default: () => null,
		},
	},
	setup(props) {
		const { tag } = props;
		// console.log(tag);
		if (tag) {
		}
		// return () => <div>123</div>;
	},
});
