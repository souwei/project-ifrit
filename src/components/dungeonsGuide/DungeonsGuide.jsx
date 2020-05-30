import React from 'react';

import styles from './DungeonsGuide.module.scss';

import { DUNGEONS_LISTING } from '../constants';

import msqLogo from '../../assets/msq.png'
import arrLogo from '../../assets/arr.png';
import hvwLogo from '../../assets/hw.png';
import sbLogo from '../../assets/sb.png';

class DungeonsGuide extends React.Component {
    renderList() {
        const arrDungeons = DUNGEONS_LISTING.filter((dungeon) => dungeon.exp === 'arr');
        const hvwDungeons = DUNGEONS_LISTING.filter((dungeon) => dungeon.exp === 'hvw');
        const sbDungeons = DUNGEONS_LISTING.filter((dungeon) => dungeon.exp === 'sb');

        return (
            <>
                {!!arrDungeons.length && (<>
                    <div style={{ padding: '1rem', backgroundColor: '#323232', width: '50%', margin: 'auto' }}>
                        <img alt="" style={{height: 'auto', width: '100%'}} src={arrLogo} />
                    </div>
                    {arrDungeons.map(({ name }) => (
                    <div className={styles.dungeonListItem}>
                        <img alt="" src={msqLogo} style={{ height: '1.5rem', width: 'auto', paddingRight: '1rem' }} />
                        <span>{name}</span>
                        <span className={styles.leftArrow}>>></span>
                    </div>
                    ))}
                </>)}
                {!!hvwDungeons.length && (<>
                    <div style={{ padding: '1rem', backgroundColor: '#323232', width: '50%', margin: 'auto' }}>
                        <img alt="" style={{height: 'auto', width: '100%'}} src={hvwLogo} />
                    </div>
                    {hvwDungeons.map(({ name }) => (
                    <div className={styles.dungeonListItem}>
                        <img alt="" src={msqLogo} style={{ height: '1.5rem', width: 'auto', paddingRight: '1rem' }} />
                        <span>{name}</span>
                        <span className={styles.leftArrow}>>></span>
                    </div>
                    ))}
                </>)}
                {!!sbDungeons.length && (<>
                    <div style={{ padding: '1rem', backgroundColor: '#323232', width: '50%', margin: 'auto' }}>
                        <img alt="" style={{height: 'auto', width: '100%'}} src={sbLogo} />
                    </div>
                    {sbDungeons.map(({ name }) => (
                    <div className={styles.dungeonListItem}>
                        <img alt="" src={msqLogo} style={{ height: '1.5rem', width: 'auto', paddingRight: '1rem' }} />
                        <span>{name}</span>
                        <span className={styles.leftArrow}>>></span>
                    </div>
                    ))}
                </>)}
            </>
        );
    }

    render() {
        return (
            <div className={styles.container}>




                {this.renderList()}
            </div>
        );
    }
}

export default DungeonsGuide;
