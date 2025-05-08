import { userMockData } from "./data/user";
// UserTable.tsx

import {
	ColumnDef,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from "@tanstack/react-table";
import { IUser } from "./interfaces/interface.user";

export const columns: ColumnDef<IUser>[] = [
	{
		accessorKey: "name",
		header: "Nombre",
	},
	{
		accessorKey: "role.name",
		header: "Rol",
		cell: ({ row }) => row.original.role.name,
	},
	{
		accessorKey: "active_projects",
		header: "Misiones Vinculadas",
		cell: ({ row }) =>
			row.original.active_projects.map((m) => m.name).join(", "),
		enableColumnFilter: true,
		meta: {
			filterType: "text", // puedes usar esto para personalizar tus filtros por texto
		},
	},
	{
		accessorKey: "occupation",
		header: "occupación",
		cell: ({ row }) => row.original.occupation,
	},
	{
		accessorKey: "language",
		header: "Intensidad",
		cell: ({ row }) => row.original.language,
		enableColumnFilter: false,
	},
	{
		accessorKey: "id",
		header: "ID",
	},
];

export default function UserTableTankStack() {
	const table = useReactTable({
		data: userMockData.results,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<table className="min-w-full border-collapse border border-gray-300">
			<thead>
				{table.getHeaderGroups().map((headerGroup) => (
					<tr key={headerGroup.id} className="bg-gray-100">
						{headerGroup.headers.map((header) => (
							<th key={header.id} className="border px-4 py-2 text-left">
								{flexRender(
									header.column.columnDef.header,
									header.getContext()
								)}
							</th>
						))}
					</tr>
				))}
			</thead>
			<tbody>
				{table.getRowModel().rows.map((row) => (
					<tr key={row.id}>
						{row.getVisibleCells().map((cell) => (
							<td key={cell.id} className="border px-4 py-2">
								{flexRender(cell.column.columnDef.cell, cell.getContext())}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
}
