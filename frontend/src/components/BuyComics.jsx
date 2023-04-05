const BuyComics = ({ setRefresh }) => {
	function buySomething() {
		fetch("http://localhost:8787/api/v1/buy", { method: "POST" }).then(() =>
			setRefresh((prev) => !prev)
		);
	}
	return <button onClick={buySomething}>Buy Comics</button>;
};

export default BuyComics;
