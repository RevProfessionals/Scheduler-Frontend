import { useState } from "react";
import { LoadingButton } from "@mui/lab";

export default function Login() {
	const [loading, setLoading] = useState(false);

	return (
		<>
			<LoadingButton variant="contained" onClick={() => setLoading(true)} loading={loading} fullWidth>Login</LoadingButton>
		</>
	);
};
