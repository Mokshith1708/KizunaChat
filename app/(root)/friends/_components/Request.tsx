import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import { UseMutationState } from '@/hooks/UseMutationState';
import { ConvexError } from 'convex/values';
import { Check, User, X } from 'lucide-react';
import React from 'react'
import { toast } from 'sonner';

type Props = {

    id: Id<"requests">;
    imageUrl: string;
    username: string;
    email: string;
}


const Request = ({id, imageUrl, username, email}:Props) => {

    const {mutate: denyRequest, pending: denyPending }  = UseMutationState(api.request.deny);
 
    const {mutate: accepctRequest, pending: accepctPending }  = UseMutationState(api.request.accepct);

  return (
    <Card className='w-full p-2 flex flex-row items-center justify-between gap-2'>
        <div className='flex items-centergap-4 truncate '>
            <Avatar>
                <AvatarImage src='{imageUrl}' />
                <AvatarFallback>
                <User />
                </AvatarFallback> 
            </Avatar>
            <div className='pl-4 flex flex-col truncate'><h4 className="truncate">{username}</h4>
            <p className="text-xs text-muted-foreground truncate">{email}</p></div>
        </div>
        <div className='flex items-center gap-2'>
                 <Button size="icon" disabled={denyPending || accepctPending} onClick={() => {accepctRequest({id}).then(() => {
                  toast.success("Friend Request Accepcted!")
                 }).catch((error) => {
                    toast.error(
                        error instanceof ConvexError ? error.data : "unexpected error occured"
                    );
                 });
                } }><Check /></Button>
                 <Button size="icon" disabled={denyPending || accepctPending} variant="destructive" onClick={() => {denyRequest({id}).then(() => {
                  toast.success("Friend Request Denined")
                 }).catch((error) => {
                    toast.error(
                        error instanceof ConvexError ? error.data : "unexpected error occured"
                    );
                 });
                }}>
                    <X className='h-4 w-4' /></Button>
        </div>
    </Card>
  )
}

export default Request