import DynamicList from "./components/DynamicListContainer";
// import "./styles/css/index.css";

function App() {
	return (
		<DynamicList
			data={["hello", "world"]}
			type={"ul"}
			orientation={"vertical"}
		/>
	);
}

export default App;
