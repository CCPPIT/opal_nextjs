import React from 'react'

type Props = {}

const BillingPage = (props: Props) => {
  return (
    <div className='bg-[#1D1D1D] flex flex-col gap-y-8 p-5 rounded-xl'>
        <div>
            <h2 className='text-2xl'>Current Plan</h2>
            <p className='text-[#9D9D9D]'>Your Payment History</p>
        </div>
        <div>
            <h2 className='text-2xl'>Month</h2>
            <p className='text-[#9D9D9D]'>Your Payment History</p>


        </div>
    </div>
  )
}

export default BillingPage