import React from 'react';

// styles
import buttonStyle from './NavButton.module.scss';

interface NavButtonProps {
  iconReplacement?: string
  Icon?: string
  title: string
}

const NavButton: React.FC<NavButtonProps> = (props) => {
  const { title, Icon, iconReplacement } = props;
  return (
    <button className={buttonStyle.button}>
      <div className={`${buttonStyle.icon_container} ${!!Icon && buttonStyle.with_icon_container}`}>
        { Icon ? <Icon /> : iconReplacement }
      </div>
      <span className={buttonStyle.title}>{ title }</span>
    </button>
  )
}

export default NavButton;
