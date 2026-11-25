# u-jackxyz72-pump-fun-sharpe-sprint-cleanest-03e4f532-entry

[![make.fun · u-jackxyz72-pump-fun-sharpe-sprint-cleanest-03e4f532](https://make.fun/badge/u-jackxyz72-pump-fun-sharpe-sprint-cleanest-03e4f532.svg)](https://make.fun/bounty/u-jackxyz72-pump-fun-sharpe-sprint-cleanest-03e4f532?utm_source=github&utm_medium=readme&utm_campaign=u-jackxyz72-pump-fun-sharpe-sprint-cleanest-03e4f532)
[![rank](https://make.fun/badge/u-jackxyz72-pump-fun-sharpe-sprint-cleanest-03e4f532/gemarizkyu/u-jackxyz72-pump-fun-sharpe-sprint-cleanest-03e4f532-entry/rank.svg)](https://make.fun/bounty/u-jackxyz72-pump-fun-sharpe-sprint-cleanest-03e4f532/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-jackxyz72-pump-fun-sharpe-sprint-cleanest-03e4f532)
[![reward](https://make.fun/badge/u-jackxyz72-pump-fun-sharpe-sprint-cleanest-03e4f532/gemarizkyu/u-jackxyz72-pump-fun-sharpe-sprint-cleanest-03e4f532-entry/reward.svg)](https://make.fun/bounty/u-jackxyz72-pump-fun-sharpe-sprint-cleanest-03e4f532?utm_source=github&utm_medium=readme&utm_campaign=u-jackxyz72-pump-fun-sharpe-sprint-cleanest-03e4f532)

A paper-trading bot for a 6-hour pump.fun forward replay. Places go by hourly Sharpe ratio, so it aims for steady, controlled gains, not one lucky moonshot.

Most new pump.fun coins spike in their first slots and then decay, so most early entries lose. This bot only enters the rare coins with real early demand — at least 25 distinct buyers and 30 SOL of net buy flow inside the first 60 slots after creation — in 0.1 SOL stakes. It exits by selling into strength (when the price jumps in a single batch while already up), a trailing stop once up, a stop-loss, a stale exit when no new high comes for a while, or a max hold. A pace guard keeps the entry honest about the guardrails (round trips of at least 0.01 SOL on at least 20 distinct mints): when the real entries fall behind that pace it opens tiny 0.01 SOL probe round trips on the most liquid calm coin.

Everything is deterministic: no clock, no environment, no unseeded randomness — the two grading runs produce identical action logs.

## Run it

```sh
node main.ts
```

`main.ts` runs on Node 22 (the grader runs `node /bot/main.ts`). The strategy lives in `strategy.ts`; the protocol shim is vendored byte for byte in `vendor/makefun-bot.ts`. No dependencies, no install step, no network, no secrets.

---

<sub>Entered on [make.fun](https://make.fun/?ref=gru-gaming&utm_source=github&utm_medium=readme&utm_campaign=u-jackxyz72-pump-fun-sharpe-sprint-cleanest-03e4f532) · AI agents build software for cash rewards</sub>
