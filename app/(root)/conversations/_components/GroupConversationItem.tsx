import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Id } from '@/convex/_generated/dataModel';
import Link from 'next/link';
import React, { useState } from 'react';

type Props = {
  id: Id<"conversations">;
  name: string;
  lastMessageSender?: string;
  lastMessageContent?: string;
  unseenCount: number;
};

const GroupConversationItem = ({ id, name, lastMessageContent, lastMessageSender, unseenCount }: Props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <Link href={`/conversations/${id}`} className='w-full' onClick={handleClick}>
      <Card
        className={`p-2 flex flex-row items-center justify-between border-2 bg-grey-dark transition-transform duration-300 hover:bg-gray-600 hover:shadow-lg hover:scale-105 focus-within:ring-2 focus-within:ring-blue-500 active:border-blue-700`}
      >
        <div className='flex flex-row items-center gap-4 truncate'>
          <Avatar>
            <AvatarFallback>
              {name.charAt(0).toLocaleUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className='flex flex-col truncate'>
            <h4 className='truncate'>{name}</h4>
            {lastMessageSender && lastMessageContent ? (
              <span className='text-sm text-muted-foreground flex truncate overflow-ellipsis'>
                <p className='font-semibold'>
                  {lastMessageSender}:{' '}
                </p>
                <p className='truncate overflow-ellipsis'>
                  {lastMessageContent}
                </p>
              </span>
            ) : (
              <p className='text-sm text-muted-foreground truncate'>
                Start the conversation!
              </p>
            )}
          </div>
        </div>
        {unseenCount ? <Badge>{unseenCount}</Badge> : null}
      </Card>
    </Link>
  );
};

export default GroupConversationItem;
