import React from 'react'

export default props => (
  <React.Fragment>
    <section className="wrapper style2">
      <div className="inner narrow">
        <header className="heading major">
          <h2>Bist du bereit?</h2>
          <p>Amet ligula vulputate consequat sit amet nullam</p>
        </header>

        <form
          action="https://formspree.io/info@talosinsights.com"
          method="post"
        >
          <div className="field">
            <input
              name="email"
              id="email"
              placeholder="Deine Email Addresse"
              type="email"
            />
          </div>

          <div className="field">
            <ul className="actions special">
              <li>
                <button
                  className="button primary"
                  type="submit"
                  value="Get Notified"
                >
                  Bleib Informiert
                </button>
              </li>
            </ul>
          </div>
        </form>
      </div>
    </section>

    <section id="footer">
      <div className="inner">
        <ul className="icons">
          <li>
            <a href="#" className="icon brands fa-facebook-f">
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-twitter">
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon solid fa-map-marker-alt">
              <span className="label">Location</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon solid fa-phone">
              <span className="label">Phone</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon solid fa-envelope">
              <span className="label">Email</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="copyright">&copy; Untitled. All rights reserved.</div>
    </section>
  </React.Fragment>
)
