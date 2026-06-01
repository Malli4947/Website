import React, { useEffect } from 'react'
import { getDivision } from '../data/content.js'

/**
 * DivisionShell — wraps a division page, injecting that sector's accent colour
 * as CSS variables and updating the document title. Keeps every division page
 * visually distinct while sharing one component library.
 */
export default function DivisionShell({ id, children }) {
  const d = getDivision(id)
  useEffect(() => {
    document.title = `${d.name} · Aerovexa Exim Private Limited`
    return () => { document.title = 'Aerovexa Exim Private Limited' }
  }, [d.name])

  return (
    <div
      style={{
        '--accent': d.color,
        '--accent-deep': d.colorDeep,
        '--accent-soft': d.colorSoft,
      }}
    >
      {children}
    </div>
  )
}
