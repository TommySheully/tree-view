import { cva } from 'class-variance-authority'

export const messageVariants = cva('', {
  variants: {
    type: {
      error: 'text-pure-red',
      hint: 'text-inherit',
    },
    inputSize: {
      sm: 'regular-table-base mt-2 px-[10px]',
      md: 'regular-table-base px-4',
      lg: 'regular-m px-4',
      xl: 'regular-m px-4',
    },
  },
  defaultVariants: {
    inputSize: 'lg',
  },
})
