class HeroSection {
    constructor() {
        this.getStartedBtn = document.querySelector('.primary-btn');
        this.learnMoreBtn = document.querySelector('.secondary-btn');
        this.heroImage = document.querySelector('.hero-image img');

        this.init();
    }

    init() {
        this.getStartedBtn.addEventListener('click', () => this.handleGetStarted());
        this.learnMoreBtn.addEventListener('click', () => this.handleLearnMore());
    }

    handleGetStarted() {
        alert('🎨 Welcome to my portfolio!');
    }

    handleLearnMore() {
        alert('📧 Let\'s connect! Email: farhan@example.com');
    }


}

document.addEventListener('DOMContentLoaded', () => new HeroSection());
