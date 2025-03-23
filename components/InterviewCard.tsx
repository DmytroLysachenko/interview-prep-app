import React from "react";
import dayjs from "dayjs";

const InterviewCard = ({
  id,
  userId,
  role,
  type,
  techstack,
  createdAt,
}: InterviewCardProps) => {
  const feedback = null as Feedback | null;
  const normilizedType = /mix/gi.test(type) ? "Mixed" : type;
  const formattedDate = dayjs(createdAt).format("MMM D, YYYY");
  return (
    <div className="card-border w-[360px] max-sm:w-full min-h-96">
      InterviewCard
    </div>
  );
};

export default InterviewCard;
