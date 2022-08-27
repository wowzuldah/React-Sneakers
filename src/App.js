

function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">

          <img height={40} src="/svg/logo.svg" alt="logo"/>

          <div className="headerInfo">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кросовок</p>
          </div>

        </div>
        <ul className="d-flex">
            <li className="mr-30">
              <img height={18} src="/svg/cart.svg" alt="cart" />
              <span>1205 руб.</span>
            </li>
            <li>
              <img height={18} src="/svg/profile.svg" alt="profile" />
            </li>
          </ul>
      </header>

      <div className="content p-40">
        <h1 className="mb-40">Все кросовки</h1>

        
        <div className="d-flex justify-between">

          <div className="card">

            <img width={133} height={112} src="/svg/sneakers/snk1.jpg" alt="sneakers1" />

            <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>

            <div className="d-flex justify-between align-center">

              <div>
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>

              <button className="button">
                <img height={11} src="/svg/plus.svg" alt="Plus" />
              </button>

            </div>
          </div>

          <div className="card">

            <img width={133} height={112} src="/svg/sneakers/snk2.jpg" alt="sneakers1" />

            <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
            
            <div className="d-flex justify-between align-center">

              <div>
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>

              <button className="button">
                <img height={11} src="/svg/plus.svg" alt="Plus" />
              </button>

            </div>
          </div>

          <div className="card">

            <img width={133} height={112} src="/svg/sneakers/snk3.jpg" alt="sneakers1" />

            <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
            
            <div className="d-flex justify-between align-center">

              <div>
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>

              <button className="button">
                <img height={11} src="/svg/plus.svg" alt="Plus" />
              </button>

            </div>
          </div>

          <div className="card">

            <img width={133} height={112} src="/svg/sneakers/snk4.jpg" alt="sneakers1" />

            <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
            
            <div className="d-flex justify-between align-center">

              <div>
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>

              <button className="button">
                <img height={11} src="/svg/plus.svg" alt="Plus" />
              </button>

            </div>
          </div>

        </div>


      </div>
    </div>
  );
}

export default App;
