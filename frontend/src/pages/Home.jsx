//library import
import { useState, useEffect } from "react";

//compenents import
import Sell from "../components/Sell";
import AddResource from "../components/AddResource";

const Home = () => {
	const [kontostand, setKontostand] = useState();
	const [workload, setWorkload] = useState();
	const [refresh, setRefresh] = useState(true);

	useEffect(() => {
		fetch("http://localhost:8787/api/v1/money")
			.then((res) => res.json())
			.then((data) => {
				setKontostand(data.kontostand);
			});
	}, [refresh]);

	useEffect(() => {
		fetch("http://localhost:8787/api/v1/workload")
			.then((res) => res.json())
			.then((data) => {
				if (data.workload >= 100) {
					setWorkload(data.workload);
					alert("Workload reached limit");
				} else {
					setWorkload(data.workload);
				}
			});
	}, [refresh]);

	return (
		<main>
			<h1>Ausbildungszentrum</h1>
			<h2>Kontostand: {kontostand} €</h2>
			<AddResource setRefresh={setRefresh} />
			<section className="result">
				<p>Kapazität {workload} %</p>
				<div className="workload">
					<div
						style={{ backgroundColor: "red", height: `${workload}px` }}
					></div>
				</div>
			</section>
			<Sell setRefresh={setRefresh} />
		</main>
	);
};

export default Home;
