/*
 * @Author: zhuzhan && zz.209218@sieyuan.com
 * @Date: 2024-06-13 09:49:51
 * @LastEditors: zhuzhan && zz.209218@sieyuan.com
 * @LastEditTime: 2024-09-03 19:00:30
 * @FilePath: /sy-low-code-ediotr/src/components/renderComponent/utils/css-handler.js
 * @Description: 对样式值处理成直接可用的值
 *
 * Copyright (c) 2024 by zhuzhan, All Rights Reserved.
 */
const addUnitProps = ["left", "top", "width", "height"];
const handleSingleCss = (prop, val) => {
	if (!prop || typeof prop != Number) {
		return val;
	}
	if (addUnitProps.includes(prop)) {
		return val + "px";
	} else {
		return val;
	}
};

const getAvailableCss = props => {
	if (!props) {
		return;
	}
	const res = {};
	Object.keys(props).forEach(key => {
		res[key] = handleSingleCss(key, props[key]);
	});
	return res;
};

//返回处理过的位置信息相关的样式
const getPositionCss = props => {
	if (!props) {
		return null;
	}
	const css = getAvailableCss(props);
	if (css) {
		return {
			position: "absolute",
			...css,
		};
	} else {
		return null;
	}
};

//返回处理过的自定义样式
const getCustomCss = props => {
	if (!props) {
		return null;
	}
	const css = getAvailableCss(props);
	if (css) {
		return css;
	} else {
		return null;
	}
};

export { getPositionCss, getCustomCss };
