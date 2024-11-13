import React from 'react'
import { useMutationData } from './useMutationData'
import { createFolder } from '@/actions/workspace'



export const useCreateFolders = (workspaceId: string) => {
 const {mutate}=useMutationData(
    ['create-folder'],
    ()=>createFolder(workspaceId)
 )
 const onCreateNewFolder=()=>
    mutate({name:'Untitled',id:'optimitsitc--id'})
 return{onCreateNewFolder}
}