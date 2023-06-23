import { Button } from '@mui/material'
import React from 'react'

export const TypoLink = ({text='Facebook', link=''}) => {
  return (
    <Button color='primary' href={link}>{text}</Button>
  )
}
