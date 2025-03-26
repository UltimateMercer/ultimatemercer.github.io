"use client";
import { Card, CardContent, CardHeader } from "./ui/card";
import { FormatMonthYear } from "./date-format";
import { Badge } from "./ui/badge";

export interface ExperienceCardProps {
  experience: {
    company: string;
    role: string;
    description?: string;
    start: string;
    end?: string;
    tags: string[];
  };
}
export const MyExperiences = ({ experience }: ExperienceCardProps) => {
  return (
    <Card className="!border-none !shadow-none bg-transparent gap-2 py-2">
      <CardHeader className="!pt-0 !px-0 !pb-0">
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h3 className="inline-flex text-xl items-center justify-center gap-x-1 font-semibold leading-none">
            {experience.company}
          </h3>
          <div className="text-sm text-gray-500 capitalize">
            {FormatMonthYear({ date: experience.start })}
            {experience.end
              ? ` - ${FormatMonthYear({ date: experience.end })}`
              : ` - em andamento`}
          </div>
        </div>

        <h4 className="text-base leading-none mt-0">{experience.role}</h4>
      </CardHeader>
      <CardContent className="!px-0 !pb-2 mt-0">
        {experience.description && (
          <p className="text-sm mb-1">{experience.description}</p>
        )}

        <div className="flex flex-wrap gap-1">
          {experience.tags.length > 0 &&
            experience.tags.map((tag: string) => (
              <Badge
                key={tag}
                variant={"outline"}
                className="rounded-md print:bg-secondary"
              >
                {tag}
              </Badge>
            ))}
        </div>
      </CardContent>
    </Card>
  );
};
