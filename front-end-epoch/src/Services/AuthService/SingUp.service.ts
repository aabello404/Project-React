interface errorType {
  name: boolean;
  nameErrorMessage: string;
  email: boolean;
  emailErrorMessage: string;
  password: boolean;
  passwordErrorMessage: string;
  repeatPassword: boolean;
  repeatPasswordErrorMessage: string;
}
export interface Message {
  isSuccess: boolean;
  Message: string;
}

export function ValidateInputs(inputs: {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
}): errorType {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let objError: errorType = {
    name: false,
    nameErrorMessage: "",
    email: false,
    emailErrorMessage: "",
    password: false,
    passwordErrorMessage: "",
    repeatPassword: false,
    repeatPasswordErrorMessage: "",
  };

  if (inputs.name == "") {
    objError = {
      ...objError,
      name: true,
      nameErrorMessage: "Missed a spot! Name",
    };
  } else {
    objError = {
      ...objError,
      name: false,
      nameErrorMessage: "",
    };
  }
  if (inputs.email === "") {
    objError = {
      ...objError,
      email: true,
      emailErrorMessage: "Missed a spot! Email",
    };
  } else if (!emailRegex.test(inputs.email)) {
    objError = {
      ...objError,
      email: true,
      emailErrorMessage: "Please enter a valid E-mail address",
    };
  } else {
    objError = {
      ...objError,
      email: false,
      emailErrorMessage: "",
    };
  }
  if (inputs.password == "") {
    objError = {
      ...objError,
      password: true,
      passwordErrorMessage: "Missed a spot! Password",
    };
  } else if (inputs.password.length < 8) {
    objError = {
      ...objError,
      password: true,
      passwordErrorMessage: "Password must contain minimum 8 characters",
    };
  } else {
    objError = {
      ...objError,
      password: false,
      passwordErrorMessage: "",
    };
  }
  if (inputs.repeatPassword === "") {
    objError = {
      ...objError,
      repeatPassword: true,
      repeatPasswordErrorMessage: "Repeat your password ",
    };
  } else if (inputs.password !== inputs.repeatPassword) {
    objError = {
      ...objError,
      repeatPassword: true,
      repeatPasswordErrorMessage: "Password did not match",
    };
  } else {
    objError = {
      ...objError,
      repeatPassword: false,
      repeatPasswordErrorMessage: "",
    };
  }
  return objError;
}

export async function CreateUser(Inputs: {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
}): Promise<Message> {
  const { name, email } = Inputs;
  const hash = Inputs.password;
  let responseMessage: Message = {
    isSuccess: false,
    Message: "Something Went Wrong",
  };
  return new Promise<Message>(async (resolve, reject) => {
    try {
      const response = await fetch("http://localhost:9000/auth/signUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, hash, name }),
      });
      const data = await response.json();
      if (response.ok) {
        sessionStorage.setItem("UserEpoch", data.access_token);
        resolve(
          (responseMessage = {
            isSuccess: true,
            Message: data.message,
          }),
        );
      } else {
        if (response.status === 404) console.log(response);
        if (response.status === 409) {
          reject(
            (responseMessage = {
              isSuccess: false,
              Message: data.message,
            }),
          );
        }
        reject(responseMessage);
      }
    } catch (error) {
      console.log(error);
    }
  });
}
