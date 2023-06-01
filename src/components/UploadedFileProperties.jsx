import React from 'react';

const UploadedFileProperties = (props) => {
    return (
        <div>
            <li>Файл: {props.file.name}</li>
            <li>Размер: {`${(props.file.size / 1000).toFixed(2)} Kb`}</li>
        </div>
    );
};

export default UploadedFileProperties;