export const usernameFValidator = {
  required: true,
  maxLength: {
    value: 30,
    message: "El usuario debe ser menor a 30 caracteres*",
  },
  pattern: {
    value: /^(?=.{4,}$)(?!.*[_.])(?!.*[_.]{2})[a-z0-9._]+(?<![_.])$/,
    message: "Usuario debe ser mayor a cuatro caracteres, en minúsculas y sin espacios*"
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
    value: /(?=(.[0-9]))((?=.[A-Za-z0-9])(?=.[a-z]))^.{8,}$/,
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