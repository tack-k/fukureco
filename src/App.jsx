import './App.css';
import SampleImage from './assets/images/sample-image.jpg'

const App = () => {
  return (
    <div className="inner">
      <div className="title">トップス</div>
      <div className="box-wrapper">

        <div className="box">
          <div className="img-wrapper">
            <img className="img" src={SampleImage} alt="" />
            <div className="number">1位</div>
            <div className="register"></div>
          </div>
          <div className="container">
            <div className="calendar">
              <input type="date" />
            </div>
            <div className="button">
              <div className="button-wrapper">
                <button className="change btn">変更</button>
              </div>
              <div className="button-wrapper">
                <button className="delete btn">削除</button>
              </div>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="img-wrapper">
            <img className="img" src={SampleImage} alt="" />
            <div className="number">2位</div>
            <div className="register"></div>
          </div>
          <div className="container">
            <div className="calendar">
              <input type="date" />
            </div>
            <div className="button">
              <div className="button-wrapper">
                <button className="change btn">変更</button>
              </div>
              <div className="button-wrapper">
                <button className="delete btn">削除</button>
              </div>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="img-wrapper">
            <img className="img" src={SampleImage} alt="" />
            <div className="number">3位</div>
            <div className="register"></div>
          </div>
          <div className="container">
            <div className="calendar">
              <input type="date" />
            </div>
            <div className="button">
              <div className="button-wrapper">
                <button className="change btn">変更</button>
              </div>
              <div className="button-wrapper">
                <button className="delete btn">削除</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
