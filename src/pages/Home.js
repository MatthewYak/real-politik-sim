import { Navigate } from "react-router-dom";

function Home() {
  if (!localStorage.getItem("country")) {
    return <Navigate to="/select-country" />;
  } else {
    return (
      <div>
        <h1>$1K</h1>
        <button className="financesBtn">$</button>
        <button className="policiesBtn">All Policies</button>
        <button className="lawOrderBtn">Law And Order</button>
        <button className="cabBtn">Cabnet</button>
        <button className="sitBtn">Situations</button>
        <button className="secBtn">Security</button>
        <button className="conBtn">Congress</button>
        <p className="points">x64</p>
        <div className="foreignPoliciesContainer"></div>
        <div className="taxPoliciesContainer"></div>
        <div className="lawOrderPoliciesContainer"></div>
        <div className="econTransPoliciesContainer"></div>
      </div>
    );
  }
}

export default Home;
