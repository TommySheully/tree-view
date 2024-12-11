import { cva } from 'class-variance-authority'

export const labelVariants = cva('group-hover:text-transparent-base-80', {
  variants: {
    inputSize: {
      sm: 'regular-table-base',
      md: 'regular-table-base',
      lg: 'regular-m',
      xl: 'regular-m',
    },
  },
  defaultVariants: {
    inputSize: 'lg',
  },
})
