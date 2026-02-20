import {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";

export const UragakiForm = Form;
export const UragakiFormField = FormField;
export const UragakiFormControl = FormControl;
export { useFormField as useUragakiFormField };

export function UragakiFormItem({
  className,
  ...props
}: React.ComponentProps<typeof FormItem>) {
  return (
    <FormItem
      className={cn("font-[var(--font-uragaki-body)]", className)}
      {...props}
    />
  );
}

export function UragakiFormLabel({
  className,
  ...props
}: React.ComponentProps<typeof FormLabel>) {
  return (
    <FormLabel
      className={cn("font-[var(--font-uragaki-heading)]", className)}
      {...props}
    />
  );
}

export function UragakiFormDescription({
  className,
  ...props
}: React.ComponentProps<typeof FormDescription>) {
  return (
    <FormDescription
      className={cn("font-[var(--font-uragaki-body)]", className)}
      {...props}
    />
  );
}

export function UragakiFormMessage({
  className,
  ...props
}: React.ComponentProps<typeof FormMessage>) {
  return (
    <FormMessage
      className={cn("font-[var(--font-uragaki-body)]", className)}
      {...props}
    />
  );
}
