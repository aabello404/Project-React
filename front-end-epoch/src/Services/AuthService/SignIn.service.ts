export function ValidateInputs(inputs: { email: string; password: string }) {
  let ObjError: {
    email: boolean;
    errorEmailMessage: string;
    password: boolean;
    ErrorPasswordMessage: string;
  } = {
    email: false,
    errorEmailMessage: "",
    password: false,
    ErrorPasswordMessage: "",
  };
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (inputs.email === "") {
    ObjError = {
      ...ObjError,
      email: true,
      errorEmailMessage: "Missed a spot! Email",
    };
  } else if (!emailRegex.test(inputs.email)) {
    ObjError = {
      ...ObjError,
      email: true,
      errorEmailMessage: "Please enter a valid email address",
    };
  } else {
    ObjError = {
      ...ObjError,
      email: false,
      errorEmailMessage: "",
    };
  }
  if (inputs.password === "") {
    ObjError = {
      ...ObjError,
      password: true,
      ErrorPasswordMessage: "Missed a spot! Password",
    };
  } else if (inputs.password.length < 8) {
    ObjError = {
      ...ObjError,
      password: true,
      ErrorPasswordMessage: "Password must contain minimum 8 characters",
    };
  } else {
    ObjError = {
      ...ObjError,
      password: false,
      ErrorPasswordMessage: "",
    };
  }
  return ObjError;
}

export async function HandleSignIn(input: { email: string; password: string }) {
  let Response: {
    isSuccess: boolean;
    message: string;
    show: boolean;
  } = { isSuccess: false, message: "", show: false };

  try {
    const { email } = input;
    const hash = input.password;
    const response = await fetch("http://localhost:9000/auth/signIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, hash }),
    });
    const data = await response.json();
    if (response.ok) {
      console.log(data);
      sessionStorage.setItem("UserEpoch", data.access_token);
      Response = {
        isSuccess: true,
        message: data.message,
        show: true,
      };
    } else {
      if (response.status === 404) {
        Response = {
          isSuccess: false,
          message: data.message,
          show: true,
        };
      } else {
        Response = {
          isSuccess: false,
          message: "Something went wrong",
          show: true,
        };
      }
    }
  } catch (error) {
  } finally {
    return Response;
  }
}
