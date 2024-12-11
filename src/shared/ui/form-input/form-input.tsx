import { cva, cx } from 'class-variance-authority';
import * as React from 'react';

import type { InputHTMLAttributes, ReactNode } from 'react';
import type { Control, FieldValues, Path } from 'react-hook-form';
import { Input, Size, FormFieldStyled, FormField, fieldVariants } from '@/shared/ui';
import { clsx } from 'clsx';

const inputVariants = cva('', {
  variants: {
    inputSize: {
      sm: 'h-9 pe-[38px]',
      md: 'h-11 pe-11',
      lg: 'h-[52px] pe-[46px]',
      xl: 'h-[52px] pe-[46px]',
    },
  },
  defaultVariants: {
    inputSize: 'md',
  },
});

export interface FormInputProps<FormValues extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  control: Control<FormValues>;
  name: Path<FormValues>;
  label?: string;
  hint?: string;
  icon?: ReactNode;
  mask?: (string | RegExp)[];
  inputSize?: Size;
  valueFormatter?: (value: string | Date) => string | undefined;
  onIconClick?: () => void;
  isFilter?: boolean;
  rightIcon?: ReactNode;
}

export const FormInput = <T extends FieldValues>({
  control,
  name,
  label,
  hint,
  icon,
  className,
  isFilter = false,
  onIconClick = () => {},
  onChange,
  inputSize,
  valueFormatter,
  rightIcon,
  ...restProps
}: FormInputProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => {
        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          field.onChange(event);
          if (onChange) {
            onChange(event);
          }
        };
        return (
          <FormFieldStyled
            hint={hint}
            value={field.value}
            error={fieldState.error}
            disabled={restProps?.disabled}
            fieldSize={inputSize}
            onIconClick={onIconClick}
            label={label}
            icon={icon}
            isFilter={isFilter}
            rightIcon={rightIcon}
            required={restProps.required}
          >
            <Input
              className={clsx(
                cx(fieldVariants({ inputSize }), inputVariants({ inputSize })),
                {
                  'text-pure-base outline-[1.5px]': field.value && !isFilter,
                  'outline-pure-red focus:border-b-none focus:outline-pure-red outline-1 focus:bg-transparent focus-visible:outline-1':
                    fieldState.error && !isFilter,
                  'h-auto px-0 outline-none focus:border-none focus:bg-transparent': isFilter,
                },
                className,
              )}
              {...restProps}
              {...field}
              onChange={handleChange}
              value={valueFormatter ? valueFormatter(field.value) : (field.value ?? '')}
            />
          </FormFieldStyled>
        );
      }}
    />
  );
};
