import { Pagination, styled } from "@mui/material";

interface AdPaginationProps {
	disabled: boolean;
	count: number;
	setCurrentPage: (page: number) => void;
}

const Root = styled("div")(() => ({}));

export const AdPagination = ({
	count,
	setCurrentPage,
	disabled,
}: AdPaginationProps) => {
	return (
		<Root>
			<Pagination
				disabled={disabled}
				count={count}
				onChange={(_, page) => setCurrentPage(page)}
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
