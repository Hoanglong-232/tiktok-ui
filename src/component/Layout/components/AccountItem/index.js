import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ffb706ee57c5639a92e2b9a947295279~c5_100x100.jpeg?x-expires=1668668400&x-signature=BFxqNNL7dTeEzebvdtQc%2Bepgzx4%3D"
                alt="lephuonganh"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Thanh Mèo</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>thanhmeo.18</span>
            </div>
        </div>
    );
}

export default AccountItem;
