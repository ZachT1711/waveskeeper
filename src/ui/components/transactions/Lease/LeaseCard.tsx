import * as styles from './lease.styl';
import * as React from 'react'
import { translate, Trans } from 'react-i18next';
import { TxIcon } from '../TransactionIcon';
import { I18N_NAME_SPACE } from '../../../appConfig';
import * as cn from 'classnames';
import { OriginWarning } from '../OriginWarning';
import { Balance } from '../../ui';
import { getMoney } from '../../../utils/converters';
import { getAmount, messageType } from './parseTx';

@translate(I18N_NAME_SPACE)
export class LeaseCard extends React.PureComponent<ILease> {
    
    render() {
        const className = cn(
            styles.leaseTransactionCard,
            this.props.className,
            {
                [styles.leaseCard_collapsed]: this.props.collapsed
            },
        );
        
        const { message, assets } = this.props;
        const { data = {} } = message;
        const tx = { type: data.type, ...data.data };
        const amount = getMoney(getAmount(tx), assets);
        
        return <div className={className}>

            <div className={styles.cardHeader}>
                <div className={styles.leaseTxIcon}>
                    <TxIcon txType={messageType}/>
                </div>
                <div>
                    <div className="basic500 body3 margin-min">
                        <Trans i18nKey='transactions.lease'>Start Lease</Trans>
                    </div>
                    <h1 className="headline1">
                        <Balance split={true}
                                 showAsset={true}
                                 balance={amount}
                                 className={styles.txBalanceWrapper} 
                        />
                    </h1>
                </div>
            </div>

            <div className={styles.cardContent}>
                <div className={styles.origin}>
                    <OriginWarning message={message}/>
                </div>
            </div>

        </div>
    }
}

interface ILease {
    assets: any;
    className: string;
    collapsed: boolean;
    message: any;
}
