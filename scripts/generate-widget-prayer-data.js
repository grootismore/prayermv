#!/usr/bin/env node
/**
 * Regenerates targets/widget/PrayerData.json from mv-prayertimes' full
 * island database, so the widget can show (and offer as a configuration
 * option) every island the RN app itself can - not just a small curated
 * subset. Mirrors lib/prayerTimes.ts exactly: same source islands/atolls,
 * plus the same SUPPLEMENTAL_ISLANDS (Hulhumale', Vilingili) that aren't in
 * mv-prayertimes' own island list but share Male's atoll/offset.
 *
 * Run this again whenever mv-prayertimes is upgraded, so the widget's
 * bundled data stays in sync with what the app ships.
 */
const fs = require('fs');
const path = require('path');

const salatData = require('../node_modules/mv-prayertimes/salat.json');

const SUPPLEMENTAL_ISLANDS = [
  {
    atollId: 57,
    islandId: -1,
    atoll: 'K.',
    island: "Hulhumale'",
    offset: 0,
  },
  {
    atollId: 57,
    islandId: -2,
    atoll: 'K.',
    island: 'Vilingili',
    offset: 0,
  },
];

const islands = [
  ...salatData.islands.map(({ atollId, islandId, atoll, island, offset }) => ({
    atollId,
    islandId,
    atoll,
    island,
    offset,
  })),
  ...SUPPLEMENTAL_ISLANDS,
];

const output = {
  islands,
  atolls: salatData.atolls,
};

const outPath = path.join(__dirname, '../targets/widget/PrayerData.json');
fs.writeFileSync(outPath, JSON.stringify(output));
console.log(`Wrote ${islands.length} islands and ${Object.keys(salatData.atolls).length} atolls to ${outPath}`);
