export default class SizeCalculator {
  constructor(targetElement, specPercent = 0) {
    const baseFontSize = parseInt(getComputedStyle(document.documentElement).fontSize, 10);
    const elementFontSize = parseInt(getComputedStyle(targetElement).fontSize, 10);

    this.percent = (elementFontSize / baseFontSize) * specPercent;

    this.em = this.em.bind(this);
  }

  em(px) {
    return this.percent * parseInt(px, 10);
  }
}
