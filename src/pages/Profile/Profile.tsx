import { useContext } from 'react';
import UserContext from '@context/userContext'

export const Profile = () => {
  const { user } = useContext(UserContext)

  return (
    <>
      <div>
        <img src={"//localhost:3000" + user.avatar.url} alt="" />
      </div>
      <div>
        {user.user_name}
      </div>
      <div>
        {user.login}
      </div>
    </>
  );
};