
export const firstNameFValidator = {
  required: true,
  maxLength: {
    value: 60,
    message: "El nombre debe ser menor a 60 caracteres*",
  },
  pattern: {
    value: /^[a-záéíóú '-]+$/i,
    message: "Nombre inválido*"
  }
}

export const lastNameFValidator = {
  required: false,
  maxLength: {
    value: 60,
    message: "El apellido debe ser menor a 60 caracteres*",
  },
  pattern: {
    value: /^[a-záéíóú '-]+$/i,
    message: "Apellido inválido*"
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
    value: /^(?=.*[A-Za-z])[A-Za-z@$!%*#?&\d]{8,}$/,
    message: "Tu contraseña es insegura, prueba a usar mayúsculas, minúsculas y números*"
  }
}

export const codeFValidator = {
    required: true,
    pattern: {
      value: /^(admin)?[A-Za-z\d]{12}$/i,
      message: "Rectifica tu código de invitación*"
    }
}