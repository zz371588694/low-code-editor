/*
 * @Author: zhuzhan && zz.209218@sieyuan.com
 * @Date: 2024-06-12 16:29:05
 * @LastEditors: zhuzhan && zz.209218@sieyuan.com
 * @LastEditTime: 2024-09-06 14:19:50
 * @FilePath: /sy-low-code-ediotr/src/components/renderComponent/utils/render-component.jsx
 * @Description:
 *
 * Copyright (c) 2024 by zhuzhan, All Rights Reserved.
 */
import { resolveComponent } from "vue";
import { useAPIStore } from "@/stores/api";
import renderElComponent from "./render-elplus";
import { ComponentType } from "../enum";

const renderComponentHandler = (tag, apis) => {
	const { type } = tag;
	let comp = null;
	switch (type) {
		case ComponentType.ElementPlus:
			// console.log(apis);
			comp = renderElComponent(tag, apis);
			break;
	}
	return comp;
};

export { renderComponentHandler };
