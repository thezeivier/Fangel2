export const usernameFValidator = {
  required: true,
  maxLength: {
    value: 30,
    message: "El usuario debe ser menor a 30 caracteres*",
  },
  pattern: {
    value: /^[a-z0-9_]{5,}[a-z]+[0-9]*$/,
    message: "Usuario debe ser mayor a cinco caracteres y en minúsculas*"
  }
}

export const emailFValidator = {
    required: true,
    max: 45,
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,45}$/i,
      message: "Correo electrónico inválido*",
    }
}

export const passwordFValidator = {
  required: true,
  pattern: {
    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    message: "Tu contraseña es insegura*"
  }
}

export const codeFValidator = {
    required: true,
    pattern: {
      value: /^(admin)?[A-Za-z\d]{12}$/i,
      message: "Rectifica tu código de invitación*"
    }
}