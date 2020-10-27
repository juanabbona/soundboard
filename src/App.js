import './App.css';
import SoundLibrary from './SoundLibrary';

function App() {
  const handleButtonClick = (id) => () => document.getElementById(`${id}-audio`).play();

  return (
    <div className="App">
      {
        SoundLibrary.map(({ id, name, picture, sound }) => (
          <div
            key={id}
            onClick={handleButtonClick(id)}
            style={{
              cursor: 'pointer',
              margin: 20,
              padding: 20,
              borderRadius: 5,
              backgroundColor: '#ececec',
            }}
          >
            <img
              src={picture}
              style={{
                borderRadius:' 100%',
                height: 200,
                width: 200,
                objectFit: 'cover',
              }}
            />
            <h4 style={{ marginBottom: 0 }}>{name}</h4>
            <audio id={`${id}-audio`} src={sound} />
          </div>
        ))
      }
    </div>
  );
}

export default App;
