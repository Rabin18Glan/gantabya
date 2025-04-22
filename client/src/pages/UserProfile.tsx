import withAuth from '@/components/hoc/withAuth'
import React from 'react'

function UserProfile() {
  return (
    <div>UserProfile</div>
  )
}

const ProtectedUserProfile = withAuth(UserProfile);

export default ProtectedUserProfile