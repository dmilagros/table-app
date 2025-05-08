// services/getMockUserList.ts

import { userMockData } from "../data/user";
import { IUserPagination, UserFilters } from "../interfaces/interface.user";

export const getMockUserList = async (
	filters: UserFilters = {}
): Promise<IUserPagination> => {
	const { page = 1, limit = 20, ...rest } = filters;

	const filtered = userMockData.results.filter((user) => {
		return Object.entries(rest).every(([key, value]) => {
			const values = Array.isArray(value) ? value : [value];

			if (key === "active_project_id") {
				return values.some((v) =>
					user.active_projects.some((proj) => proj.id === Number(v))
				);
			}

			if (key === "language") {
				return values.includes(user.language);
			}

			if (key === "occupation") {
				return values.includes(user.occupation);
			}

			return true;
		});
	});

	const total = filtered.length;
	const numericPage = Number(page);
	const numericLimit = Number(limit);

	const paginated = filtered.slice(
		(numericPage - 1) * numericLimit,
		numericPage * numericLimit
	);

	return {
		results: paginated,
		count: total,
		page: numericPage,
		limit: numericLimit,
		total_pages: Math.ceil(total / numericLimit),
	};
};
