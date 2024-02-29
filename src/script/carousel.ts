export class Carousel {
    slideIndex: number = 0;
    quotes: NodeListOf<Element> = document.querySelectorAll('.quote');

    constructor(interval?: number) {
        document.getElementById('nextBtn')?.addEventListener('click', () => this.nextQuote());
        document.getElementById('prevBtn')?.addEventListener('click', ()=> this.prevQuote());
        // Automatically advance the carousel (optional)

        const autoRotate = ()=> {
            this.nextQuote();
            setTimeout(autoRotate, interval);
        }

        if (interval)
            setTimeout(autoRotate, interval);

    }



    showQuote(index: number): void {
        this.quotes.forEach((quote: Element, i: number) => {
            if (i === index) {
                quote.classList.add('active');
            } else {
                quote.classList.remove('active');
            }
        });
    }

    nextQuote(): void {
        this.slideIndex++;
        if (this.slideIndex >= (this.quotes?.length||0)) {
            this.slideIndex = 0;
        }
        this.showQuote(this.slideIndex);
    }

    prevQuote(): void {
        this.slideIndex--;
        if (this.slideIndex < 0) {
            this.slideIndex = this.quotes.length - 1;
        }
        this.showQuote(this.slideIndex);
    }
}








// Start automatic rotation (uncomment this line if you want auto-rotation)