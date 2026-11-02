export default function Navbar() {
  return (
    <header className="site-header wrap">
      <a className="wordmark" href="#home" aria-label="Sebastian Graham, home"><span role="img" aria-label="Robot">🤖</span></a>
      <nav aria-label="Main navigation">
        <a href="#projects">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Get in touch <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
  );
}
