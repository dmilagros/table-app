import './index.css';
import UserTable from "./UserTable";
import UserTableTankStack from "./UserTableTankStack";

function App() {
	return (
		<div className="p-6">
			<h1 className="text-2xl font-bold mb-4">TanStack Table + Tailwind</h1>
			<UserTable />
			<UserTableTankStack />
		</div>
	);
}

export default App;
