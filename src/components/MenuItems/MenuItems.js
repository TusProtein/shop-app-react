import React, { useState } from 'react';
import Tippy from '@tippyjs/react/headless';

import { faBars, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WrapperMenu from '../../components/WrapperMenu/WrapperMenu';
import styles from './MenuItems.module.scss';
import HeaderMenu from './HeaderMenu';

const MenuItems = ({ arrItems, onChangeItem = () => {} }) => {
    const [history, setHistory] = useState([{ data: arrItems }]);
    const [isHovered, setIsHovered] = useState(false);

    const current = history[history.length - 1];

    // const renderSubMenu = (children) => {
    //     if (!children) return null;
    //     return (
    //         <Tippy
    //             offset={[50, 16]}
    //             visible={isHovered}
    //             interactive
    //             onHide={() => setIsHovered(false)}
    //         >
    //             <div className={styles.subMenu}>
    //                 {children.data.map((childrenItem, index) => {
    //                     return <div key={index}>{childrenItem.title}</div>;
    //                 })}
    //             </div>
    //         </Tippy>
    //     );
    // };

    const renderMenuItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <div key={index}>
                    <button
                        className={`${styles.menuItem} flex items-center justify-between`}
                        onClick={() => {
                            if (isParent) {
                                setHistory((prev) => [...prev, item.children]);
                            } else {
                                onChangeItem(item);
                            }
                        }}
                    >
                        {item.title}
                        <FontAwesomeIcon
                            style={{
                                fontSize: '10px',
                            }}
                            icon={faChevronRight}
                        />
                    </button>
                    {/* {renderSubMenu(item.children)} */}
                </div>
            );
        });
    };

    const handleResetMenu = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    return (
        <div>
            <Tippy
                offset={[50, 12]}
                interactive
                hideOnClick={true}
                // hideOnClick={hideOnClick}
                onHide={handleResetMenu}
                delay={[0, 700]}
                render={(attrs) => (
                    <div
                        className='menuIcon w-[224px]'
                        tabIndex='-1'
                        {...attrs}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <WrapperMenu className={`flex flex-col`}>
                            {history.length > 1 && (
                                <HeaderMenu
                                    title={current.title}
                                    onBack={handleBack}
                                />
                            )}
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
