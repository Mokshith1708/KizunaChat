"use client";
import ConversationFallback from '@/components/shared/conversation/ConversationFallback'
import ItemList from '@/components/shared/item-list/ItemList'
import React from 'react'
import AddfriendDialog from './_components/AddfriendDialog'
import { api } from '@/convex/_generated/api';
import { useQuery } from 'convex/react';
import { Loader2 } from 'lucide-react';
import Request from './_components/Request'
import { BeatLoader } from 'react-spinners';

type Props = {}

const FriendsPage = (props: Props) => {
  
const requests = useQuery(api.requests.get)
  return (
    <>
      <ItemList title = "Friends" action=
      {<AddfriendDialog />}>
        { 
          requests ? ( requests.length === 0) ? (
        <p className='w-full h-full flex items-center justify-center'>No friend requests found </p> ): (
          requests.map((request) => {
            return (< Request key={request.request._id} 
                            id={request.request._id}
                            imageUrl={request.sender.imageUrl} 
                            username={request.sender.username} 
                            email={request.sender.email} />
          );
          })
        )
       :
      ( <BeatLoader color="#ffffff"  size={20} />
        )} </ItemList>
      <ConversationFallback />
    </>
  )
}

export default FriendsPage