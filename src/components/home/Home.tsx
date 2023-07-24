import Login from './Login';
import GoogleSearch from '../api/GoogleSearchAPI';

export default function Home(props: any) {
	return (
		<>
			<Login loginHandler={props.loginHandler} />
		</>
	);
};
