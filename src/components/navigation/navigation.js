import React from 'react';
import NavigationItem from '../navigation-item/navigation-item';
import styles from './navigation.css';

export default ({
    pages,
    currentPath,
    pathSelected,
}) => {
    const items = pages.map(({path, title}) => {
        return (
            <NavigationItem
                key={path} 
                path={path}
                isCurrent={path === currentPath}
                onClick={() => pathSelected(path)}
            >
                {title}
            </NavigationItem>
        )
    });
    return(
        <div className={styles.container}>
            {items}
        </div>
    );
}