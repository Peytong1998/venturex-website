"use client"

import { useEffect } from 'react'

interface CalendlyWidgetProps {
  url: string
  className?: string
  style?: React.CSSProperties
}

export default function CalendlyWidget({ url, className = "", style = {} }: CalendlyWidgetProps) {
  useEffect(() => {
    // Load Calendly script if not already loaded
    if (!document.querySelector('script[src*="calendly.com"]')) {
      const script = document.createElement('script')
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true
      document.head.appendChild(script)
    }
  }, [])

  return (
    <div 
      className={`calendly-inline-widget ${className}`}
      data-url={url}
      style={{
        minHeight: '800px',
        height: '800px',
        width: '100%',
        ...style
      }}
    />
  )
}
