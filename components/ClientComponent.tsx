'use client'

import dynamic from 'next/dynamic'

const ClientComponent = dynamic(() => import('./ActualClientComponent'), {
  ssr: false
})

export default ClientComponent