import '../css/CharComponent.css';

const CharComponent = ({ char, handleDeleteChar }) => {
  return (
    <div className='CharComponent' onClick={handleDeleteChar}>
      {char}
    </div>
  );
};

export default CharComponent;
