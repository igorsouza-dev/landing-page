import React from 'react'
import * as S from './styles'
import { LogoProps } from 'types/api'

const Logo = ({ alternativeText, url }: LogoProps) => (
  <S.LogoWrapper
    src={`${process.env.NEXT_PUBLIC_IMAGE_HOST}${url}`}
    alt={alternativeText}
  />
)

export default Logo
