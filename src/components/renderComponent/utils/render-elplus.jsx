/*
 * @Author: zhuzhan && zz.209218@sieyuan.com
 * @Date: 2024-09-02 10:49:26
 * @LastEditors: zhuzhan && zz.209218@sieyuan.com
 * @LastEditTime: 2024-09-18 20:23:11
 * @FilePath: /sy-low-code-ediotr/src/components/renderComponent/utils/render-elplus.jsx
 * @Description:
 *
 * Copyright (c) 2024 by zhuzhan, All Rights Reserved.
 */
import { resolveComponent, reactive, ref, inject, provide, toRefs } from "vue";
import { getPositionCss, getCustomCss } from "./css-handler";
import { uniqueId } from "lodash";

const renderElComponent = (tag, apis, apiCollect) => {
	const { tagName, props, children, position, customStyle, slots, data } = tag;
	if (!tagName) {
		return;
	}

	const component = resolveComponent(tagName);

	//对props进行过滤
	const validProps = {};
	Object.keys(props).filter(key => {
		if (props[key] !== "") {
			validProps[key] = props[key];
		}
	});

	//设置位置样式
	const positionCss = getPositionCss(position);

	//设置自定义样式
	const customCss = getCustomCss(customStyle);

	//与自定义样式合并
	const css = {
		...positionCss,
		...customCss,
	};
	const dataBind = {};
	const dataVal = ref([]);
	//数据处理
	if (data) {
		if (data?.initAPI) {
			//给组件生成唯一id
			const id = tagName + uniqueId();

			//寻找匹配的API
			const { bindProp } = data.initAPI;
			const { key, type } = bindProp;
			collectRequest(apis, data.initAPI, apiCollect, {
				id,
				dataVal,
			});
			dataBind[key] = dataVal.value;
		}
	}
	if (children) {
		return (
			<component {...validProps} style={css} {...dataBind}>
				{children &&
					children.map(child => {
						return renderElComponent(child, apis, apiCollect);
					})}
				{slots &&
					slots.map(slot => {
						return slot.value;
					})}
			</component>
		);
	}
	return (
		<component {...validProps} style={css} {...dataBind}>
			{slots &&
				slots.map(slot => {
					return slot.value;
				})}
		</component>
	);
};

//收集数据绑定
const collectRequest = (apis, apiInfo, apiCollect, componentRef) => {
	const { apiId, bindProp, param } = apiInfo;
	const matchedAPI = apis.find(api => {
		return api.id === apiId;
	});
	if (!matchedAPI) {
		return;
	}

	const { method, url } = matchedAPI;
	if (apiCollect?.[apiId]) {
		apiCollect[apiId].refs.push({ ...componentRef });
	} else {
		const temp = {
			method,
			url,
			refs: [{ ...componentRef,param }],
		};

		apiCollect[apiId] = temp;
	}
};

const renderElComponents = {
	"el-button": (component, allProperty) => {
		const { label, props, customStyle, internalStyle, events } = allProperty;
		//内部固定样式列表

		const positionCss = getPositionCss(internalStyle);

		//自定义样式处理
		const mergeCss = {
			...positionCss,
			...customStyle,
		};

		//事件处理
		// if(events.length > 0){

		// }

		//原型按钮下，不显示文字
		return <component {...props}>{!props.circle && label}</component>;
	},
	"el-select": (component, allProperty) => {
		const { label, props, customStyle, internalStyle, events, children } = allProperty;
		const internalAvailable = getAvailableCss(internalStyle);
		const css = {
			position: "absolute",
			...internalAvailable,
		};

		return (
			<component {...props} style={css}>
				{children.map(child => {
					const { tagName, data } = child;
					const childComponent = resolveComponent(tagName);
					return data.map(item => {
						const { label, value } = item;
						return <childComponent label={label} value={value}></childComponent>;
					});
				})}
			</component>
		);
	},
	// "el-option": (component, allProperty) => {
	// 	console.log(123);
	// },
};

export default renderElComponent;
