import InterviewCard from "@/components/InterviewCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview-Ready with AI-Powered practice and feedback</h2>
          <p className="text-lg">
            Practice on real interview questions and get instant feedback on
            your performance.
          </p>
          <Button
            asChild
            className="btn-primary max-sm:w-full"
          >
            <Link href="/interview">Start Interview</Link>
          </Button>
        </div>
        <Image
          src="/robot.png"
          alt="Learning robot"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>

        <div className="interviews-section">
          {interviewCovers.map((interview) => (
            <InterviewCard
              {...interview}
              key={interview.Id}
            />
          ))}
          <p>You haven&apos;t scheduled any interviews yet</p>
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Take Interview</h2>

        <div className="interviews-section">
          <p>There are no interviews available</p>
        </div>
      </section>
    </>
  );
};

export default HomePage;
