'use client'

import type { Lead } from '@/payload-types'
import { RowLabelProps, useRowLabel } from '@payloadcms/ui'

export const FormFieldRowLabel: React.FC<RowLabelProps> = () => {
  const data = useRowLabel<NonNullable<Lead['formFields']>[number]>()
  const fieldName = data?.data?.field?.trim()

  return <div>{fieldName || 'Submitted field'}</div>
}
