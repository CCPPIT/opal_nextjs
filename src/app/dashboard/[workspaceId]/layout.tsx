
import { getNotifications, onAuthenticateUser } from '@/actions/user'
import { getWorkSpaces, verifyAccessToWorkspace } from '@/actions/workspace'
import GloBalHeader from '@/components/global/global-header'
import SideBar from '@/components/global/sidebar'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {
    children:React.ReactNode,
    params:{workspaceId:string}
}

const Layout =async ({children,params}: Props) => {
  const { workspaceId } = await params;

  const auth=await onAuthenticateUser();
  if(!auth.user?.workspace)redirect(`/auth/sign-in`);
  if(!auth.user.workspace.length)redirect(`/auth/sign-in`);
  const hasAccess=await verifyAccessToWorkspace(workspaceId);
  if(hasAccess.status !== 200){
    redirect(`/dashboard/${auth.user.workspace[0].id}`);
  }
  if(!hasAccess.data?.workspace)return null;
  const query=new QueryClient();
  await query.prefetchQuery({
    queryKey:['user-workspaces'],
    queryFn:()=>getWorkSpaces()
  })
  await query.prefetchQuery({
    queryKey:['user-notifications'],
    queryFn:()=>getNotifications()
  })

  return (
    <HydrationBoundary state={dehydrate(query)}>

    
    <div className='flex w-screen h-screen'>
        <SideBar activeWorkspaceId={workspaceId}/>
        <div className='w-full pt-28 p-6 overflow-y-scroll overflow-x-hidden'>
          <GloBalHeader workspace={hasAccess.data.workspace}/>
            <div className='mt-4'>
            {children}

            </div>

        </div>
        
        </div>
        </HydrationBoundary>
  )
}

export default Layout