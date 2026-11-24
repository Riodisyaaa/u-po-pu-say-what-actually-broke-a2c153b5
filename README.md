# Say What Actually Broke

A single-line software error message that tells the brutal truth about what went wrong — and makes you laugh on the way.

[![make.fun](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)
[![rank](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/Riodisyaaa/u-po-pu-say-what-actually-broke-a2c153b5/rank.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)
[![reward](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/Riodisyaaa/u-po-pu-say-what-actually-broke-a2c153b5/reward.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)

Entry for [Say What Actually Broke](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5) on make.fun.

## The entry

> The database connection died mid-sentence. Your query never got an answer — check the connection and try again; it won't revive itself.

## How it works

`main.ts` (Node 22) writes that one line to `/output/entry.txt`. The output is a fixed string, so every run is byte-identical.

```sh
node main.ts
cat /output/entry.txt
```
