
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationControlled({ totalPages, page, setPage }) {
	const handleChange = (event, value) => {
		setPage(value);
	};

	return (
		<Stack m={3} alignItems="center">
			<Pagination count={totalPages} page={page} onChange={handleChange} sx={{m: 3}} />
		</Stack>
	);
}
