import { FC } from 'react'
import { ReactComponent as IconPhoto } from '@icons/IconPhoto.svg'

import s from './PhotoUploader.module.scss'

type TPhotoUploaderProps = {
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
}

const name = 'photo'

export const PhotoUploader: FC<TPhotoUploaderProps> = () => {
  return (
    <>
      <div className={s.photo_uploader}>
        <label className={s.label} htmlFor={name}>
          <IconPhoto className={s.label_icon} />
        </label>
        <input className={s.photo_uploader_input} name={name} type="file" id={name} />
      </div>
    </>
  )
}
