import { useEffect } from 'react';
import { useStates } from '../../Hooks/useStates';

import { Menu as MenuIcon, CircleXMark as CircleXMarkIcon } from '../Icons';
import { Open } from './Open';
import { GeneralModal } from '../Modals/GeneralModal';

import styles from './styles/index.module.scss';

const Menu = props => {
    const { s, f, ls, lf } = useStates();
    
    const xpos = ls.menu?.toggle?.x || '20px';
    const ypos = ls.menu?.toggle?.y || '80px';

    useEffect(() => {
      setTimeout(() => {
        let menu = document.getElementById("toggle-menu");
        dragElement(menu);
      }, 100);
      // eslint-disable-next-line
    }, [ls.menu?.toggle, s.modals?.menu?.showNavbar, s.modals?.menu, ls.theme]);

    function dragElement(elmnt) {
      var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

      elmnt.onmousedown = dragMouseDown;
      elmnt.ontouchstart = dragMouseDown;

      function dragMouseDown(e) {
        // console.log('%c dragMouseDown', 'color: #498');
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmousemove = elementDrag;
        document.onmouseup = closeDragElement;
        
        document.ontouchmove = elementMove;
        document.ontouchend = onTouchEnd;
        
      }

      function elementMove(e) {
        e.preventDefault();
        // console.log('%c elementMove', 'color: #973');
        
        let ele_height = elmnt.offsetHeight;
        let ele_width = elmnt.offsetWidth;

        pos1 = e.changedTouches[0].pageX;
        pos2 = e.changedTouches[0].pageY;
        
        elmnt.style.top = (pos2 - (ele_height / 2)) + "px";
        elmnt.style.left = (pos1 - (ele_width / 2)) + "px";
        
      }
    
      function elementDrag(e) {
        // console.log('%c elementDrag', 'color: #168');
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      }
    
      function closeDragElement() {
        // console.log('%c closeDragElement', 'color: #783');
        document.onmouseup = null;
        document.onmousemove = null;

        document.ontouchend = null;
        document.ontouchmove = null;

        const actual_x = elmnt.offsetLeft;
        const actual_y = elmnt.offsetTop;

        
        const xpos_aux = parseInt(xpos.toString().split('px')[0]);
        const ypos_aux = parseInt(ypos.toString().split('px')[0]);

        const dif_x = Math.abs(actual_x - xpos_aux);
        const dif_y = Math.abs(actual_y - ypos_aux);
        // console.log(`%c x: ${actual_x} - ${xpos_aux} = ${dif_x}`, 'color: #760');
        // console.log(`%c y: ${actual_y} - ${ypos_aux} = ${dif_y}`, 'color: #165');

        if ((dif_x > 10) || (dif_y > 10)) {
          lf.updateOpenSidenavPos(actual_x, actual_y);
        }
        else {
          lf.updateOpenSidenavPos(actual_x, actual_y);
          f.u2('modals', 'menu','showNavbar', !s?.modals?.menu?.showNavbar);
        }

      }
      
      function onTouchEnd() {
        // console.log('%c closeDragElement', 'color: #783');
        document.onmouseup = null;
        document.onmousemove = null;

        document.ontouchend = null;
        document.ontouchmove = null;

        const actual_x = elmnt.offsetLeft;
        const actual_y = elmnt.offsetTop;

        
        const xpos_aux = parseInt(xpos.toString().split('px')[0]);
        const ypos_aux = parseInt(ypos.toString().split('px')[0]);

        const dif_x = Math.abs(actual_x - xpos_aux);
        const dif_y = Math.abs(actual_y - ypos_aux);
        // console.log(`%c x: ${actual_x} - ${xpos_aux} = ${dif_x}`, 'color: #760');
        // console.log(`%c y: ${actual_y} - ${ypos_aux} = ${dif_y}`, 'color: #165');

        lf.updateOpenSidenavPos(actual_x, actual_y);
        if (!((dif_x > 15) || (dif_y > 15))) {
            f.u2('modals', 'menu', 'showNavbar', !s?.modals?.menu?.showNavbar);
        }
      }
    }

    return (
        <>
            <div 
                className={`${styles.navbar_menu} manita`}
                style={{top: ypos, left: xpos, zIndex:9999}}
                id={`toggle-menu`}>
                {!!s?.modals?.menu?.showNavbar ? <CircleXMarkIcon /> : <MenuIcon />}
            </div>
            {s?.modals?.menu?.showNavbar && 
            <GeneralModal 
                Component={Open}
                lvl1={'menu'}
                lvl2={'showNavbar'}
                bg_hide={true}
                />
            }
        </>
    )
}

export { Menu };