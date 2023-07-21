import { useState } from "react";
import { LoadingButton } from "@mui/lab";

export default function Register() {
	const [loading, setLoading] = useState(false);

	return (
		<>
			<LoadingButton variant="contained" onClick={() => setLoading(true)} loading={loading} fullWidth>Register</LoadingButton>
		</>
	);
};
