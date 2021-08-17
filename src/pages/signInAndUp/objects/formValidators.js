
export const firstNameFValidator = {
  required: true,
  maxLength: {
    value: 60,
    message: "El nombre debe ser menor a 60 caracteres*",
  },
  pattern: {
    value: /^[a-záéíóúñ '-]+$/i,
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
    value: /^[a-záéíóúñ '-]+$/i,
    message: "Apellido inválido*"
  }
}

export const emailFValidator = {
    required: true,
    max: 45,
    pattern: {
      value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
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

export const otherTextValidator = {
  pattern: {
    value: /^[a-záéíóúñ0-9 ',-.]+$/i,
    message: "Campo inválido"
  }
}
