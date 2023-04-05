const AddResource = ({ setRefresh }) => {
	function addResource(resource) {
		fetch(`http://localhost:8787/api/v1/humans/${resource}`, {
			method: "POST",
		}).then(() => setRefresh((prev) => !prev));
	}
	return (
		<section className="resourceBtn">
			<button onClick={() => addResource(1)}>1 Hinzufügen</button>
			<button onClick={() => addResource(5)}>5 Hinzufügen</button>
			<button onClick={() => addResource(10)}>10 Hinzufügen</button>
		</section>
	);
};

export default AddResource;
