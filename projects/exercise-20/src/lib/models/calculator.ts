export class Calculator {

  private readonly conversionRates: { [key: string]: number } = {
    'STONES_TO_CAPS': 2.5,
    'CAPS_TO_STONES': 0.4,
    'STONES_TO_RUBIES': 0.1,
    'RUBIES_TO_STONES': 10,
    'CAPS_TO_RUBIES': 0.05,
    'RUBIES_TO_CAPS': 20
  };

  public calculate(prompt: string): string {
    const promptParts = prompt.split(' ');
    const amount = parseFloat(promptParts[0]);
    const fromCurrency = promptParts[1];
    const operator = promptParts[2];
    const toCurrency = promptParts[3];
    const conversionRate = this.getConversionRate(fromCurrency, toCurrency);
    return `You will get ${amount * conversionRate} ${toCurrency} for ${amount} ${fromCurrency}`;
  }

  private getConversionRate(fromCurrency: string, toCurrency: string): number {
    const key = `${fromCurrency}_TO_${toCurrency}`;
    return this.conversionRates[key];
  }
}
