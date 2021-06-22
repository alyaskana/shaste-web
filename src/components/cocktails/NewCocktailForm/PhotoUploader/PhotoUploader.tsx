import React, { useState, FC } from 'react'
import s from './PhotoUploader.module.scss'
import { ReactComponent as IconPhoto } from '@icons/IconPhoto.svg'
import { RecipePhoto } from '@components/cocktails/RecipePhoto'

type TPhotoUploaderProps = {
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
}

const name = 'photo'

export const PhotoUploader: FC<TPhotoUploaderProps> = ({ setFieldValue }) => {
  const [imgPrewiew, setImgPrewiew] = useState('')

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader()
    if (!event.target.files) {
      return
    }
    const file = event.target.files[0]

    setFieldValue(name, file)

    reader.onloadend = () => {
      const url = typeof reader.result === 'string' ? reader.result : ''
      setImgPrewiew(url)
    }

    reader.readAsDataURL(file)
  }
  return (
    <>
      <div className={s.photo_uploader}>
        <IconPhoto />
        <label className={s.label} htmlFor={name}>
          выберите фото
        </label>
        <input className={s.input} name={name} type="file" id={name} onChange={handleUpload} />
      </div>
      {imgPrewiew && (
        <div className={s.prewiew}>
          <RecipePhoto src={imgPrewiew} />
        </div>
      )}
    </>
  )
}
