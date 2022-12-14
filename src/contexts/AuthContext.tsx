import { createContext, useState } from 'react';

export interface UserInfo {
	userId: number;
	image: string;
	name: string;
	email: string;
	isInstructor: boolean;
	instructorData: {
		id: number;
		description: string;
	};
}

interface IAuthContext {
	token: string | null;
	signIn: (token: string, userInfo: UserInfo) => void;
	signOut: () => void;
	userInfo: UserInfo | null;
	refresh: boolean;
	handleRefresh: () => void;
}

interface Props {
	children: React.ReactNode;
}

const AuthContext = createContext<IAuthContext | null>(null);

const LOCAL_STORAGE_KEY = 'auth-token';
const LOCAL_STORAGE_USER = 'user-info';

const persistToken = localStorage.getItem(LOCAL_STORAGE_KEY);
const persistUserInfo = () => {
	const userInfoJson = localStorage.getItem(LOCAL_STORAGE_USER);
	if (userInfoJson) {
		const userInfo = JSON.parse(userInfoJson);
		return userInfo;
	}
	return null;
};

function AuthProvider({ children }: Props) {
	const [token, setToken] = useState<string | null>(persistToken);
	const [userInfo, setUserInfo] = useState<UserInfo | null>(persistUserInfo);
	const [refresh, setRefresh] = useState(false);

	const handleRefresh = () => {
		setRefresh(!refresh);
	};

	const signIn = (token: string, userInfo: UserInfo) => {
		setToken(token);
		setUserInfo(userInfo);

		localStorage.setItem(LOCAL_STORAGE_KEY, token);
		localStorage.setItem(LOCAL_STORAGE_USER, JSON.stringify(userInfo));
	};

	const signOut = () => {
		setToken(null);
		localStorage.removeItem(LOCAL_STORAGE_KEY);
	};

	return (
		<AuthContext.Provider
			value={{ token, signIn, signOut, userInfo, refresh, handleRefresh }}
		>
			{children}
		</AuthContext.Provider>
	);
}

export { AuthContext, AuthProvider };
