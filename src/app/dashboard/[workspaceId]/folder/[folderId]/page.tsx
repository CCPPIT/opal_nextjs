import { getFolderInfo } from '@/actions/workspace'
import FolderInfo from '@/components/global/folders/folder-info'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import React from 'react'

type Props = {
    params:{
        folderId:string,
        workspaceId:string
    }
}

const page = async({params}: Props) => {
    const {folderId,workspaceId}=await params
    const query=new QueryClient();
    await query.prefetchQuery({
        queryKey:['folder-info'],
        queryFn:()=>getFolderInfo(folderId)
    })

  return (
    <HydrationBoundary state={dehydrate(query)}>
        <FolderInfo folderId={folderId}/>

    </HydrationBoundary>
  )
}

export default page