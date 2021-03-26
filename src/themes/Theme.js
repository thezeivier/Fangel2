import {colors, fonts} from './assets/foundations'

localStorage.setItem("mode", 0)

const mode = localStorage.mode? (localStorage.mode === "1"? true: false) :false 

console.log(mode)

const theme = {
  /*constant colors*/
  colorAlert: colors.color.danger,
  colorSuccess: colors.color.green,

  /*variable colors*/  
  background: mode? colors.background.gradientDark: colors.background.gradientLight,
  textColor: mode? colors.color.white.solid: colors.color.black.solid,
  colorbrandSolid: mode? colors.color.brand.solidDark: colors.color.brand.solidLight,
  colorBrandTransparent: mode? colors.color.brand.transparentDark: colors.color.brand.transparentLight,
  inputForm: mode? colors.color.form.transparentDark: colors.color.form.transparentLight,
  smallText: mode? colors.color.smallText.grayDark: colors.color.smallText.grayLight,
  inputPlaceholder: mode? colors.color.white.transparent: colors.color.black.transparent,

  /*Fonts*/
  primaryFont: fonts.primaryFont,
  secondaryFont: fonts.secondaryFont,
  weight: fonts.weight,
}

export default theme