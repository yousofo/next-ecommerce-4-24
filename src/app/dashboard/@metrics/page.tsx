import Card from '@/components/card'
import Link from 'next/link'
import React from 'react'

const Metrics = () => {
  return (
    <Card>
      <div>Metrics</div>
      <Link href="/dashboard/metrics-details" className='text-blue-400'>go to details</Link>
    </Card>
  )
}

export default Metrics