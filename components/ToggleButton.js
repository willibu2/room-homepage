import classes from './ToggleButton.module.css';
import Image from 'next/image';

const ToggleButton = (props) => {
  const { onClick, icon } = props;

  const iconSrc = `/images/icon-angle-${icon}.svg`;

  return (
    <button onClick={props.onClick} className={classes.btn}>
      <Image src={iconSrc} width={15} height={20} alt="arrow icon" />
    </button>
  );
};

export default ToggleButton;
