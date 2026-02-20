import { useForm } from "react-hook-form";
import {
  UragakiForm,
  UragakiFormField,
  UragakiFormItem,
  UragakiFormLabel,
  UragakiFormControl,
  UragakiFormDescription,
  UragakiFormMessage,
} from "@/components/uragaki";
import { UragakiInput } from "@/components/uragaki";
import { UragakiButton } from "@/components/uragaki";
import { ComponentPreview } from "@/components/docs/component-preview";

export function FormPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-[var(--font-uragaki-heading)] text-3xl font-bold mb-2">
          フォーム (Form)
        </h1>
        <p className="text-muted-foreground">
          react-hook-form を使ったフォーム管理コンポーネントです。手描きフォント付き。
        </p>
      </div>

      <ComponentPreview
        title="基本"
        code={`<UragakiForm {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)}>
    <UragakiFormField
      control={form.control}
      name="username"
      render={({ field }) => (
        <UragakiFormItem>
          <UragakiFormLabel>ユーザー名</UragakiFormLabel>
          <UragakiFormControl>
            <UragakiInput {...field} />
          </UragakiFormControl>
          <UragakiFormDescription>表示名を入力</UragakiFormDescription>
          <UragakiFormMessage />
        </UragakiFormItem>
      )}
    />
  </form>
</UragakiForm>`}
      >
        <FormDemo />
      </ComponentPreview>
    </div>
  );
}

function FormDemo() {
  const form = useForm({
    defaultValues: { username: "" },
  });

  return (
    <UragakiForm {...form}>
      <form
        onSubmit={form.handleSubmit((data) => alert(JSON.stringify(data)))}
        className="w-[300px] space-y-4"
      >
        <UragakiFormField
          control={form.control}
          name="username"
          rules={{ required: "ユーザー名は必須です" }}
          render={({ field }) => (
            <UragakiFormItem>
              <UragakiFormLabel>ユーザー名</UragakiFormLabel>
              <UragakiFormControl>
                <UragakiInput placeholder="名前を入力..." {...field} />
              </UragakiFormControl>
              <UragakiFormDescription>
                公開される表示名です。
              </UragakiFormDescription>
              <UragakiFormMessage />
            </UragakiFormItem>
          )}
        />
        <UragakiButton type="submit">送信</UragakiButton>
      </form>
    </UragakiForm>
  );
}
