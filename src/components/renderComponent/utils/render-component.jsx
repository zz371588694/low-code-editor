/*
 * @Author: zhuzhan && zz.209218@sieyuan.com
 * @Date: 2024-06-12 16:29:05
 * @LastEditors: zhuzhan && zz.209218@sieyuan.com
 * @LastEditTime: 2024-09-18 20:48:33
 * @FilePath: /sy-low-code-ediotr/src/components/renderComponent/utils/render-component.jsx
 * @Description:
 *
 * Copyright (c) 2024 by zhuzhan, All Rights Reserved.
 */
import { resolveComponent, defineComponent, nextTick, ref } from "vue";
import { useAPIStore } from "@/stores/api";
import renderElComponent from "./render-elplus";
import { ComponentType } from "../enum";
import request from "./axios.js";

export default defineComponent({
	name: "render-component",
	props: {
		tag: {
			type: Object,
			default: () => null,
		},
	},
	setup(props) {
		const { tag } = props;

		//没有传递参数，返回空dom
		if (!tag) {
			return () => <div></div>;
		}

		const { apis } = useAPIStore();
		const apiCollect = {};

		//渲染组件
		const component = renderComponentHandler(tag, apis, apiCollect);

		nextTick(() => {
			initData(apiCollect);
		});

		return () => component;
	},
});

const renderComponentHandler = (tag, apis, apiCollect) => {
	const { type } = tag;
	let comp = null;
	switch (type) {
		//ElementPlus
		case ComponentType.ElementPlus:
			comp = renderElComponent(tag, apis, apiCollect);
			break;
	}
	return comp;
};

const initData = apiCollect => {
	Object.keys(apiCollect).forEach(key => {
		const { refs, method, url } = apiCollect[key];
		refs.forEach(item => {
			const { dataVal, param } = item;
			dataVal.value.length = 0;
			request[method](url, param).then(res => {
				const { success, data } = res;
				if (success) {
					data.forEach(d => {
						dataVal.value.push(d);
					});
				}
			});
		});
	});
};
