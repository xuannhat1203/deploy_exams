import React from 'react';
import './App.css';

function App() {
  return (
    <div className="cv">
      <aside className="cv__sidebar">
        <div className="sb">
          <div className="sb__top">
            <div className="sb__avatar" aria-hidden="true">
              <span>NXN</span>
            </div>
            <div className="sb__name">Nguyễn Xuân Nhất</div>
            <div className="sb__role">Fullstack Developer</div>
          </div>

          <div className="sb__block">
            <div className="sb__label">Liên hệ</div>
            <div className="sb__kv">
              <div className="sb__k">Email</div>
              <div className="sb__v">cap-nhat@email.com</div>
            </div>
            <div className="sb__kv">
              <div className="sb__k">GitHub</div>
              <div className="sb__v">https://github.com/xuannhat1203?tab=repositories</div>
            </div>
            <div className="sb__kv">
              <div className="sb__k">Khu vực</div>
              <div className="sb__v">Việt Nam</div>
            </div>
          </div>

          <div className="sb__block">
            <div className="sb__label">Tóm tắt</div>
            <p className="sb__text">
              Mình tập trung vào sản phẩm chạy thật: UI gọn, API rõ ràng, triển khai nhanh bằng Docker và Nginx.
            </p>
          </div>

          <div className="sb__block">
            <div className="sb__label">Kỹ năng</div>
            <div className="sb__chips">
              <span className="pill">React</span>
              <span className="pill">Spring Boot</span>
              <span className="pill">PostgreSQL</span>
              <span className="pill">Docker</span>
              <span className="pill">Nginx</span>
              <span className="pill">REST</span>
            </div>
          </div>

          <div className="sb__cta">
            <a className="sbBtn sbBtn--primary" href="#projects">
              Xem dự án
            </a>
            <a className="sbBtn" href="#contact">
              Liên hệ
            </a>
          </div>
        </div>
      </aside>

      <div className="cv__content">
        <header className="topbar">
          <div className="topbar__title">Curriculum Vitae</div>
          <nav className="topbar__nav" aria-label="Điều hướng">
            <a className="topbar__link" href="#profile">
              Profile
            </a>
            <a className="topbar__link" href="#timeline">
              Timeline
            </a>
            <a className="topbar__link" href="#projects">
              Projects
            </a>
            <a className="topbar__link" href="#contact">
              Contact
            </a>
          </nav>
        </header>

        <main className="content">
          <section id="profile" className="block">
            <div className="block__head">
              <h1 className="block__h1">Nguyễn Xuân Nhất</h1>
              <p className="block__lead">
                Fullstack developer hướng sản phẩm. Thích code sạch, dễ bảo trì và deploy rõ ràng.
              </p>
            </div>

            <div className="stats">
              <div className="stat">
                <div className="stat__k">Triển khai</div>
                <div className="stat__v">Docker Compose</div>
              </div>
              <div className="stat">
                <div className="stat__k">Frontend</div>
                <div className="stat__v">React</div>
              </div>
              <div className="stat">
                <div className="stat__k">Backend</div>
                <div className="stat__v">Java / Spring Boot</div>
              </div>
              <div className="stat">
                <div className="stat__k">Reverse proxy</div>
                <div className="stat__v">Nginx</div>
              </div>
            </div>
          </section>

          <section id="timeline" className="block">
            <div className="block__titleRow">
              <h2 className="block__h2">Timeline</h2>
              <div className="block__hint">Bạn sửa phần này theo học tập/kinh nghiệm của bạn.</div>
            </div>

            <div className="timeline">
              <div className="tItem">
                <div className="tItem__dot" aria-hidden="true" />
                <div className="tItem__card">
                  <div className="tItem__top">
                    <div className="tItem__title">DevOps + Deploy Web</div>
                    <div className="tItem__time">2026</div>
                  </div>
                  <div className="tItem__text">
                    Build frontend, chạy backend, cấu hình Nginx reverse proxy, triển khai trên server thật.
                  </div>
                </div>
              </div>

              <div className="tItem">
                <div className="tItem__dot" aria-hidden="true" />
                <div className="tItem__card">
                  <div className="tItem__top">
                    <div className="tItem__title">Fullstack fundamentals</div>
                    <div className="tItem__time">2025</div>
                  </div>
                  <div className="tItem__text">
                    Làm quen REST API, database, phân tách layer, xử lý lỗi, tối ưu trải nghiệm người dùng.
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="projects" className="block">
            <div className="block__titleRow">
              <h2 className="block__h2">Projects</h2>
              <div className="block__hint">Thay mô tả dự án cho đúng bài của bạn.</div>
            </div>

            <div className="grid">
              <article className="pCard">
                <div className="pCard__head">
                  <div className="pCard__tag">Web</div>
                  <div className="pCard__title">CV site (React)</div>
                </div>
                <p className="pCard__text">Trang CV 1 trang, responsive, dễ chỉnh sửa nội dung.</p>
                <div className="pCard__stack">
                  <span className="mini">React</span>
                  <span className="mini">CSS</span>
                </div>
              </article>

              <article className="pCard">
                <div className="pCard__head">
                  <div className="pCard__tag">API</div>
                  <div className="pCard__title">Backend service</div>
                </div>
                <p className="pCard__text">Spring Boot API + PostgreSQL, cấu hình prod và healthcheck.</p>
                <div className="pCard__stack">
                  <span className="mini">Spring Boot</span>
                  <span className="mini">PostgreSQL</span>
                </div>
              </article>

              <article className="pCard">
                <div className="pCard__head">
                  <div className="pCard__tag">Deploy</div>
                  <div className="pCard__title">Docker + Nginx</div>
                </div>
                <p className="pCard__text">Đóng gói service, reverse proxy, chạy ổn định trên server.</p>
                <div className="pCard__stack">
                  <span className="mini">Docker</span>
                  <span className="mini">Nginx</span>
                </div>
              </article>
            </div>
          </section>

          <section id="contact" className="block block--contact">
            <div className="contact">
              <div>
                <h2 className="block__h2">Contact</h2>
                <p className="block__lead">
                  Bạn có thể cập nhật email/GitHub trực tiếp trong <code>frontend/src/App.js</code>.
                </p>
              </div>
              <div className="contact__actions">
                <a className="sbBtn sbBtn--primary" href="mailto:xuannhatvn211@gmail.com">
                  Gửi email
                </a>
                <a className="sbBtn" href="#profile">
                  Lên đầu trang
                </a>
              </div>
            </div>
          </section>

          <footer className="end">
            <span>© {new Date().getFullYear()} Nguyễn Xuân Nhất</span>
            <span className="end__sep">•</span>
            <span>CV layout</span>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
