import React from 'react'
import { useAppSelector } from '../store/hooks'

function HomePage() {
  const mode = useAppSelector(state=>state.mode.mode)
  return (
    <div>{mode}</div>
  )
}

export default HomePage