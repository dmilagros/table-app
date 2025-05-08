// 1. Table.tsx
export const TableContainer = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="overflow-x-auto w-full">
			<table className="min-w-full divide-y divide-gray-200 text-sm text-left">
				{children}
			</table>
		</div>
	);
};

// 2. TableHeader.tsx
export const TableHeader = ({ children }: { children: React.ReactNode }) => {
	return (
		<thead className="bg-gray-100 text-gray-700 font-semibold">
			{children}
		</thead>
	);
};

// 3. TableRowHeader.tsx
export const TableRowHeader = ({ children }: { children: React.ReactNode }) => {
	return <tr>{children}</tr>;
};

// 4. TableBody.tsx
export const TableBody = ({ children }: { children: React.ReactNode }) => {
	return <tbody className="divide-y divide-gray-100">{children}</tbody>;
};

// 5. TableRow.tsx
export const TableRow = ({ children }: { children: React.ReactNode }) => {
	return <tr className="hover:bg-gray-50 transition-colors">{children}</tr>;
};

// 6. TableCell.tsx
export const TableCell = ({
	children,
	className = "",
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return <td className={`px-4 py-3 ${className}`}>{children}</td>;
};

// 7. TableEmpty.tsx
export const TableEmpty = ({ colSpan }: { colSpan: number }) => {
	return (
		<tr>
			<td colSpan={colSpan} className="text-center py-6 text-gray-400">
				No data available.
			</td>
		</tr>
	);
};

// 8. TableLoader.tsx
export const TableLoader = ({ colSpan }: { colSpan: number }) => {
	return (
		<tr>
			<td colSpan={colSpan} className="text-center py-6">
				<span className="animate-pulse text-gray-500">Loading...</span>
			</td>
		</tr>
	);
};

// 9. TableFilters.tsx
export const TableFilters = ({ children }: { children: React.ReactNode }) => {
	return <div className="flex flex-wrap gap-4 mb-4 items-end">{children}</div>;
};

// 10. FilterTextField.tsx
export const FilterTextField = ({
	label,
	value,
	onChange,
}: {
	label: string;
	value: string;
	onChange: (val: string) => void;
}) => {
	return (
		<div className="flex flex-col gap-2">
			<label className="block text-sm font-medium text-gray-700 mb-1">
				{label}
			</label>
			<input
				type="text"
				className="border px-3 py-1 rounded-md w-full text-sm"
				value={value}
				onChange={(e) => onChange(e.target.value)}
			/>
		</div>
	);
};

// 11. FilterArrayTextField.tsx
export const FilterArrayTextField = ({
	label,
	value,
	onChange,
}: {
	label: string;
	value: string;
	onChange: (val: string) => void;
}) => {
	return (
		<div>
			<label className="block text-sm font-medium text-gray-700 mb-1">
				{label}
			</label>
			<input
				type="text"
				className="border px-3 py-1 rounded-md w-full text-sm"
				placeholder="Search in list..."
				value={value}
				onChange={(e) => onChange(e.target.value)}
			/>
		</div>
	);
};

// 12. FilterSingleSelect.tsx
export const FilterSingleSelect = ({
	label,
	options,
	value,
	onChange,
}: {
	label: string;
	options: string[];
	value: string;
	onChange: (val: string) => void;
}) => {
	return (
		<div>
			<label className="block text-sm font-medium text-gray-700 mb-1">
				{label}
			</label>
			<div className="flex gap-3">
				{options.map((opt) => (
					<label key={opt} className="flex items-center gap-1 text-sm">
						<input
							type="radio"
							checked={value === opt}
							onChange={() => onChange(opt)}
							className="accent-blue-600"
						/>
						{opt}
					</label>
				))}
			</div>
		</div>
	);
};

// 13. FilterMultiSelect.tsx
export const FilterMultiSelect = ({
	label,
	options,
	value,
	onChange,
}: {
	label: string;
	options: string[];
	value: string[];
	onChange: (val: string[] | string) => void;
}) => {
	const toggle = (item: string) => {
		onChange(
			value.includes(item) ? value.filter((v) => v !== item) : [...value, item]
		);
	};

	return (
		<div>
			<label className="block text-sm font-medium text-gray-700 mb-1">
				{label}
			</label>
			<div className="flex gap-3 flex-wrap">
				{options.map((opt) => (
					<label key={opt} className="flex items-center gap-1 text-sm">
						<input
							type="checkbox"
							checked={value.includes(opt)}
							onChange={() => toggle(opt)}
							className="accent-blue-600"
						/>
						{opt}
					</label>
				))}
			</div>
		</div>
	);
};

type TablePaginationProps = {
	currentPage: number;
	totalItems: number;
	pageSize: number;
	onPageChange: (page: number) => void;
};

export const TablePagination: React.FC<TablePaginationProps> = ({
	currentPage,
	totalItems,
	pageSize,
	onPageChange,
}) => {
	const totalPages = Math.ceil(totalItems / pageSize);

	const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

	return (
		<div className="flex justify-end items-center gap-2 mt-4">
			{pages.map((page) => (
				<button
					key={page}
					className={`px-3 py-1 rounded ${
						currentPage === page
							? "bg-blue-600 text-white"
							: "bg-gray-200 hover:bg-gray-300"
					}`}
					onClick={() => onPageChange(page)}
				>
					{page}
				</button>
			))}
		</div>
	);
};
