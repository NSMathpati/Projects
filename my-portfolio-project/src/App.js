import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src="/Images/Wanda 2.jpg" alt="Wanda" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">The Scarlet Witch</h5>
              <p className="card-text">The Scarlet Witch is also known as Wanda, played by Elizabeth Olsen. Scarlet Witch is a very powerful character.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="Wanda 2.jpg" alt="Wanda" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">The Scarlet Witch</h5>
              <p className="card-text">The Scarlet Witch is also known as Wanda, played by Elizabeth Olsen. Scarlet Witch is a very powerful character.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;