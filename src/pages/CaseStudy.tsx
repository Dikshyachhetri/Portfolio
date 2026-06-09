import { useEffect } from 'react'

const BASE = import.meta.env.BASE_URL || '/'

export default function CaseStudy({ htmlFile }: { htmlFile: string }) {
  useEffect(() => {
    window.location.href = BASE + htmlFile
  }, [htmlFile])

  return null
}
