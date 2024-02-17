import "./email.scss";
const Email = () => {
  return (
    <div className="email">
      <input
        type="text"
        placeholder="Enter you email.."
        className="emailInput"
      />
      <button className="emailBtn">Get Started</button>
    </div>
  );
};

export default Email;
