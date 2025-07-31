import { compareDesc } from "date-fns";

import educationDataEn from "@/content/educations/en-us/educations.json";
import educationDataPt from "@/content/educations/pt-br/educations.json";

export const educationDataPtSorted = educationDataPt.sort((a: any, b: any) => {
  return compareDesc(new Date(a.start), new Date(b.start));
});

export const educationDataEnSorted = educationDataEn.sort((a: any, b: any) => {
  return compareDesc(new Date(a.start), new Date(b.start));
});
