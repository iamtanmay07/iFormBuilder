import React from 'react'
import Link from 'next/link'
import { getUserForms } from '@/app/actions/getUserForms'
import { MAX_FREE_FROMS } from '@/lib/utils'
import ProgressBar from '../progressBar'
import SubscribeBtn from '@/app/subscription/SubscribeBtn'
import { auth } from '@/auth'
import { getUserSubscription } from '@/app/actions/userSubscriptions'

type Props = {}

const UpdgradeAccBtn = async (props: Props) => {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) {
    return null;
  }
  const subscription = await getUserSubscription({ userId });
  if (subscription) {
    return null;
  }
  const forms = await getUserForms();
  const formCount : number = (forms.length>=3) ? 3 : forms.length;
  const percent  = ((formCount>=3) ? 100 : (formCount / MAX_FREE_FROMS) * 100);
  
  return (
    <div className='p-4 mb-4 text-left text-xs'>
      <ProgressBar value={percent} />
      <p className='mt-2 text-white'>{formCount} out of {MAX_FREE_FROMS} forms generated.</p>
      <p className='text-white'>
        <SubscribeBtn price="price_1PGt3ySHNrXVN48gPSozPwR5" userId={userId} />
        {' '} for unlimited forms.
      </p>
    </div>
  )
}

export default UpdgradeAccBtn;