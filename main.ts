// Pump.fun Sharpe Sprint — Cleanest Paper Bot Wins.
// One strategy program, main.ts on Node 22. The bot trades paper money on a
// 6-hour pump.fun forward replay; places go by hourly Sharpe ratio, so it
// aims for steady, controlled gains across the window, not one lucky moonshot.

import { runBot } from './vendor/makefun-bot.ts';
import { createStrategy, DEFAULT_PARAMS } from './strategy.ts';

await runBot(createStrategy(DEFAULT_PARAMS));
