import {createSlice, PayloadAction}from "@reduxjs/toolkit"
type initialStateProps={
    workspaces:{
        type:'PERSONAL'|'PUBLIC'
        name:string
        id:string
    }[]
}
const initailState:initialStateProps={
    workspaces:[]
}
export const Workspaces=createSlice({
    name:'workspaces',
    initialState:initailState,
    reducers:{
        WORKSPACES:(state,action:PayloadAction<initialStateProps>)=>{
            return {...action.payload}

        }

    }
});
export const {WORKSPACES}=Workspaces.actions
export default Workspaces.reducer