import axios from 'axios';
import React, { useState } from 'react';
import s from './A_Action_Icon.module.scss'

const A_Action_Icon = ({ icon_src_default, icon_src_hover, icon_src_active, users_count, updateCount }) => {
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

export default A_Action_Icon;
