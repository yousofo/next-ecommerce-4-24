import Card from '@/components/card'
import Link from 'next/link'
import React from 'react'

const MetricsDetails = () => {
  return (
    <Card>
      <div>MetricsDetails</div>
      <Link href="/dashboard" className='text-blue-400'>go back</Link>
    </Card>
  )
}

export default MetricsDetails