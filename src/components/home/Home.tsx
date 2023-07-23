import Login from './Login';
import GoogleSearch from '../api/GoogleSearchAPI';

export default function Home() {
	return (
		<>
			<Login />
			<GoogleSearch />
		</>
	);
};
