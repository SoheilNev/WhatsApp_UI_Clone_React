import { configureStore } from '@reduxjs/toolkit'
import appSlice from './reducer'

const store = configureStore({
	reducer:{
			appSlice: appSlice
	},
})

export default store