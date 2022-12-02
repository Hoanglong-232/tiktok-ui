import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '~/component/Image';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1653272836951046~c5_100x100.jpeg?x-expires=1669521600&x-signature=Ool%2BwjqcXoQShyAOAwL%2BUchJBWw%3D"
                alt="thanhmeo"
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
