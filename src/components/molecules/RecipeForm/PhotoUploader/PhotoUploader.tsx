import React, { useState } from 'react';
import s from './PhotoUploader.module.scss'
import { ReactComponent as IconPhoto } from "@icons/IconPhoto.svg";
import { CardPhoto } from "@atoms/CardPhoto";

export const PhotoUploader = () => {
  const [imgPrewiew, setImgPrewiew] = useState('')

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    let reader = new FileReader();
    if (!event.target.files) {
      return
    }
    let file = event.target.files[0];

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
        <label className={s.label} htmlFor="upload-photo">загрузить фото</label>
        <input className={s.input} type="file" name="photo" id="upload-photo" onChange={handleUpload} />
      </div>
      {imgPrewiew &&
        <div className={s.prewiew}>
          <CardPhoto src={imgPrewiew} />
        </div>}
      {/* <img src={imgPrewiew} className={s.prewiew} /> */}
    </>
  );
};