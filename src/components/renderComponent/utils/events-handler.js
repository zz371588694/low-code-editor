/*
 * @Author: zhuzhan && zz.209218@sieyuan.com
 * @Date: 2024-06-17 09:30:20
 * @LastEditors: zhuzhan && zz.209218@sieyuan.com
 * @LastEditTime: 2024-06-17 16:39:26
 * @FilePath: /low-code-editor/src/components/renderComponent/utils/events-handler.js
 * @Description:
 *
 * Copyright (c) 2024 by zhuzhan, All Rights Reserved.
 */
import { axios } from "axios";
import { ActionType } from "../enum";
const eventsType = ["onClick", "onDbClick"];

export default getEventsList = events => {
	const eventsMap = events.map(event => {
		// const {type} =
		// return {
		//     eventName:event.type,
		//     handler:()=>{
		//     }
		// }
	});
};

//执行动作处理函数
const actionHandler = action => {
	const { type } = action;
	switch (type) {
		case ActionType.APIQUERY:
			//获取api接口进行查询
            
			break;
		case ActionType.UPDATECOMPONENTDATA:
			break;
	}
};
