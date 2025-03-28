import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/lib/actions/auth.action";
import {
  getFeedbackByInterviewId,
  getInterviewById,
} from "@/lib/actions/general.action";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const Page = async ({ params }: RouteParams) => {
  const { id } = await params;

  const [user, interview] = await Promise.all([
    getCurrentUser(),
    getInterviewById(id!),
  ]);

  if (!interview || !user) redirect("/");

  const feedback = await getFeedbackByInterviewId({
    interviewId: id!,
    userId: user?.id,
  });

  const formattedDate =
    dayjs(feedback?.createdAt).format("MMM D, YYYY - hh:mm A") || "N/A";

  return (
    <section className="section-feedback">
      <div className="flex flex-row justify-center">
        <h1 className="text-4xl font-semibold">
          Feedback on interview -{" "}
          <span className="capitalize">{interview.role}</span> Interview
        </h1>
      </div>
      <div className="flex flex-row gap-10 justify-center">
        <div className="flex flex-row gap-1">
          <Image
            src="/star.svg"
            alt="star"
            width={24}
            height={24}
            className=""
          />
          <p className="text-2xl">
            Overall Impression:{" "}
            <span className="font-semibold text-primary-200">
              {feedback?.totalScore}
            </span>
            /100
          </p>
        </div>
        <div className="flex flex-row gap-1">
          <Image
            src="/calendar.svg"
            alt="calendar"
            width={24}
            height={24}
          />
          <p className="text-2xl">{formattedDate}</p>
        </div>
      </div>
      <hr />

      <p>{feedback?.finalAssessment}</p>

      <div className="flex flex-col gap-4">
        <h2>Breakdown of Evaluation:</h2>

        {feedback?.categoryScores.map((category, index) => (
          <div key={category.name}>
            <h3>
              {index + 1}. {category.name} ({category.score}/20)
            </h3>

            <p>{category.comment}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <h3>Strengths:</h3>
        <ul>
          {feedback?.strengths.map((strength, index) => (
            <li key={index}>{strength}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-3">
        <h3>Areas for Improvements:</h3>
        <ul>
          {feedback?.areasForImprovement?.map((area, index) => (
            <li key={index}>{area}</li>
          ))}
        </ul>
      </div>

      <div className="buttons">
        <Button className="btn-secondary flex-1">
          <Link
            href="/"
            className="flex w-full justify-center"
          >
            <p className="text-sm font-semibold text-primary-200 text-center">
              Back to dashboard
            </p>
          </Link>
        </Button>

        <Button className="btn-primary flex-1">
          <Link
            href={`/interview/${id}`}
            className="flex w-full justify-center"
          >
            <p className="text-sm font-semibold text-black text-center">
              Retake Interview
            </p>
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Page;
