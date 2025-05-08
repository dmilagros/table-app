import {
	TableContainer,
	TableHeader,
	TableRowHeader,
	TableCell,
	TableBody,
	TableRow,
	TableEmpty,
	TablePagination,
	FilterTextField,
	FilterSingleSelect,
	FilterMultiSelect,
	FilterArrayTextField,
} from "./TablePartsComponents";
import { Filters, User } from "../UserTable";

export const Table = ({
	filters,
	handleChange,
	paginatedData,
	currentPage,
	setCurrentPage,
	mockData,
	PAGE_SIZE = 10,
}: {
	filters: Filters;
	handleChange: (field: keyof Filters, value: string | string[] | number) => void;
	paginatedData: User[];
	currentPage: number;
	setCurrentPage: (page: number) => void;
	mockData: User[];
	PAGE_SIZE: number;
}) => {
	return (
		<div>
			<TableContainer>
				<TableHeader>
					<TableRowHeader>
						<TableCell>ID</TableCell>

						<TableCell>
							<FilterTextField
								label="Name"
								value={filters.name}
								onChange={(val) => handleChange("name", val)}
							/>
						</TableCell>

						<TableCell>
							<FilterSingleSelect
								label="Role"
								options={["Admin", "User"]}
								value={filters.role}
								onChange={(val) => handleChange("role", val)}
							/>
						</TableCell>

						<TableCell>
							<FilterMultiSelect
								label="Status"
								options={["Active", "Inactive"]}
								value={filters.status}
								onChange={(val) => handleChange("status", val)}
							/>
						</TableCell>

						<TableCell>
							<FilterArrayTextField
								label="Tags"
								value={filters.tags}
								onChange={(val) => handleChange("tags", val)}
							/>
						</TableCell>
					</TableRowHeader>
				</TableHeader>

				<TableBody>
					{paginatedData.length ? (
						paginatedData.map((user: User) => (
							<TableRow key={user.id}>
								<TableCell>{user.id}</TableCell>
								<TableCell>{user.name}</TableCell>
								<TableCell>{user.role}</TableCell>
								<TableCell>{user.status}</TableCell>
								<TableCell className="flex gap-1 flex-wrap">
									{user.tags.map((tag) => (
										<span
											key={tag}
											className="bg-gray-200 text-xs px-2 py-0.5 rounded"
										>
											{tag}
										</span>
									))}
								</TableCell>
							</TableRow>
						))
					) : (
						<TableEmpty colSpan={5} />
					)}
				</TableBody>
			</TableContainer>
			<TablePagination
				currentPage={currentPage}
				totalItems={mockData.length}
				pageSize={PAGE_SIZE}
				onPageChange={setCurrentPage}
			/>
		</div>
	);
};
