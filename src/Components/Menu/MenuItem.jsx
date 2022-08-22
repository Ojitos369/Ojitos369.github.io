import React from 'react';

function MenuItem({s, item, f, ls}) {
    let effectMode;
    ls.themeMode === "dark" ? effectMode = "reflejo" : effectMode = "zoom";
    let classNameItem = `menu-item ${s.viewMode === item.name ? s.styles.invertClassTheme : s.styles.styleClass} ${s.styles.border} ${effectMode} text-decoration-none`;
    return (
        <a 
            className={classNameItem}
            onClick={() => f.changeViewMode(item.name)}
            href={`#${item.name}`}
            >
                {item.name}
        </a>
    )
}

export { MenuItem };