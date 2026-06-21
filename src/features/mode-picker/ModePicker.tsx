type ModePickerProps = {
  onOpenGame: () => void;
  onOpenSheetOnly: () => void;
};

const DISCORD_URL = "https://discord.gg/6xjFbau6T";

export function ModePicker({ onOpenGame, onOpenSheetOnly }: ModePickerProps) {
  return (
    <main className="mode-picker-page">
      <section className="mode-picker-shell" aria-labelledby="mode-picker-title">
        <header className="mode-picker-brand">
          <img className="mode-picker-logo" src="/brand/gorest-logo.jpg" alt="Gorest" />
          <a className="mode-picker-discord" href={DISCORD_URL} target="_blank" rel="noreferrer">
            Join Discord
          </a>
        </header>

        <div className="mode-picker-copy">
          <p className="mode-picker-kicker">Gorest Asset Studio</p>
          <h1 id="mode-picker-title">We are infinite.</h1>
          <p>
            Gorest is a 2D game asset pipeline for turning spritesheets into animation-ready scenes,
            previews, and reusable game objects.
          </p>
        </div>

        <div className="mode-choice-grid" aria-label="Choose spritesheet workspace mode">
          <button type="button" className="mode-choice-card" onClick={onOpenSheetOnly}>
            <span>Spritesheet Only</span>
          </button>
          <button type="button" className="mode-choice-card" onClick={onOpenGame}>
            <span>Spritesheets in<br />Animation / Game</span>
          </button>
        </div>
      </section>
    </main>
  );
}
