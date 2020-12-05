const ValidationComponent = ({ pLength }) => {
  const validationMessage = pLength <= 5 ? 'too short' : 'too long';

  return (
    <div>
      <p>Validation Component: {validationMessage}</p>
    </div>
  );
};

export default ValidationComponent;
