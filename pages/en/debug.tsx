import React from 'react'
import { useRouter } from 'next/router'

function Index() {
  const router = useRouter()
  return <pre>{JSON.stringify(router, null, 2)}</pre>
}

export default Index
