"use client";
import { Card } from '@/components/ui/card';
import { useConversation } from '@/hooks/useConversation';
import { cn } from '@/lib/utils';
import React from 'react';

type Props = React.PropsWithChildren<{
    title: string;
    action?: React.ReactNode;
}>

const ItemList = ({ children, title, action: Action }: Props) => {
    const { isActive } = useConversation();

    return (
        <Card 
            className={cn(
                "h-full w-full p-2 rounded-r-lg rounded-l-none  border-t-2 border-b-2 border-r-2 border-white", // Base classes
                {
                    "hidden lg:flex-none lg:w-80 lg:block": isActive, // Show on large screens if active
                    "block": !isActive // Show on all screens if not active
                }
            )}
        >
            <div className='mb-4 flex items-center justify-between'>
                <h1 className='text-2xl font-semibold tracking-tight'>{title}</h1>
                {Action && Action}
            </div>
            <div className='w-full h-full flex flex-col items-center justify-start gap-4'>
                {children}
            </div>
        </Card>
    );
};

export default ItemList;
