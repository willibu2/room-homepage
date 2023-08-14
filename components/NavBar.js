import classes from './NavBar.module.css';
import Image from 'next/image';

const NavBar = (props) => {
  return (
    <nav className={classes.nav}>
      <Image
        src="/images/icon-close.svg"
        alt="close icon"
        width={20}
        height={20}
        className={classes['close-icon']}
        onClick={props.onClick}
      />
      <p>home</p>
      <p>shop</p>
      <p>about</p>
      <p>contact</p>
    </nav>
  );
};

export default NavBar;
