/*
 * @Author: zhuzhan && zz.209218@sieyuan.com
 * @Date: 2024-06-17 13:51:55
 * @LastEditors: zhuzhan && zz.209218@sieyuan.com
 * @LastEditTime: 2024-09-06 14:57:59
 * @FilePath: /sy-low-code-ediotr/src/components/json-demo/demo.js
 * @Description: 存储文件格式定义
 *
 * Copyright (c) 2024 by zhuzhan, All Rights Reserved.
 */
//根节点
const root = {
	type: "page",
	title: "",
	backgroundImage: "",
	backgroundColor: "#fff",
	width: 1000,
	height: 600,
	tags: [],
	apis: [],
};

// const apis = [
//     {
//         url:'',
//         method:'post',
//         params:{}
//     }
// ]

//页面节点格式
const elementPlusTag = [
	{
		type: "ElementPlus",
		tagName: "el-button",
		slot: {},
		position: {
			left: 100,
			top: 100,
		},
		customStyle: {},
		props: {},
		events: [],
		data: {},
		children: [],
	},
];

//事件定义
const events = [
	{
		type: "onClick",
		actions: [],
	},
	{
		type: "onDblClick",
		actions: [],
	},
	{ type: "onMouseleave", actions: [] },
];

//执行动作定义
const actions = [
	{
		type: "apiQuery",
		api: "",
		response: {},
	},
	{
		type: "updateComponentsData",
		componentId: "",
		updateAPI: "",
	},
];

//data
const data = {
	initAPI: {},
	updateAPI: {},
};
