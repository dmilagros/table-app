import { useState, useMemo } from "react";
import { Table } from "./components/Table";

export type Filters = {
	name: string;
	role: string;
	status: string[];
	tags: string;
};

export type User = {
	id: number;
	name: string;
	role: string;
	status: string;
	tags: string[];
};

const mockData: User[] = [
	{
		id: 1,
		name: "Alice Smith",
		role: "Admin",
		status: "Active",
		tags: ["team", "lead"],
	},
	{
		id: 2,
		name: "Bob Johnson",
		role: "User",
		status: "Inactive",
		tags: ["support"],
	},
	{
		id: 3,
		name: "Charlie Rose",
		role: "User",
		status: "Active",
		tags: ["sales", "onboarding"],
	},
	{
		id: 4,
		name: "Diana King",
		role: "Admin",
		status: "Active",
		tags: ["management"],
	},
	{
		id: 5,
		name: "Evan Stone",
		role: "User",
		status: "Inactive",
		tags: ["remote"],
	},
	{
		id: 6,
		name: "Fiona Clark",
		role: "Admin",
		status: "Active",
		tags: ["team", "events"],
	},
	{
		id: 7,
		name: "George Bell",
		role: "User",
		status: "Inactive",
		tags: ["tech"],
	},
	{
		id: 8,
		name: "Hannah Ray",
		role: "User",
		status: "Active",
		tags: ["frontend", "ux"],
	},
	{
		id: 9,
		name: "Ian Moore",
		role: "Admin",
		status: "Active",
		tags: ["devops", "cloud"],
	},
	{
		id: 10,
		name: "Julia Long",
		role: "User",
		status: "Inactive",
		tags: ["backend"],
	},
	{
		id: 11,
		name: "Kevin Nash",
		role: "User",
		status: "Active",
		tags: ["qa", "testing"],
	},
	{
		id: 12,
		name: "Laura Park",
		role: "Admin",
		status: "Active",
		tags: ["product", "design"],
	},
	{
		id: 13,
		name: "Mike Chen",
		role: "User",
		status: "Inactive",
		tags: ["marketing"],
	},
	{
		id: 14,
		name: "Nina Fox",
		role: "Admin",
		status: "Active",
		tags: ["finance"],
	},
	{
		id: 15,
		name: "Oscar Hale",
		role: "User",
		status: "Active",
		tags: ["support", "feedback"],
	},
	{ id: 16, name: "Paula Webb", role: "Admin", status: "Active", tags: ["hr"] },
	{
		id: 17,
		name: "Quinn Day",
		role: "User",
		status: "Inactive",
		tags: ["sales", "crm"],
	},
	{
		id: 18,
		name: "Rachel York",
		role: "User",
		status: "Active",
		tags: ["editorial"],
	},
	{
		id: 19,
		name: "Steve Hunt",
		role: "Admin",
		status: "Active",
		tags: ["legal", "compliance"],
	},
	{
		id: 20,
		name: "Tina Ross",
		role: "User",
		status: "Inactive",
		tags: ["events"],
	},
	{
		id: 21,
		name: "Uma Cole",
		role: "User",
		status: "Active",
		tags: ["training"],
	},
	{
		id: 22,
		name: "Victor Lane",
		role: "Admin",
		status: "Active",
		tags: ["data", "analytics"],
	},
	{
		id: 23,
		name: "Wendy Gill",
		role: "User",
		status: "Inactive",
		tags: ["social", "media"],
	},
	{
		id: 24,
		name: "Xander Page",
		role: "User",
		status: "Active",
		tags: ["support", "team"],
	},
	{
		id: 25,
		name: "Yara Dean",
		role: "Admin",
		status: "Active",
		tags: ["content", "blog"],
	},
	{
		id: 26,
		name: "Zack Lowe",
		role: "User",
		status: "Inactive",
		tags: ["helpdesk"],
	},
	{
		id: 27,
		name: "Amy Dunn",
		role: "User",
		status: "Active",
		tags: ["admin", "support"],
	},
	{
		id: 28,
		name: "Brian Tate",
		role: "Admin",
		status: "Active",
		tags: ["leads", "sales"],
	},
	{
		id: 29,
		name: "Cindy Wu",
		role: "User",
		status: "Inactive",
		tags: ["community"],
	},
	{
		id: 30,
		name: "Derek Snow",
		role: "User",
		status: "Active",
		tags: ["data", "export"],
	},
	{
		id: 31,
		name: "Tom Turner",
		role: "Admin",
		status: "Active",
		tags: ["devops", "hr"],
	},
	{
		id: 32,
		name: "Walt Young",
		role: "User",
		status: "Active",
		tags: ["backend"],
	},
	{
		id: 33,
		name: "Will Brown",
		role: "User",
		status: "Inactive",
		tags: ["finance", "sales", "training"],
	},
	{
		id: 34,
		name: "Eva Lee",
		role: "User",
		status: "Active",
		tags: ["helpdesk"],
	},
	{
		id: 35,
		name: "Noah Knight",
		role: "User",
		status: "Inactive",
		tags: ["frontend", "qa", "legal"],
	},
	{
		id: 36,
		name: "Ugo Xu",
		role: "Admin",
		status: "Active",
		tags: ["export"],
	},
	{
		id: 37,
		name: "Nora Underwood",
		role: "User",
		status: "Active",
		tags: ["hr", "frontend"],
	},
	{
		id: 38,
		name: "Jake Ingram",
		role: "Admin",
		status: "Active",
		tags: ["frontend"],
	},
	{
		id: 39,
		name: "Jack Austin",
		role: "User",
		status: "Active",
		tags: ["cloud", "blog"],
	},
	{
		id: 40,
		name: "Zane Klein",
		role: "User",
		status: "Inactive",
		tags: ["ux"],
	},
	{
		id: 41,
		name: "Elsa Stewart",
		role: "User",
		status: "Active",
		tags: ["testing"],
	},
	{
		id: 42,
		name: "Liam White",
		role: "User",
		status: "Active",
		tags: ["community"],
	},
	{
		id: 43,
		name: "Henry Scott",
		role: "User",
		status: "Active",
		tags: ["hr", "backend"],
	},
	{
		id: 44,
		name: "Xena Xiong",
		role: "User",
		status: "Inactive",
		tags: ["devops"],
	},
	{
		id: 45,
		name: "Tess Ortiz",
		role: "Admin",
		status: "Inactive",
		tags: ["marketing", "qa"],
	},
	{
		id: 46,
		name: "Grace Dunn",
		role: "User",
		status: "Active",
		tags: ["support", "legal"],
	},
	{
		id: 47,
		name: "Rita Perez",
		role: "Admin",
		status: "Inactive",
		tags: ["devops", "social", "frontend"],
	},
	{
		id: 48,
		name: "David Nelson",
		role: "User",
		status: "Active",
		tags: ["qa"],
	},
	{
		id: 49,
		name: "Anna Thomas",
		role: "User",
		status: "Active",
		tags: ["qa", "backend", "design"],
	},
	{
		id: 50,
		name: "Pia Adams",
		role: "Admin",
		status: "Active",
		tags: ["product", "legal"],
	},
];

const PAGE_SIZE = 10;

export default function TableExample() {
	const [filters, setFilters] = useState<Filters>({
		name: "",
		role: "",
		status: [],
		tags: "",
	});

	const handleChange = (
		field: keyof Filters,
		value: string | object | number
	) => {
		console.log("typeof", typeof value);
		setFilters((prev) => ({ ...prev, [field]: value }));
	};

	const filteredData = useMemo(() => {
		return mockData.filter((user) => {
			const nameMatch = user.name
				.toLowerCase()
				.includes(filters.name.toLowerCase());
			const roleMatch = filters.role ? user.role === filters.role : true;
			const statusMatch = filters.status.length
				? filters.status.includes(user.status)
				: true;
			const tagMatch = filters.tags
				? user.tags.some((tag) =>
						tag.toLowerCase().includes(filters.tags.toLowerCase())
				  )
				: true;

			return nameMatch && roleMatch && statusMatch && tagMatch;
		});
	}, [filters]);

	const [currentPage, setCurrentPage] = useState(1);

	const paginatedData = filteredData.slice(
		(currentPage - 1) * PAGE_SIZE,
		currentPage * PAGE_SIZE
	);

	return (
		<div className="p-4">
			<h1 className="text-xl font-bold mb-4">User Table</h1>

			<Table
				filters={filters}
				handleChange={handleChange}
				paginatedData={paginatedData}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				mockData={mockData}
				PAGE_SIZE={PAGE_SIZE}
			/>
		</div>
	);
}
