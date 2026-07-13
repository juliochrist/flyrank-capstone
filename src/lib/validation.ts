export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const MIN_PASSWORD_LENGTH = 8;

export const settingsValidationMessages = {
  required: "This field is required",
  email: "Enter a valid email address",
  minPassword: `Password must be at least ${MIN_PASSWORD_LENGTH} characters`,
  passwordMismatch: "Passwords do not match",
} as const;
