"use client";
import Image from "next/image";
export interface EducationCardProps {
  education: {
    institute: string;
    course: string;
    status: string;
    image?: string | null | undefined;
  };
  withImage?: boolean;
}

export const MyEducations = ({
  education,
  withImage = false,
}: EducationCardProps) => {
  return (
    <div className="flex items-center gap-2 mb-2.5">
      {withImage && (
        <img
          src={education.image || ""}
          width={80}
          height={80}
          className="w-20 h-20 rounded"
          alt={education.institute}
        />
      )}
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold">{education.institute}</h3>
        <p className="text-sm">{education.course}</p>
        <p className="text-sm">{education.status}</p>
      </div>
    </div>
  );
};
