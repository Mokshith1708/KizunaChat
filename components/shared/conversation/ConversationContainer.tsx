import { Card } from '@/components/ui/card'
import React from 'react'

type props = React.PropsWithChildren<{}>

const ConversationContainer = ({children}: props) => {
  return (
   <Card className='w-full h-[calc(100svh-32px)] lg:h-full p-2 flex flex-col gap-2 border-2 border-white '>{children}</Card>
  );
};

export default ConversationContainer;