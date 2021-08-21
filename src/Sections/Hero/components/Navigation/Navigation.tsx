import { Popover } from '@headlessui/react';
import { useState } from 'react';
import { usePopper } from 'react-popper';

// icons
import {
  UilBars,
  UilInfoCircle,
  UilVideo,
  UilCommentQuestion,
} from '@iconscout/react-unicons';

// styles
import popoverStyle from './Navigation.module.scss';

const Navigation = () => {
  const [referenceElement, setReferenceElement] = useState(null)
  const [popperElement, setPopperElement] = useState(null)
  const {styles, attributes} = usePopper(referenceElement, popperElement, {
    placement: 'bottom-start',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 20],
        }
      }
    ]
  })
  attributes.popper !== undefined && (attributes.popper.placement = 'bottom-start');

  return (
    <Popover style={{zIndex: 10}}>
      <Popover.Button ref={setReferenceElement as any} className={popoverStyle.popover_button}>
        <UilBars />
      </Popover.Button>
      <Popover.Panel
        ref={setPopperElement as any}
        className={popoverStyle.popover_container}
        style={styles.popper}
        {...attributes.popper}
      >
        <ul className={popoverStyle.nav_list}>
          {/* The event */}
          <li>
            <button className={popoverStyle.nav_button}>
              <div className={popoverStyle.nav_icon_container}>
                <UilInfoCircle />
              </div>
              <div className={popoverStyle.nav_button_text}>
                <span>
                  The event
                </span>
                <span>
                  Learn more about the event
                </span>
              </div>
            </button>
          </li>
          {/* Video Tutorial */}
          <li>
            <button className={popoverStyle.nav_button}>
              <div className={popoverStyle.nav_icon_container}>
                <UilVideo />
              </div>
              <div className={popoverStyle.nav_button_text}>
                <span>
                  Participation tutorial
                </span>
                <span>
                  Watch a video tutorial
                </span>
              </div>
            </button>
          </li>
          {/* FAQ */}
          <li>
            <button className={popoverStyle.nav_button}>
              <div className={popoverStyle.nav_icon_container}>
                <UilCommentQuestion />
              </div>
              <div className={popoverStyle.nav_button_text}>
                <span>
                  FAQ
                </span>
                <span>
                  Questions and answers
                </span>
              </div>
            </button>
          </li>
          {/* Sign in */}
          <li>
            <form className={popoverStyle.signin_form}>
              <h2>Sign In</h2>
              <input type="text" />
              <input type="password" />
              <button>submit</button>
            </form>
          </li>
        </ul>
      </Popover.Panel>
    </Popover>
  )
}

export default Navigation;