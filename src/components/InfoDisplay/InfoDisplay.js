import React from 'react';
import { useSelector } from 'react-redux';

// Style
import infoStyle from './InfoDisplay.module.scss';

const InfoDisplay = ({left, title, img, altText, description}) => {
    const isMobile = useSelector(state => state.workspace.isMobile)
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
            {
                !isMobile && (
                    <div className={infoStyle.imageContainer}>
                        <img className={infoStyle.image} src={img} alt={altText} />
                    </div>
                )
            }
        </div>
    );
    return (
        <div className={infoStyle.container}>
            { comp }
        </div>
    );
}

export default InfoDisplay;
