import axios from 'axios';

const baseUrl = 'https://quiet-fortress-55098.herokuapp.com/api';

// 後台登入
export const adminSignIn = async ({ account, password }) => {
	try {
		const { data } = await axios.post(`${baseUrl}/admin/signin`, { account, password });

		const token = data.data.token;

		if (token) {
			return { success: true, ...data };
		}

		return data;
	} catch (error) {
		console.log('error.message: ', error.message);
		console.error('[Login Failed]:', error);
		return error.message;
	}
};

// 使用者登入
export const userSignIn = async ({ account, password }) => {
	try {
		const { data } = await axios.post(`${baseUrl}/users/signin`, { account, password });
		const token = data.data.token;
		console.log('登入得到的data: ', data);

		if (token) {
			return { success: true, ...data };
		}

		return data;
	} catch (error) {
		console.error('[Login Failed]:', error);
		return { success: false };
	}
};
