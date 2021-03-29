import React, { useState } from 'react';
import s from './Cocktail.module.scss'

const A_action_icon = ({ icon_src_default, icon_src_active, users_count, updateCount }) => {
  const [isChecked, setIsChecked] = useState(false)
  const handleClick = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div className={s.action}>
      <div className={s.icon_wrapper} onClick={handleClick} >
        <img className={s.icon} src={isChecked ? icon_src_active : icon_src_default} alt="taste icon" />
      </div>
      {users_count}
    </div>
  );
};

export default A_action_icon;