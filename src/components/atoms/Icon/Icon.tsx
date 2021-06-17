import React, { useState } from 'react';
import s from './ActionIcon.module.scss'

export const Icon = ({ src, srcHover, srcActive, isActive }) => {
  const [currentSrc, setCurrentSrc] = useState(src)
  console.log(isActive);
  if (isActive) {
    return (
      <div className={s.icon_wrapper} >
        <img className={s.icon} src={srcActive} alt="taste icon" />
      </div>
    )
  }

  const handleLeave = () => {
    setCurrentSrc(src)
  }
  const handleEnter = () => {
    setCurrentSrc(srcHover)
  }

  return (
    <div className={s.icon_wrapper} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <img className={s.icon} src={currentSrc} alt="taste icon" />
    </div>
  )
}

// <Action icon={<Icon src='ddd' srcHover='' />} count={ } />

// cosnt Action = ({ icon, count }) => (
//   <div className={s.action}>
//     {icon}
//     {count}
//   </div>
// )

// cosnt Likes = () => {
//   const updateCount = () => {
//     axios.post()
//   }

//   return (
//     <Action icon={<Icon src='ddd' srcHover='' />} count={count} updateCount={updateCount}/>
//   )
// }