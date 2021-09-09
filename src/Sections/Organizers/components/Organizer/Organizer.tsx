import React from 'react';
import { Organizer as OrganizerProps } from '../../types';
import { UilLinkedin, UilFacebook, UilInstagram, UilLink } from "@iconscout/react-unicons";


// Styles
import orgStyle from './Organizer.module.scss';

const Organizer = (props: OrganizerProps) => {
  const { title, description, image, links, orientation } = props;
  return (
    <div className={`${orgStyle.container} ${orientation === 'right' && orgStyle.container_right}`}>
      <img className={`${orgStyle.image} ${orientation === 'right' && orgStyle.image_right} ${image.bg === 'light' ? orgStyle.bg_light : orgStyle.bg_dark}`} src={image.link} alt={`${title} Logo`} />
      <div className={`${orgStyle.content} ${orientation === 'right' && orgStyle.content_right}`}>
        <h1 className={orgStyle.title}> {title.toUpperCase()} </h1>
        <p className={orgStyle.description}> {description} </p>
        <div className={orgStyle.links}>
          {
            links?.map(item => (
              <a href={item.link}>
                {
                  item.icon && typeof item.icon === 'string'?
                  <img src={item.icon} alt={item.type} />
                  :
                  item.type === 'facebook'? 
                  <UilFacebook />
                  :
                  item.type === 'instagram'?
                  <UilInstagram />
                  :
                  item.type === 'linkedin'?
                  <UilLinkedin />
                  :
                  <UilLink />
                }
              </a>
              ))
          }
        </div>
      </div>
    </div>
  );
}

export default Organizer;
