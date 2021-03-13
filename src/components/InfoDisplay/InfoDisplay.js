import React from 'react';

// Style
import infoStyle from './InfoDisplay.module.scss';

const InfoDisplay = ({left, title, img, altText, description}) => {
    let comp = (
        <div className={infoStyle.info}
            style={{
                flexDirection: left? 'row' : 'row-reverse'
            }}
        >
            <div className={infoStyle.infoText}>
                <div className={infoStyle.titleContainer}>
                    <h1 className={infoStyle.title}>{title}</h1>
                </div>
                <p className={infoStyle.description}>{description}</p>
            </div>
            <div className={infoStyle.imageContainer}>
                <img className={infoStyle.image} src={img} alt={altText} />
            </div>
        </div>
    );
    return (
        <div className={infoStyle.container}>
            { comp }
        </div>
    );
}

export default InfoDisplay;
