/*
 * @Author: zhuzhan && zz.209218@sieyuan.com
 * @Date: 2024-09-03 15:23:47
 * @LastEditors: zhuzhan && zz.209218@sieyuan.com
 * @LastEditTime: 2024-09-03 16:07:00
 * @FilePath: /sy-low-code-ediotr/src/components/renderComponent/utils/data.js
 * @Description:
 *
 * Copyright (c) 2024 by zhuzhan, All Rights Reserved.
 */
import axios from "axios";

function initAxios(options) {
	const instance = axios.create({
		// baseURL: options.requestPrefix,
		timeout: 30000,
		headers: {
			"Content-Type": "application/json",
			// authority: options.token,
		},
	});

	instance.interceptors.response.use(
		response => {
			return response.data;
		},
		error => {
			console.error(error.message);
		}
	);

	return instance;
}
const instance = initAxios();
const request = {
	get(url, param) {
		return instance.get(url, { param });
	},
	post(url, param) {
		return instance.post(url, param);
	},
};

export default request;
