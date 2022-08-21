import React from 'react';

function Menu({s, menuItem}) {
    return (
        <section id="menu" className={`sticky-top ${s.styles.styleClass}`}>
            {s.optionsMenu.map(item => menuItem(item))}
        </section>
    )
}

export { Menu };