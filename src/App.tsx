import avatarIllustration from './assets/avatar-programmer.svg'
import { profile } from './data/profile'
import { themeOptions } from './data/themes'
import { useTheme } from './hooks/useTheme'
import './App.css'

function App() {
  const { theme, setTheme } = useTheme()

  return (
    <main className="page-shell">
      <div className="background-glow background-glow-left" />
      <div className="background-glow background-glow-right" />

      <section className="namecard-card">
        <div className="card-main">
          <div className="hero-copy">
            <h1>{profile.name}</h1>
            <p className="hero-title">{profile.title}</p>
            <p className="hero-description">
              {profile.bio}
              <span className="hero-description-cn">{profile.responsibility}</span>
            </p>

            <div className="action-row">
              <a className="primary-action" href={`mailto:${profile.email}`}>
                Contact Judy
              </a>
              <a className="secondary-action" href={`tel:${profile.phone}`}>
                Call {profile.phone}
              </a>
            </div>

            <div className="theme-switcher" aria-label="Theme switcher">
              {themeOptions.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  className={`theme-chip ${theme === option.id ? 'active' : ''}`}
                  onClick={() => setTheme(option.id)}
                  aria-pressed={theme === option.id}
                  title={option.description}
                >
                  {option.label}
                </button>
              ))}
            </div>

            <div className="mobile-compact-panel">
              <div className="mobile-compact-top">
                <div className="mobile-avatar-card">
                  <img
                    src={avatarIllustration}
                    alt="Cartoon illustration of Judy as a frontend developer"
                  />
                </div>

                <div className="mobile-contact-list">
                  <a className="mobile-contact-item" href={`tel:${profile.phone}`}>
                    <span className="contact-key">Phone</span>
                    <span className="contact-value">{profile.phone}</span>
                  </a>

                  <a className="mobile-contact-item" href={`mailto:${profile.email}`}>
                    <span className="contact-key">Email</span>
                    <span className="contact-value">{profile.email}</span>
                  </a>
                </div>
              </div>

              <div className="mobile-focus-panel">
                <p className="section-label">Focus</p>
                <div className="focus-tags">
                  <span className="focus-tag">通用配置模块</span>
                  <span className="focus-tag">Reusable UI</span>
                  <span className="focus-tag">Mobile Ready</span>
                </div>
              </div>
            </div>

            <div className="detail-grid">
              <article className="detail-block">
                <p className="section-label">About</p>
                <h2>Quiet systems, clear interfaces.</h2>
                <p>
                  Judy focuses on common configuration and foundational frontend modules,
                  shaping stable interfaces that feel simple on the surface and dependable
                  underneath.
                </p>
              </article>

              <article className="detail-block">
                <p className="section-label">Focus</p>
                <ul className="focus-list">
                  <li>通用配置模块 / Shared configuration workflows</li>
                  <li>Reusable UI structure with consistent interaction details</li>
                  <li>Responsive implementation for desktop and mobile reading</li>
                </ul>
              </article>
            </div>
          </div>

          <div className="card-aside">
            <div className="visual-card">
              <img
                src={avatarIllustration}
                alt="Cartoon illustration of Judy as a frontend developer"
              />
            </div>

            <div className="contact-card">
              <div>
                <p className="section-label">Contact</p>
                <h2>Keep it simple and direct.</h2>
              </div>

              <div className="contact-list">
                <a className="contact-item" href={`tel:${profile.phone}`}>
                  <span className="contact-key">Phone</span>
                  <span className="contact-value">{profile.phone}</span>
                </a>

                <a className="contact-item" href={`mailto:${profile.email}`}>
                  <span className="contact-key">Email</span>
                  <span className="contact-value">{profile.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
