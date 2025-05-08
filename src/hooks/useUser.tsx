import { useQuery } from "react-query";

import { getMockUserList } from "../services/user";
import { IUserPagination, UserFilters } from "../interfaces/interface.user";

export const useMockUserList = (filters?: UserFilters) => {
	return useQuery<IUserPagination>({
		queryKey: ["mock-user-list", filters],
		queryFn: () => getMockUserList(filters || {}),
	});
};
