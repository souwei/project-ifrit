import React from 'react';

import styles from './DungeonsGuide.module.scss';

import { DUNGEONS_LISTING, EXPANSION_TITLES } from '../constants';
class DungeonsGuide extends React.Component {
    renderList() {
        return DUNGEONS_LISTING.map(({exp, name}) => {
            return (
                <div>
                    {EXPANSION_TITLES[exp]} - {name}
                </div>
            )
        })
    }

    render() {
        return (
            <div className={styles.container}>
                Dungeons Guide
                {this.renderList()}
            </div>
        );
    }
}

export default DungeonsGuide;
