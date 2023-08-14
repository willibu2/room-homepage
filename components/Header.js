import classes from './Header.module.css';
import Image from 'next/image';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes['mobile-header']}>
        <Image
          src="/images/icon-hamburger.svg"
          width={20}
          height={20}
          alt="hamburger icon"
          className={classes['mobile-toggle-icon']}
          onClick={props.onClick}
        />
        <h2>room</h2>
      </div>
      <div className={classes.menu}>
        <div className={classes['p-container']}>
          <p className={classes.p}>home</p>
        </div>
        <div className={classes['p-container']}>
          <p className={classes.p}>shop</p>
        </div>
        <div className={classes['p-container']}>
          <p className={classes.p}>about</p>
        </div>
        <div className={classes['p-container']}>
          <p className={classes.p}>contact</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
