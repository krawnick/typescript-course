import LoginForm from "./LoginForm";
import { LoginFormFields } from "./types";
import "./styles.css";

export default function App() {
  const onSubmit = (formFields: LoginFormFields) => {
    console.log(formFields);
  };

  return (
    <div className="App">
      <h1>Hello TS React</h1>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
}
