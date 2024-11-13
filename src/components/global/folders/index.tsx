"use client"
import { getWorkspaceFolers } from '@/actions/workspace'
import FolderDuotone from '@/components/icons/folder-duotone'
import { useMutationDataState } from '@/hooks/useMutationData'
import { useQueryData } from '@/hooks/useQueryData'
import { cn } from '@/lib/utils'
import { FOLDERS } from '@/redux/slices/folders'
import { ArrowRight } from 'lucide-react'
import React from 'react'
import { useDispatch } from 'react-redux'
import Folder from './folder'
import Videos from '../videos'

type Props = {
    workspaceId:string
}
export type FolderProps={
    status:number,
    data:({
        _count:{
            videos:number
        }
    }&{
        id:string
        name:string
        createdAt:Date
        workSpaceId:string |null

    })[]
}

const Folders = ({workspaceId}: Props) => {
    const dispatch=useDispatch()
    const {latestVariables}=useMutationDataState(['create-folder'])
    const {data,isFetched}=useQueryData(['workspace-folders'],
     ()=>   getWorkspaceFolers(workspaceId)

    )
    const {status,data:folders}= data as FolderProps
    if(isFetched && folders){
        dispatch(FOLDERS({folders:folders}))

    }

  return (
    <div className='flex flex-col gap-4'
    suppressHydrationWarning
    >
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>

           
            <FolderDuotone/>
            <h2 className='text-[#BDBDBD] text-xl'>Folders</h2>

        </div>
        <div className='flex items-center gap-2'>
           
            <p className='text-[#BDBDBD] text-xl'>See all</p>
            <ArrowRight color='#707070'/>


        </div>
        </div>
        <div
        className={cn(
            status!==200 && "justify-center",
            "flex items-center gap-4 overflow-x-auto w-full"
        )}
        >
            {status !==200 ?(
                <p className='text-neutral-300'>No Folders In Workspace</p>

            ):(
                <>
                {latestVariables && latestVariables.status === 'pending'&&(
                    <Folder
                    name={latestVariables.variables.name}
                    id={latestVariables.variables.id}
                    optimistic
                    />

                )}
                {folders.map((folder)=>(
                    <Folder
                    name={folder.name}
                    id={folder.id}
                    count={folder._count.videos}
                    key={folder.id}
                    />
                ))}

                </>

            )}

        </div>
        <Videos
        workspaceId={workspaceId}
        folderId={workspaceId}
        videosKey='user-videos'
        />
    </div>
  )
}

export default Folders