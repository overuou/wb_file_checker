import React from 'react';
import './BackendCheckList.css'

const BackendCheckList = (props) => {
    return (
        <div className='main-div'>
            <h1>Итоги проверки</h1> 
            <div className='list-container'>
                <ul>
                    {/* <li>Файл: {props.response.file_name}</li>
                    <li>Размер: {props.response.size}</li>
                    <li>Тип контента: {props.response.content_type}</li> */}
                    <li>Проверка: {props.response.detail}</li>
                </ul>
            </div>
        </div>
    );
};

export default BackendCheckList;