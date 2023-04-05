const Sell = ({ setRefresh }) => {
	function sellResource() {
		fetch("http://localhost:8787/api/v1/sell", { method: "POST" }).then(() =>
			setRefresh((prev) => !prev)
		);
	}
	return (
		<section>
			<button onClick={sellResource}>Verkaufen</button>
		</section>
	);
};

export default Sell;
