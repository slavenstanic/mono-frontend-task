import { Pagination, styled } from "@mui/material";

const Root = styled("div")(() => ({}));

export const AdPagination = () => {
	return (
		<Root>
			<Pagination
				count={7}
				shape={"rounded"}
				sx={{
					"& .MuiPaginationItem-root": {
						color: "#fff",
						"&:hover": {
							backgroundColor: "#fff",
							color: "#000",
						},
						"&.Mui-selected": {
							backgroundColor: "#F7C01D",
							color: "#000",
							"&:hover": {
								backgroundColor: "#C59A19",
							},
						},
					},
				}}
			/>
		</Root>
	);
};
