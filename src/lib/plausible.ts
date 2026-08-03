// lib/plausible.ts
import * as PlausibleModule from "@plausible-analytics/tracker";

// Garante o acesso à função não importada via default
const Plausible = (PlausibleModule as any).default || PlausibleModule;

export const plausible = Plausible({
  domain: "ultimatemercer.com",
});
