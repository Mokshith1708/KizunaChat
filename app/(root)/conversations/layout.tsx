import ItemList from '@/components/shared/item-list/ItemList';
import React from 'react'

type Props = React.PropsWithChildren<{}>


const ConversationsLayout = ({children}: Props) => {
  return (
    <>
     <ItemList title='Conversations'>ConversationsPage</ItemList>
     {children}
    </>
  
  )
};

export default ConversationsLayout;