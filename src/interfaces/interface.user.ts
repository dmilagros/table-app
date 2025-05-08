export type Language = "en" | "es" | "fr" | "pt" | "de";

export type Occupation =
	| "developer"
	| "designer"
	| "teacher"
	| "student"
	| "manager";

export interface IUserRole {
	id: number;
	name: string;
}

export interface IUserProject {
	id: number;
	name: string;
}

export interface IUser {
	id: number;
	name: string;
	occupation: Occupation;
	language: Language;
	role: IUserRole;
	active_projects: IUserProject[];
}

export interface IUserPagination {
	results: IUser[];
	total_pages: number;
	page: number;
	limit: number;
	count: number;
}

export type UserFilters = {
	page?: number | string;
	limit?: number | string;
	active_project_id?: number | number[];
	language?: string | string[];
	occupation?: string | string[];
};
