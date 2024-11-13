"use client"
import React from 'react'

type Props = {
    User:{
        firstname:string|null
        lastname:string|null
        image:string|null

    }|null
    id:string
    Folder:{
        id:string
        name:string
    }|null
    createdAt:Date
    title:string
    source:string
    processing:string
    workspaceId:string
}

const VideoCard = (props: Props) => {
  return (
    <div>VideoCard</div>
  )
}

export default VideoCard