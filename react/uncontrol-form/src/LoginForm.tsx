import * as React from 'react'
import { LoginFormFields } from './types'

interface LoginFormProps {
  onSubmit: (data: LoginFormFields) => void
}

type FormFields = {
  email: HTMLInputElement,
  password: HTMLInputElement,
  remember: HTMLInputElement,
}


export default function LoginForm({ onSubmit }: LoginFormProps) {
  const handleSubmit: React.FormEventHandler<HTMLFormElement & FormFields> = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const { email, password, remember } = form

    onSubmit({
      email: email.value,
      password: password.value,
      remember: remember.checked,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Email</span>
        <input name="email" type="email" required />
      </label>
      <label>
        <span>Password</span>
        <input name="password" type="password" required />
      </label>
      <label>
        <input name="remember" type="checkbox" />
        <span>Remember me</span>
      </label>
      <button type="submit">Login</button>
    </form>
  );
}
