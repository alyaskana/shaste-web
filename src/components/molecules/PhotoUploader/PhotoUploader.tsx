import React, { useState, FC } from 'react';
import s from './PhotoUploader.module.scss'
import { ReactComponent as IconPhoto } from "@icons/IconPhoto.svg";
import { CardPhoto } from "@atoms/CardPhoto";

type TPhotoUploaderProps = {
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
}

export const PhotoUploader: FC<TPhotoUploaderProps> = ({ setFieldValue }) => {
  const [imgPrewiew, setImgPrewiew] = useState('')

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    let reader = new FileReader();
    if (!event.target.files) {
      return
    }
    let file = event.target.files[0];

    setFieldValue("photo", file)

    reader.onloadend = () => {
      const url = typeof (reader.result) === 'string' ? reader.result : ''
      setImgPrewiew(url);
    }

    reader.readAsDataURL(file)
  }
  return (
    <>
      <div className={s.photo_uploader}>
        <IconPhoto />
        <label className={s.label} htmlFor="photo">выберите фото</label>
        <input className={s.input} name='photo' type='file' id='photo' onChange={handleUpload} />
      </div>
      {imgPrewiew &&
        <div className={s.prewiew}>
          <CardPhoto src={imgPrewiew} />
        </div>}
    </>
  )
}