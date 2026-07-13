"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/Button";
import { FormField, TextInput } from "../ui/FormField";
import {
  EMAIL_PATTERN,
  MIN_PASSWORD_LENGTH,
  settingsValidationMessages,
} from "../../lib/validation";
import type { SettingsFormValues } from "../../types/settings";

const defaultValues: SettingsFormValues = {
  fullName: "",
  email: "",
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
};

async function saveSettings(_data: SettingsFormValues): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 800));
}

export function SettingsForm() {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<SettingsFormValues>({ defaultValues, mode: "onBlur" });

  async function onSubmit(data: SettingsFormValues) {
    setSuccessMessage(null);
    await saveSettings(data);
    setSuccessMessage("Your settings have been saved successfully.");
    reset({ ...data, currentPassword: "", newPassword: "", confirmPassword: "" });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <FormField id="fullName" label="Full Name" error={errors.fullName?.message}>
        <TextInput
          id="fullName"
          type="text"
          autoComplete="name"
          hasError={Boolean(errors.fullName)}
          describedBy={errors.fullName ? "fullName-error" : undefined}
          {...register("fullName", { required: settingsValidationMessages.required })}
        />
      </FormField>

      <FormField id="email" label="Email" error={errors.email?.message}>
        <TextInput
          id="email"
          type="email"
          autoComplete="email"
          hasError={Boolean(errors.email)}
          describedBy={errors.email ? "email-error" : undefined}
          {...register("email", {
            required: settingsValidationMessages.required,
            pattern: {
              value: EMAIL_PATTERN,
              message: settingsValidationMessages.email,
            },
          })}
        />
      </FormField>

      <fieldset className="space-y-5 rounded-xl border border-slate-100 bg-slate-50/50 p-4">
        <legend className="px-1 text-sm font-medium text-slate-900">
          Change password
        </legend>

        <FormField
          id="currentPassword"
          label="Current Password"
          error={errors.currentPassword?.message}
        >
          <TextInput
            id="currentPassword"
            type="password"
            autoComplete="current-password"
            hasError={Boolean(errors.currentPassword)}
            describedBy={
              errors.currentPassword ? "currentPassword-error" : undefined
            }
            {...register("currentPassword", {
              required: settingsValidationMessages.required,
            })}
          />
        </FormField>

        <FormField
          id="newPassword"
          label="New Password"
          hint={`Minimum ${MIN_PASSWORD_LENGTH} characters`}
          error={errors.newPassword?.message}
        >
          <TextInput
            id="newPassword"
            type="password"
            autoComplete="new-password"
            hasError={Boolean(errors.newPassword)}
            describedBy={
              errors.newPassword
                ? "newPassword-error"
                : "newPassword-hint"
            }
            {...register("newPassword", {
              required: settingsValidationMessages.required,
              minLength: {
                value: MIN_PASSWORD_LENGTH,
                message: settingsValidationMessages.minPassword,
              },
            })}
          />
        </FormField>

        <FormField
          id="confirmPassword"
          label="Confirm Password"
          error={errors.confirmPassword?.message}
        >
          <TextInput
            id="confirmPassword"
            type="password"
            autoComplete="new-password"
            hasError={Boolean(errors.confirmPassword)}
            describedBy={
              errors.confirmPassword ? "confirmPassword-error" : undefined
            }
            {...register("confirmPassword", {
              required: settingsValidationMessages.required,
              validate: (value) =>
                value === getValues("newPassword") ||
                settingsValidationMessages.passwordMismatch,
            })}
          />
        </FormField>
      </fieldset>

      <Button isLoading={isSubmitting}>Save changes</Button>

      {successMessage && (
        <p
          role="status"
          aria-live="polite"
          className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700"
        >
          {successMessage}
        </p>
      )}
    </form>
  );
}
