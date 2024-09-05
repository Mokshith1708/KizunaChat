import { Card } from '@/components/ui/card';
import React from 'react';

type props = React.PropsWithChildren<{}>;

const ConversationContainer = ({ children }: props) => {
  return (
    <Card className='w-full h-[calc(100svh-32px)] lg:h-full p-2 flex flex-col gap-2 border-2 border-white shadow-white-lg hover:border-green-400 hover:shadow-white-2xl transition-shadow duration-300 ease-in-out'>
      {children}
    </Card>
  );
};

export default ConversationContainer;
