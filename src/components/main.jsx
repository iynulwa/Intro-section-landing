function Main() {
    return(
        <main>
            <picture>
                <source media="(min-width: 40rem)" srcSet="/images/image-hero-desktop.png" alt="hero image" />
                <img src="/images/image-hero-mobile.png" alt="hero image" />
            </picture>
            <div>
                <h1>Make remote work</h1>
                <p>Get your team in sync, no matter your location. Streamline processes, 
                    create team rituals, and watch productivity soar.
                </p>
                <button type="button">Learn More</button>
                <div className="client-logos">
                    <img src="/images/client-databiz.svg" alt="databiz client logo" />
                    <img src="/images/client-audiophile.svg" alt="audiophile client logo" />
                    <img src="/images/client-meet.svg" alt="meet client logo" />
                    <img src="/images/client-maker.svg" alt="maker client logo" />
                </div>
            </div>
        </main>
    )
}

export default Main;