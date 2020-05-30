import React from 'react';

import styles from './DungeonsGuide.module.scss';

import { DUNGEONS_LISTING } from '../constants';

import msqLogo from '../../assets/msq.png'
import arrLogo from '../../assets/arr.png';
import hvwLogo from '../../assets/hw.png';
import sbLogo from '../../assets/sb.png';

import Searchbar from '../searchbar';

const DEFAULT_DUNGEONS_LISTINGS = DUNGEONS_LISTING;

class DungeonsGuide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dungeonsList: DEFAULT_DUNGEONS_LISTINGS
        }
    }

    searchList(searchTerm) {
        if (!searchTerm || searchTerm.trim() === '') {
            this.setState({ dungeonsList: DEFAULT_DUNGEONS_LISTINGS });
        } else {
            const filteredList = DEFAULT_DUNGEONS_LISTINGS.filter((dungeon) => {
                return dungeon.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
            });

            this.setState({ dungeonsList: filteredList })
        }
    }

    renderList() {
        const { dungeonsList } = this.state;

        const arrDungeons = dungeonsList.filter((dungeon) => dungeon.exp === 'arr');
        const hvwDungeons = dungeonsList.filter((dungeon) => dungeon.exp === 'hvw');
        const sbDungeons = dungeonsList.filter((dungeon) => dungeon.exp === 'sb');

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
                <Searchbar search={(dungeon) => this.searchList(dungeon)} />
                {this.renderList()}
            </div>
        );
    }
}

export default DungeonsGuide;
