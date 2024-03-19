import React, { useState } from 'react';
import Tippy from '@tippyjs/react/headless';

import { faBars, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WrapperMenu from '../../components/WrapperMenu/WrapperMenu';
import styles from './MenuItems.module.scss';
import HeaderMenu from './HeaderMenu';

const MenuItems = ({ arrItems, onChangeItem = () => {} }) => {
    const [history, setHistory] = useState([{ data: arrItems }]);

    // The last item
    const current = history[history.length - 1];

    const renderMenuItems = () => {
        return current.data.map((item, index) => {
            return (
                <div key={index}>
                    <button
                        className={`${styles.menuItem} flex items-center justify-between`}
                        onClick={() => {
                            const isParent = !!item.children;

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
                onHide={handleResetMenu}
                delay={[0, 700]}
                render={(attrs) => (
                    <div
                        className='menuIcon w-[224px]'
                        tabIndex='-1'
                        {...attrs}
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
