import React from 'react';
import Tippy from '@tippyjs/react/headless';

import {
    faBars,
    faCircleQuestion,
    faEarthEurope,
    faKeyboard,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WrapperMenu from '../../components/WrapperMenu/WrapperMenu';
import styles from './MenuItems.module.scss';

const MenuItems = () => {
    const MENU_ITEMS = [
        {
            icon: <FontAwesomeIcon icon={faEarthEurope} />,
            title: 'English',
            // children: {
            //     title: 'Language',
            //     data: [
            //         {
            //             type: 'language',
            //             code: 'en',
            //             title: 'English',
            //         },
            //         {
            //             type: 'language',
            //             code: 'vi',
            //             title: 'Tiếng Việt',
            //         },
            //     ],
            // },
        },
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'Feedback and helps',
            to: '/feedback',
        },
        {
            icon: <FontAwesomeIcon icon={faKeyboard} />,
            title: 'Keyboards shortcuts',
        },
    ];

    const renderSubMenu = (children) => {
        if (!children) return null;
        return (
            <div>
                {children.data.map((childItem, childIndex) => (
                    <div key={childIndex}>{childItem.title}</div>
                ))}
            </div>
        );
    };

    const renderMenuItems = () => {
        return (
            <>
                {MENU_ITEMS.map((item, index) => {
                    return (
                        <div className={styles.menuItem} key={index}>
                            <div>{item.title}</div>
                            {renderSubMenu(item.children)}
                        </div>
                    );
                })}
            </>
        );
    };

    return (
        <div>
            <Tippy
                offset={[50, 12]}
                interactive
                hideOnClick={true}
                // hideOnClick={hideOnClick}
                // onHide={handleResetMenu}
                delay={[0, 700]}
                // placement='bottom-end'
                render={(attrs) => (
                    <div
                        className='menuIcon w-[224px]'
                        tabIndex='-1'
                        {...attrs}
                    >
                        <WrapperMenu className={`flex flex-col`}>
                            {/* {history.length > 1 && (
                                <HeaderMenu
                                    title={current.title}
                                    onBack={handleBack}
                                />
                            )} */}
                            <div className='overflow-y-auto'>
                                {renderMenuItems()}
                            </div>
                        </WrapperMenu>
                    </div>
                )}
            >
                <div>
                    <FontAwesomeIcon icon={faBars} />
                    <span className='ml-2'>Danh mục</span>
                </div>
            </Tippy>
        </div>
    );
};

export default MenuItems;
