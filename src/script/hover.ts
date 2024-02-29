export class HoverEffect {
  private xLimit = 10;
  private yLimit = 10;

  selector!: string;

  constructor(selector: string, xLimit = 10, yLimit = 10) {
    this.selector = selector;
    this.xLimit = xLimit;
    this.yLimit = yLimit;
    this.handleMouseMove();
  }

  private handleMouseMove() {
    document.querySelectorAll(this.selector).forEach((element: any) => {
      element.addEventListener("mousemove", (evt: MouseEvent) => {
        element.style.setProperty("transform", "none");
        element.style.setProperty("transition", "color 0.2s ease-in-out, background 0.2s ease-in-out");

        const x = evt.offsetX;
        const y = evt.offsetY;
        const { width, height } = element.getBoundingClientRect();
        const halfWidth = width / 2;
        const halfHeight = height / 2;

        const yRotation = ((x - halfWidth) / halfWidth) * this.xLimit;
        const xRotation = ((y - halfHeight) / halfHeight) * this.yLimit * -1;

        const style = `perspective(500px) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;

        element.style.setProperty("transform", style);
      });

      element.addEventListener("mouseleave", () => {
        element.style.setProperty("transition", "transform 0.5s, color 0.2s ease-in-out, background 0.2s ease-in-out");
        element.style.setProperty("transform", `perspective(500px) rotateX(0deg) rotateY(0deg)`);
      });
    });
  }
}
