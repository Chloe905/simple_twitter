import style from 'src/components/buttons/ButtonM/ButtonM.module.scss';

export const ButtonM = ({ text }) => {
	return <button className={style.ButtonM}>{text}</button>;
};
