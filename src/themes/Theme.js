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
    colorHoverDarkPrimary: colors.color.hover.button.dark.primary,
    colorHoverDarkSecondary: colors.color.hover.button.dark.secondary,
    colorHoverIcon: mode ? colors.color.brand.solidDark : colors.color.black.solid,
  
    /*variable colors*/  
    background: mode ? colors.background.gradientDark : colors.background.gradientLight,
    backgroundHeader : mode ? colors.background.header.dark : colors.background.header.light,
    textColor: mode ? colors.color.white.solid : colors.color.black.solid,
    textColorInvert: mode ? colors.color.black.solid : colors.color.white.solid,
    logoColor: mode ? colors.color.white.solid : colors.color.brand.solidLight,
    colorbrandSolid: mode ? colors.color.brand.solidDark : colors.color.brand.solidLight,
    colorBrandTransparent: mode ? colors.color.brand.transparentDark : colors.color.brand.transparentLight,
    inputForm: mode ? colors.color.form.transparentDark : colors.color.form.transparentLight,
    smallText: mode ? colors.color.smallText.grayDark : colors.color.smallText.grayLight,
    inputPlaceholder: mode ? colors.color.white.transparent : colors.color.black.transparent,
    cardComunity: mode ? colors.color.card.transparentDark : colors.color.card.transparentLight,
    cardScore: mode ? colors.color.scoreCard.dark : colors.color.scoreCard.light,
    cardHoverComunity: mode ? colors.color.hover.card.transparentDark : colors.color.hover.card.transparentLight,
    textButton: mode ? colors.color.black.solid : colors.color.white.solid,
    colorHoverPrimary: mode ? colors.color.hover.button.dark.primary : colors.color.hover.button.light.primary,
    colorHoverSecondary: mode ? colors.color.hover.button.dark.secondary : colors.color.card.transparentLight, //falta
    colorHoverInput: mode ? colors.color.hover.input.dark : colors.color.hover.input.light,
    colorBar: mode ? colors.color.bar.dark : colors.color.bar.light,
    colorShadow: mode ? colors.color.shadow.dark : colors.color.shadow.light,
    colorIcon: mode ? colors.color.white.solid : colors.color.brand.solidLight,
    colorLine: mode ? colors.color.line.dark : colors.color.line.light,
    colorAddCard: mode ? colors.color.hover.input.dark : colors.color.white.solid,
    colorAddCardHover: mode ? colors.color.hover.addCard.shadowDark : colors.color.hover.addCard.shadowLight,
    colorScrollCommentBar: mode ? colors.color.scrollCommentBar.dark : colors.color.scrollCommentBar.light,
    colorShadowBox: mode ? colors.color.shadowBox.gradientDark : colors.color.shadowBox.gradientLight,
    colorCommetBox: mode ? colors.color.commentBox.dark : colors.color.commentBox.light,
    colorModalBackground: mode ? colors.color.modalBackground.dark : colors.color.modalBackground.light,

    /*Fonts*/
    primaryFont: fonts.primaryFont,
    secondaryFont: fonts.secondaryFont,
    buttonFont: fonts.buttonFont,
    weight: fonts.weight,
  })
}

export default theme