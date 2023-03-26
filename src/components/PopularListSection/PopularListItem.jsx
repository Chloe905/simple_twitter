// import { useState } from 'react';
import style from 'src/components/PopularListSection/PopularListItem.module.scss';
import { ButtonS, ButtonSW } from 'src/components/buttons';

export const PopularListItem = ({ id, name, avatar, account, isFollowing }) => {
	// const [initIsFollowing, setIsFollowing] = useState(initIsFollowing);

	const handleFollowClick = () => {
		console.log('click');
		// setIsFollowing(!initIsFollowing);
	};
	return (
		<div className={style.popularListItemContainer} id={id}>
			<div className={style.popularListItemUserPhoto}>
				<img src={avatar} alt='avatar' className={style.userPhoto} />
			</div>
			<div className={style.popularListItemNameAndButton}>
				<div className={style.popularListItemUserNameWrapper}>
					<div className={style.popularListItemUserName}>{name}</div>
					<div className={style.popularListItemUserSubName}>@{account}</div>
				</div>
				<div>
					{isFollowing ? (
						<ButtonS text='正在跟隨' onClick={handleFollowClick} />
					) : (
						<ButtonSW text='跟隨' onClick={handleFollowClick} />
					)}
				</div>
			</div>
		</div>
	);
};
