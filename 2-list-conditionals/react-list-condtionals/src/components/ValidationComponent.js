const ValidationComponent = ({ pLength }) => {
  const output = pLength <= 5 ? 'too short' : 'too long';

  return (
    <div>
      <p>Validation Component: {output}</p>
    </div>
  );
};

export default ValidationComponent;
