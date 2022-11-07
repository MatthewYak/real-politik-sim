import { useState, useEffect } from "react";

import { Navigate } from "react-router-dom";

function SelectCountry() {
	const [countries, setCountries] = useState([]);
	const [selectedCountry, setSelectedCountry] = useState(null);
	const [selectedCountryData, setSelectedCountryData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading(true);
		fetch("https://restcountries.com/v3.1/all")
			.then(response => response.json())
			.then(data => {
				setCountries(data);
				setLoading(false);
			})
			.catch(err => {
				setError(err.message);
				setLoading(false);
			});
	}, []);

	if (localStorage.getItem("country")) {
		return <Navigate to="/" />;
	}

	return (
		<div>
			<h1>Select Country</h1>
			{loading && <p>Loading...</p>}

			{error && <p>{error}</p>}
			{!loading && !error && (
				<select
					onChange={e => {
						localStorage.setItem("country", e.target.value);
						window.location.reload();
					}}
				>
					{countries.map(country => (
						<option key={country.name.common} value={country.name.common}>
							{country.name.common}
						</option>
					))}
				</select>
			)}
		</div>
	);
}
export default SelectCountry;
