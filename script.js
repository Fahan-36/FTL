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
<<<<<<< HEAD
        alert('🎨 Welcome to my portfolio!');
    }

    handleLearnMore() {
        alert('📧 Let\'s connect! Email: farhan@example.com');
=======
        alert('🚀 Welcome — Pritthi Prokash Sarkar!');
    }

    handleLearnMore() {
        alert('ℹ️ Learn more about Pritthi Prokash Sarkar.');
>>>>>>> 20730a775992947843db802809a9a109d4086793
    }


}

document.addEventListener('DOMContentLoaded', () => new HeroSection());
