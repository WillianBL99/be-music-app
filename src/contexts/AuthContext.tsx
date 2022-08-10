import { createContext, useState } from 'react';

interface IAuthContext {
	token: string | null;
	signIn: (token: string) => void;
	signOut: () => void;
}

interface Props {
	children: React.ReactNode;
}

const AuthContext = createContext<IAuthContext | null>(null);

const LOCAL_STORAGE_KEY = 'auth-token';
const persistToken = localStorage.getItem(LOCAL_STORAGE_KEY);

function AuthProvider({ children }: Props) {
	const [token, setToken] = useState<string | null>(persistToken);

	const signIn = (token: string) => {
		setToken(token);
		localStorage.setItem(LOCAL_STORAGE_KEY, token);
	};

	const signOut = () => {
		setToken(null);
		localStorage.removeItem(LOCAL_STORAGE_KEY);
	};

	return (
		<AuthContext.Provider value={{ token, signIn, signOut }}>
			{children}
		</AuthContext.Provider>
	);
}

export { AuthContext, AuthProvider };
