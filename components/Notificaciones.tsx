import React from 'react'
import { useAdmin } from '../contexts/admin';
import { useUser } from '../contexts/user';

const Notificaciones = () => {

  const {admin, setAdmin} = useAdmin();
  const {user, setUser} = useUser();

  return (
    <div>{}</div>
  )
}

export default Notificaciones