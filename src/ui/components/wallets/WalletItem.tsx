import * as React from 'react';
import { Avatar } from '../ui/avatar/Avatar';
import { Trans } from 'react-i18next';
import cn from 'classnames';
import * as styles from './wallet.styl';


export const WalletItem = ({className='', account=null, active=false, balance=null, children=[], ...props}) => {

    className = cn(styles.wallet, className, {[styles.activeWallet]: active});
    const iconClass = cn(
        styles.accountIcon,
        {
            'active-account-icon': active,
            'inactive-account-icon': !active,
            [styles.inactive]: !active,
        });

    return <div className={`${className} test`} {...props}>
        <div>
            <Avatar size={48} address={account.address}/>
        </div>
        <div>
            <div className="basic500">
                {account.name}
            </div>
            <div className={styles.balance}>
                {balance} Waves
            </div>
        </div>
        <div>
            {children}
            <div className={iconClass}></div>s
        </div>
    </div>

};