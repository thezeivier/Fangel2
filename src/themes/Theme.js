import react from 'react'
import styled from 'styled-components'
import {colors, fonts} from './assets/foundations'

const theme = {
  /*constant colors*/
  colorAlert: colors.color.danger,
  colorSuccess: colors.color.green,

  /*variable colors*/  
  background: true? colors.background.gradientDark: colors.background.gradientLight,
  textColor: true? colors.color.white.solid: colors.color.black.solid,
  colorbrandSolid: true? colors.color.brand.solidDark: colors.color.brand.solidLight,
  colorBrandTransparent: true? colors.color.brand.transparentDark: colors.color.brand.transparentLight,
  inputForm: true? colors.color.form.transparentDark: colors.color.form.transparentLight,
  smallText: true? colors.color.smallText.grayDark: colors.color.smallText.grayLight,
  inputPlaceholder: true? colors.color.white.transparent: colors.color.black.transparent,

  /*Fonts*/
  primaryFont: fonts.primaryFont,
  secondaryFont: fonts.secondaryFont,
  weight: fonts.weight,
}

export default theme