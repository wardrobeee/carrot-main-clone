import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">당근</div>

        <nav className="nav">
          <a>중고거래</a>
          <a>동네업체</a>
          <a>알바</a>
          <a>부동산</a>
          <a>중고차 직거래</a>
        </nav>

        <input className="search" placeholder="물품이나 동네를 검색해보세요" />
      </header>

      <main>
        <section className="hero">
          <div className="hero-text">
            <h1>당신 근처의<br />지역 생활 커뮤니티</h1>
            <p>
              동네라서 가능한 모든 것, 당근에서 가까운 이웃과 함께해요.
            </p>
          </div>

          <div className="hero-image">
            이미지 영역
          </div>
        </section>

        <section className="section">
          <div className="section-image">중고거래 이미지</div>

          <div className="section-text">
            <h2>우리 동네 중고 직거래 마켓</h2>
            <p>
              동네 주민들과 가깝고 따뜻한 거래를 시작해보세요.
            </p>
          </div>
        </section>

        <section className="popular">
          <h2>인기 중고거래</h2>

          <div className="card-list">
            <div className="card">
              <div className="card-image"></div>
              <h3>자전거</h3>
              <p>서울 마포구</p>
              <strong>50,000원</strong>
            </div>

            <div className="card">
              <div className="card-image"></div>
              <h3>의자</h3>
              <p>서울 강서구</p>
              <strong>20,000원</strong>
            </div>

            <div className="card">
              <div className="card-image"></div>
              <h3>키보드</h3>
              <p>서울 은평구</p>
              <strong>35,000원</strong>
            </div>

            <div className="card">
              <div className="card-image"></div>
              <h3>책상</h3>
              <p>서울 서대문구</p>
              <strong>70,000원</strong>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        © carrot-main-clone
      </footer>
    </div>
  );
}

export default App;