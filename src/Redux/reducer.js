import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name:"AppSlice",
    initialState:{
			showSearchPanel:false,
			showInfoPanel:false,
			showNotifBox:true,
			selectiveChat: undefined,
			pageChange:"Main",
			showMenu:false,
			showMore:false,
			showEmoji:false,
			showChatMenu:false,
    },
    reducers:{
			sendMessage:(state,action) => {
				const date = new Date()

				state.selectiveChat.messages = [...state.selectiveChat.messages,{ content: action.payload, time: date.getHours()+":"+date.getMinutes(), isMyMessage: true },]
			},
			showSearchPanel:(state,action) => {
				state.showSearchPanel = !state.showSearchPanel;
				state.showInfoPanel = false;
			},
			showInfoPanel:(state,action) => {
				state.showInfoPanel = !state.showInfoPanel;
				state.showSearchPanel = false
			},
			closeNotifBox:(state,action) => {state.showNotifBox = false},
			selectiveChat:(state,action) => {state.selectiveChat = action.payload},
			pageChange:(state,action) => {state.pageChange = action.payload},
			showMenu:(state,action) => {
				state.showMenu = !state.showMenu;
				state.showChatMenu = false;
				state.showMore = false;

			},
			mainClick:(state,action) => {
				state.showMenu = false;
				state.showChatMenu = false;
				state.showMore = false;
			},
			showMore:(state,action)=>{
				state.showMore = !state.showMore;
				state.showMenu = false;
				state.showChatMenu = false;
			},
			showEmoji:(state,action) => {
				state.showEmoji = !state.showEmoji;
				state.showMenu = false;
				state.showChatMenu = false;
				state.showMore = false;
			},
			showChatMenu:(state,action) =>{
				state.showChatMenu = !state.showChatMenu;
				state.showMenu = false;
				state.showMore = false;
			 }
    }
})

export const {
	sendMessage,
	showSearchPanel,
	showInfoPanel,
	closeNotifBox,
	selectiveChat,
	pageChange,
	showMenu,
	mainClick,
	showMore,
	showEmoji,
	showChatMenu
	} = appSlice.actions
export default appSlice.reducer 
