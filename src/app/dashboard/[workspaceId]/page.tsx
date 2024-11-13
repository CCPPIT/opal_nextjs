import React from 'react'
import {QueryClient,HydrationBoundary, dehydrate}from "@tanstack/react-query"
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import CreateWorkspace from '@/components/global/create-workspace'
import { getAllUserVideos, getWorkspaceFolers } from '@/actions/workspace'
import CreateFolders from '@/components/global/create-folders'
import Folders from '@/components/global/folders'

type Props = {
  params:{workspaceId:string}
}

const Page =async ({params}: Props) => {
  const {workspaceId}=await params
    const query=new QueryClient()
    await query.prefetchQuery({
      queryKey:['workspace-folders'],
      queryFn:()=>getWorkspaceFolers(workspaceId)
    })
    await query.prefetchQuery({
      queryKey:['user-videos'],
      queryFn:()=>getAllUserVideos(workspaceId)
    })
  return (
    <HydrationBoundary state={dehydrate(query)}>
        <div>
            <Tabs
            defaultValue='videos'
            className='mt-6'
            >
                <div className='flex items-center justify-between w-full'>
                    <TabsList className='bg-transparent pl-0 gap-2'>
                        <TabsTrigger
                        value='videos'
                        className="p-[13px] px-6 rounded-full data-[state=active]:bg-[#252525]"
                        
                        >
                            Videos

                        </TabsTrigger>
                        <TabsTrigger
                value="archive"
                className="p-[13px] px-6 rounded-full data-[state=active]:bg-[#252525]"
              >
                Archive
              </TabsTrigger>
                    </TabsList>
                    <div className='flex gap-x-3'>
                        <CreateWorkspace/>
                        <CreateFolders workspaceId={workspaceId}/>

                    </div>

                </div>
                <section className='py-9'>
                  <TabsContent value='videos'>
                    <Folders workspaceId={workspaceId}/>

                  </TabsContent>
                </section>

            </Tabs>
        </div>

    </HydrationBoundary>
    
  )
}

export default Page