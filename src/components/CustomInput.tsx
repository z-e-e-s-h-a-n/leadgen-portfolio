import React from "react";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FormField } from "./ui/form";
import { Path, UseFormReturn, FieldValues } from "react-hook-form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

type CustomInputProps<T extends FieldValues> = {
  name: Path<T>;
  label?: string;
  form: UseFormReturn<T>;
  variant?: "input" | "textarea" | "select";
  options?: string[];
} & Omit<React.ComponentPropsWithoutRef<"input">, "form" | "name">;

function CustomInput<T extends FieldValues>({
  form,
  name,
  label,
  placeholder,
  variant = "input",
  options = [],
}: CustomInputProps<T>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          {variant === "input" && (
            <FormControl>
              <Input {...field} placeholder={placeholder} />
            </FormControl>
          )}
          {variant === "textarea" && (
            <FormControl>
              <Textarea {...field} placeholder={placeholder} />
            </FormControl>
          )}
          {variant === "select" && (
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {options?.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default CustomInput;
