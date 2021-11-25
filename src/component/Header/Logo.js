import logo from '../../Image/logo.png';
import s from './header.module.css';

export default function Logo() {
  return (
    <>
      <div className={s.wrapper}>
        <img src={logo} alt="logo" />
        <h1 className={s.title}>Statistic</h1>
      </div>
    </>
  );
}
