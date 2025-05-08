// UserTable.tsx
import React from "react";
import {
	ColumnDef,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from "@tanstack/react-table";

/* type User = {
	id: number;
	name: string;
	role: string;
	status: string;
}; */

/* 
type User = {
  name: {
    first: string
    last: string
  }
  info: {
    age: number
    visits: number
  }
}
*/
/* 
[
  {
    "name": {
      "first": "Tanner",
      "last": "Linsley"
    },
    "info": {
      "age": 33,
      "visits": 100,
    }
  },
  {
    "name": {
      "first": "Kevin",
      "last": "Vandy"
    },
    "info": {
      "age": 27,
      "visits": 200,
    }
  }
]
*/
/* 
const columns = [
  {
    header: 'First Name',
    accessorKey: 'name.first',
  },
  {
    header: 'Last Name',
    accessorKey: 'name.last',
  },
  {
    header: 'Age',
    accessorFn: row => row.info.age, 
  },
  //...
]
*/

/* const mockData = [
	{
		id: 518,
		name: "UX para principantes - BAQ 2025",
		academic_offer: {
			id: 55,
			name: "Crea tus personajes favoritos en Minecraft",
		},
		business_type: "B2G", // este será con un filtro de checkbox - multiple seleccion 
		projects: [ // este será textfield que acepta un string y filtra por name 
			{
				id: 2,
				name: "Tecnológicas 2023",
			},
			{
				id: 1,
				name: "Pequeños programadores - Kasuga",
			},
		],
		current_autonomy_level: { // este será con un filtro de radio button - unica seleccion 
			id: 4,
			name: "Nivel 4: Autonomía plena",
			score: 4,
		},
		course_base_mdl_id: 12,
	},
	{
		id: 517,
		name: "Test 2",
		academic_offer: {
			id: 39,
			uuid: "f29c8548-a58c-4bd0-830a-85fb04b639ca",
			name: "Programación con Javascript",
		},
		business_type: "B2B2C",
		projects: [],
		course_base_mdl_id: 3,
		created_at: "2025-04-28T12:31:44.624753-05:00",
	},
	{
		id: 516,
		name: "Curso de Prueba 5",
		academic_offer: {
			id: 3,
			uuid: "08d0c5da-73db-4368-9b58-09a549ba48ce",
			name: "AO - Creación de APPs con NoCode",
		},
		business_type: "B2G",
		projects: [],
		course_base_mdl_id: 876666,
		created_at: "2025-04-28T12:28:38.672902-05:00",
	},
	{
		id: 515,
		name: "Curso de Prueba",
		academic_offer: {
			id: 42,
			uuid: "b2e017e6-38fd-4550-b660-5179a044d067",
			name: "Anima Giff’s con Jitter",
		},
		business_type: "B2G",
		projects: [],
		course_base_mdl_id: 22,
		created_at: "2025-04-28T12:20:00.372223-05:00",
	},
	{
		id: 514,
		name: "Curso de Prueba 5",
		academic_offer: {
			id: 3,
			uuid: "08d0c5da-73db-4368-9b58-09a549ba48ce",
			name: "AO - Creación de APPs con NoCode",
		},
		business_type: "B2G",
		projects: [],
		course_base_mdl_id: 876666,
		created_at: "2025-04-25T12:27:23.086044-05:00",
	},
	{
		id: 513,
		name: "Curso de Prueba 3",
		academic_offer: {
			id: 5,
			uuid: "fa4013b9-0b90-4516-a086-af1a1b7c7850",
			name: "AO - Campaña de Marketing con datos",
		},
		business_type: "B2B",
		projects: [],
		course_base_mdl_id: 876666,
		created_at: "2025-04-24T20:52:12.829994-05:00",
	},
	{
		id: 512,
		name: "Curso de Prueba 5",
		academic_offer: {
			id: 5,
			uuid: "fa4013b9-0b90-4516-a086-af1a1b7c7850",
			name: "AO - Campaña de Marketing con datos",
		},
		business_type: "B2G",
		projects: [],
		course_base_mdl_id: 876666,
		created_at: "2025-04-24T19:43:28.637287-05:00",
	},
	{
		id: 511,
		name: "Test 5",
		academic_offer: {
			id: 39,
			uuid: "f29c8548-a58c-4bd0-830a-85fb04b639ca",
			name: "Programación con Javascript",
		},
		business_type: "B2B2C",
		projects: [],
		course_base_mdl_id: 1,
		created_at: "2025-04-24T18:47:41.814598-05:00",
	},
	{
		id: 510,
		name: "Test 4",
		academic_offer: {
			id: 39,
			uuid: "f29c8548-a58c-4bd0-830a-85fb04b639ca",
			name: "Programación con Javascript",
		},
		business_type: "B2B2C",
		projects: [],
		course_base_mdl_id: 1,
		created_at: "2025-04-24T18:46:31.500361-05:00",
	},
	{
		id: 509,
		name: "Test 2",
		academic_offer: {
			id: 39,
			uuid: "f29c8548-a58c-4bd0-830a-85fb04b639ca",
			name: "Programación con Javascript",
		},
		business_type: "B2B2C",
		projects: [],
		course_base_mdl_id: 1,
		created_at: "2025-04-24T18:45:47.642533-05:00",
	},
	{
		id: 508,
		name: "Test 1",
		academic_offer: {
			id: 39,
			uuid: "f29c8548-a58c-4bd0-830a-85fb04b639ca",
			name: "Programación con Javascript",
		},
		business_type: "B2B2C",
		projects: [],
		course_base_mdl_id: 1,
		created_at: "2025-04-24T18:36:03.036809-05:00",
	},
	{
		id: 507,
		name: "Test 1",
		academic_offer: {
			id: 39,
			uuid: "f29c8548-a58c-4bd0-830a-85fb04b639ca",
			name: "Programación con Javascript",
		},
		business_type: "B2B2C",
		projects: [],
		course_base_mdl_id: 1,
		created_at: "2025-04-24T18:34:32.356707-05:00",
	},
	{
		id: 506,
		name: "Test",
		academic_offer: {
			id: 33,
			uuid: "5edb837d-0b21-46ed-92e2-77019717ee42",
			name: "Edición de videos con Clip Champ",
		},
		business_type: "B2B",
		projects: [],
		course_base_mdl_id: 3,
		created_at: "2025-04-24T18:33:28.304537-05:00",
	},
	{
		id: 505,
		name: "Test",
		academic_offer: {
			id: 33,
			uuid: "5edb837d-0b21-46ed-92e2-77019717ee42",
			name: "Edición de videos con Clip Champ",
		},
		business_type: "B2B",
		projects: [],
		course_base_mdl_id: 3,
		created_at: "2025-04-24T18:30:37.347180-05:00",
	},
	{
		id: 504,
		name: "Test",
		academic_offer: {
			id: 33,
			uuid: "5edb837d-0b21-46ed-92e2-77019717ee42",
			name: "Edición de videos con Clip Champ",
		},
		business_type: "B2B",
		projects: [],
		course_base_mdl_id: 3,
		created_at: "2025-04-24T18:30:14.993080-05:00",
	},
	{
		id: 503,
		name: "Test",
		academic_offer: {
			id: 33,
			uuid: "5edb837d-0b21-46ed-92e2-77019717ee42",
			name: "Edición de videos con Clip Champ",
		},
		business_type: "B2B",
		projects: [],
		course_base_mdl_id: 3,
		created_at: "2025-04-24T18:30:06.598654-05:00",
	},
	{
		id: 502,
		name: "Curso de Prueba 2",
		academic_offer: {
			id: 5,
			uuid: "fa4013b9-0b90-4516-a086-af1a1b7c7850",
			name: "AO - Campaña de Marketing con datos",
		},
		business_type: "B2G",
		projects: [],
		course_base_mdl_id: 876666,
		created_at: "2025-04-24T11:52:00.680882-05:00",
	},
	{
		id: 501,
		name: "test",
		academic_offer: null,
		business_type: "B2C",
		projects: [],
		course_base_mdl_id: 0,
		created_at: "2025-04-22T13:56:03.804845-05:00",
	},
	{
		id: 500,
		name: "Curso de Prueba",
		academic_offer: {
			id: 35,
			uuid: "6276ac3a-f230-4a76-89c1-8714401c1943",
			name: "Crea tu app con Thunkable",
		},
		business_type: "B2B",
		projects: [],
		course_base_mdl_id: 876666,
		created_at: "2025-04-22T10:57:38.629247-05:00",
	},
	{
		id: 499,
		name: "Curso de Prueba",
		academic_offer: {
			id: 3,
			uuid: "08d0c5da-73db-4368-9b58-09a549ba48ce",
			name: "AO - Creación de APPs con NoCode",
		},
		business_type: "B2C",
		projects: [],
		course_base_mdl_id: 876666,
		created_at: "2025-04-21T17:58:08.762632-05:00",
	},
]; */

interface User {
	id: number;
	alias: string;
	membership_plan: {
		id: number;
		label: string;
	};
	sector_affiliation: string; // para filtro con checkbox (selección múltiple)
	linked_missions: {
		id: number;
		title: string;
	}[]; // textfield que filtra por title
	interaction_mode: {
		id: number;
		descriptor: string;
		intensity: number;
	}; // radio button - única selección
	registry_token_id: number;
}

const data: User[] = [
	{
		id: 981,
		alias: "Valentina Soto",
		membership_plan: {
			id: 33,
			label: "Plan Aurora Extendido",
		},
		sector_affiliation: "Privado", // filtro con checkbox - selección múltiple
		linked_missions: [
			// textfield que filtra por title
			{
				id: 9,
				title: "Expedición Boreal",
			},
			{
				id: 4,
				title: "Red de Impacto Sur",
			},
		],
		interaction_mode: {
			// radio button - única selección
			id: 2,
			descriptor: "Modo colaborativo",
			intensity: 2,
		},
		registry_token_id: 74,
	},
];

/* const data: User[] = [
	{ id: 1, name: "Alice", role: "Admin", status: "Active" },
	{ id: 2, name: "Bob", role: "User", status: "Inactive" },
]; */

/* const columns: ColumnDef<User>[] = [
	{ accessorKey: "id", header: "ID" },
	{ accessorKey: "name", header: "Name" },
	{ accessorKey: "role", header: "Role" },
	{ accessorKey: "status", header: "Status" },
]; */

export const columns: ColumnDef<User>[] = [
	{
		accessorKey: "alias",
		header: "Alias",
	},
	{
		accessorKey: "membership_plan.label",
		header: "Plan de Membresía",
		cell: ({ row }) => row.original.membership_plan.label,
	},
	{
		accessorKey: "sector_affiliation",
		header: "Sector",
	},
	{
		accessorKey: "linked_missions",
		header: "Misiones Vinculadas",
		cell: ({ row }) =>
			row.original.linked_missions.map((m) => m.title).join(", "),
		enableColumnFilter: true,
		meta: {
			filterType: "text", // puedes usar esto para personalizar tus filtros por texto
		},
	},
	{
		accessorKey: "interaction_mode.descriptor",
		header: "Modo de Interacción",
		cell: ({ row }) => row.original.interaction_mode.descriptor,
	},
	{
		accessorKey: "interaction_mode.intensity",
		header: "Intensidad",
		cell: ({ row }) => row.original.interaction_mode.intensity,
		enableColumnFilter: false,
	},
	{
		accessorKey: "registry_token_id",
		header: "ID Registro",
	},
];

export default function UserTableTankStack() {
	const table = useReactTable({
		data,
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
