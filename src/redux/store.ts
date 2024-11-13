"use client"

import { combineReducers } from "redux"
import WorkSpaceReducer from "./slices/workspaces"
import { configureStore } from "@reduxjs/toolkit"
import {useSelector,TypedUseSelectorHook}from "react-redux"

const rootReducer=combineReducers({
    WorkSpaceReducer

})
export const store=configureStore({
    reducer:rootReducer,
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware({
            serializableCheck:false
        })
})
export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch
export const useAppSelector:TypedUseSelectorHook<RootState>=useSelector