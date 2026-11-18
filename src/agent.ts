import { SentimentOracle } from "./oracle/sentiment_oracle";
import { JupiterExecutor } from "./execution/jupiter_executor";

export class SentimentMomentumAgent {
  private oracle = new SentimentOracle();
  private jupiter = new JupiterExecutor();

  public async evaluateSignals() {
    const signal = this.oracle.parseSocialMetrics("JUP");
    console.log(`[Sentiment Agent] Token: ${signal.token} | AI Bullish Score: ${(signal.score * 100).toFixed(0)}% | Volume Surge: +${signal.volumeSurge5m}%`);
  }
}

if (require.main === module) {
  new SentimentMomentumAgent().evaluateSignals();
}
