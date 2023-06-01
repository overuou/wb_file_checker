import React, { useState, useRef } from 'react';
import './FileUploaderForm.css'
import UploadedFileProperties from './UploadedFileProperties';
import BackendCheckList from './BackendCheckList';

function FileUploadForm() {
  const [file, setFile] = useState(null);
  const filePicker = useRef(null)
  const [uploaded, setUploaded] = useState()

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const filePickHandler = () => {
    filePicker.current.click();
  }

  const handleSubmit = async (event) => {

    console.log(" ")
    event.preventDefault();

    const id = Date.now().toString()
    // const apiUrl = `http://46.229.215.13:8901/upload/${id}`;
    // const apiUrl = `http://127.0.0.1:8000`;
    // const apiUrl = `http://127.0.0.1:8000/api/upload/${id}`;
    // const apiUrl = `http://0.0.0.0:9000/api/upload/${id}`;
    const apiUrl = `http://0.0.0.0:8080/http://46.229.215.13:8901/upload/${id}`;
    // const apiUrl = `/api/upload/${id}`;

    const formData = new FormData();
    formData.append('file', file);

    const options = {
      method: "post",
      body: formData,
      mode: 'cors',
    };

    const res = await fetch(apiUrl, options)

    if (res.ok) {
      const data = await res.json();
      setUploaded(data);
    } else {
      throw new Error('Failed to fetch the response from the server.');
    }

  };

  return (
    <div className='divmain'>
      <h1 className='upload-header'>Загрузите файл</h1>
      <div className='form-main'>
        <button className='button-40' onClick={filePickHandler}>Выбрать</button>
        <input  ref={filePicker} className='hidden' type="file" accept='.xls, .xlsx' onChange={handleFileChange} />
      </div>
      {file && <UploadedFileProperties file={file} />}
      <div className='form-main'>
        {file && <button className='button-40' onClick={handleSubmit} type="submit">Проверить</button>}
      </div>
      {uploaded && <BackendCheckList response={uploaded} />}
    </div>
  );
}

export default FileUploadForm;
