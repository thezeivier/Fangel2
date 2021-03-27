import {colors, fonts} from './assets/foundations'

const theme = (type)=> {
  const mode = type === "light"? false: true
  return({
    /*constant colors*/
    colorAlert: colors.color.danger,
    colorSuccess: colors.color.green,
    colorBrandDark: colors.color.brand.solidDark,
    colorBrandLight: colors.color.brand.solidLight,
    colorDark: colors.color.black.solid,
    colorWhite: colors.color.white.solid,

    /* Contant hovers */
    colorHoverDarkPrimary: colors.color.hover.dark.primary,
    colorHoverDarkSecondary: colors.color.hover.dark.secondary,
  
    /*variable colors*/  
    background: mode ? colors.background.gradientDark : colors.background.gradientLight,
    textColor: mode ? colors.color.white.solid : colors.color.black.solid,
    logoColor: mode ? colors.color.white.solid : colors.color.brand.solidLight,
    colorbrandSolid: mode ? colors.color.brand.solidDark : colors.color.brand.solidLight,
    colorBrandTransparent: mode ? colors.color.brand.transparentDark : colors.color.brand.transparentLight,
    inputForm: mode ? colors.color.form.transparentDark : colors.color.form.transparentLight,
    smallText: mode ? colors.color.smallText.grayDark : colors.color.smallText.grayLight,
    inputPlaceholder: mode ? colors.color.white.transparent : colors.color.black.transparent,
    cardComunity: mode ? colors.color.card.transparentDark : colors.color.card.transparentLight,
    textButton: mode ? colors.color.black.solid : colors.color.white.solid,
    colorHoverPrimary: mode ? colors.color.hover.dark.primary : colors.color.card.transparentLight, //falta
    colorHoverSecondary: mode ? colors.color.hover.dark.secondary : colors.color.card.transparentLight, //falta

    /*Fonts*/
    primaryFont: fonts.primaryFont,
    secondaryFont: fonts.secondaryFont,
    buttonFont: fonts.buttonFont,
    weight: fonts.weight,
  })
}

export default theme