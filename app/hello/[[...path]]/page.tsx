'use client'

import { useEffect } from 'react'

export default function HelloPage() {

  useEffect(() => {
    console.log("Page CSR")
  }, []);

  return <></>
}
