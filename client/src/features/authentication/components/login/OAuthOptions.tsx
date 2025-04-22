import React from 'react'
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa'

function OAuthOptions() {
  return (
    <div className="flex gap-4 text-primary">
    <FaGoogle size={30} />
    <FaGithub size={30} />
    <FaFacebook size={30} />
</div>
  )
}

export default OAuthOptions