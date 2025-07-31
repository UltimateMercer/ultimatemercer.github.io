import { compareDesc } from "date-fns";

import experienceDataEn from "@/content/experiences/en-us/experiences.json";
import experienceDataPt from "@/content/experiences/pt-br/experiences.json";

export const experienceDataPtSorted = experienceDataPt.sort(
  (a: any, b: any) => {
    return compareDesc(new Date(a.start), new Date(b.start));
  }
);

export const experienceDataEnSorted = experienceDataEn.sort(
  (a: any, b: any) => {
    return compareDesc(new Date(a.start), new Date(b.start));
  }
);
