import '../css/CharComponent.css';

const CharComponent = ({ char, handleChar }) => {
  return (
    <div className='CharComponent' onClick={() => handleChar(char)}>
      {char}
    </div>
  );
};

export default CharComponent;
