import { useState } from 'react'

export default function useUser() {
  const getUser = () => {
    const userString = localStorage.getItem('user')
    return JSON.parse(userString)
  }

  const [user, setUser] = useState(getUser())

  const saveUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user))
    setUser(user)
  }

  return {
    setUser: saveUser,
    user,
  }
}
