export class JupiterExecutor {
  public async getQuote(inputMint: string, outputMint: string, amountLamports: number) {
    return {
      inAmount: amountLamports,
      outAmount: amountLamports * 1.045, // Expected return
      priceImpactPct: "0.04",
      routePlan: [{ swapInfo: { ammKey: "Whirlpool", label: "Orca" } }]
    };
  }
}
