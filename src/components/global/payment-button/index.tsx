import { Button } from '@/components/ui/button'
import React from 'react'
import Loader from '../loader'
import { useSubscritpion } from '@/hooks/useSubscription'

type Props = {}

const PaymentButton = (props: Props) => {
    const {isProcessing,onSubscribe}=useSubscritpion();
  return (
   <Button
   className='text-sm w-full'
   onClick={onSubscribe}
   >
    <Loader
    state={isProcessing}
    color='#000'
    >
        Upgrade
    </Loader>
   </Button>
  )
}

export default PaymentButton