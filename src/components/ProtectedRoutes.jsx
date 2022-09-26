import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoutes = () => {
	const username = useSelector(state => state.userName);

	if (username) {
		return <Outlet />;
	} else {
		return <Navigate to="/" />;
	}
};

export default ProtectedRoutes;
