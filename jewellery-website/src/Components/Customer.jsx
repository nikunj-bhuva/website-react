function Customer({ modeValue, title }) {
  return (
    <h3 className={`${modeValue ? "customer-title-dark" : null} mb-4`}>{title}</h3>
  );
}

export default Customer;
