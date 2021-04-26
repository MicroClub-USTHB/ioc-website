import React from 'react';
import { useSelector } from 'react-redux';

// Style
import infoStyle from './InfoDisplay.module.scss';

// Images
import infoDec1 from '../../media/box-dec1.svg';
import infoDec2 from '../../media/box-dec2.svg';
import infoDec3 from '../../media/box-dec3.svg';

const InfoDisplay = ({textIsLeft, title, img, altText, description}) => {
    const isMobile = useSelector(state => state.workspace.isMobile)
    let comp = (
        <div className={infoStyle.info}
            style={{
                flexDirection: textIsLeft? 'row' : 'row-reverse'
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
            {
                !isMobile && textIsLeft? (
                    <img className={`${infoStyle.dec} ${infoStyle.topRight}`} src={infoDec2} alt="" />
                    ) : (
                        <>
                            <img className={`${infoStyle.dec} ${infoStyle.bottomRight}`} src={infoDec1} alt="" />
                            <img className={`${infoStyle.dec} ${infoStyle.topLeft}`} src={infoDec3} alt="" />
                        </>
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
