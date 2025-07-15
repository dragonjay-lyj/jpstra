// /components/SurveyResultCard.tsx

import React, { useState, useEffect } from "react";
import clsx from "clsx";

// --- TYPE DEFINITIONS ---
interface ImpressionData {
  goodLooks: string;
  comfort: string;
  easeOfTying: string;
  shyness: string;
}

interface SurveyData {
  id: number | string;
  handleName: string;
  age: string;
  gender: string;
  occupation: string;
  residence: string;
  firstTightenedAge: string;
  eventForFirstTightening: string;
  firstTypeOfFundoshi: string;
  impression: ImpressionData;
  episodeOfFirstTightening: string;
  learnedFrom: string;
  ageWhenInterestedInFundoshi: string;
  reasonForInterestInFundoshi: string;
  currentlyTieFundoshi: string;
  whenToTieFundoshi: string;
  typesOfFundoshiTied: string[];
  favoriteFundoshi: string;
  usualUnderwear: string;
  usualSwimsuit: string;
  familyAwareness: string;
  orientationForKokoro: string;
  opinionOnFemaleFundoshi: string;
  messageToNonTiers: string;
  finalThoughts: string;
}

interface SurveyResultCardProps {
  surveyData: SurveyData;
  className?: string;
}

// --- DATA CONFIGURATION ---
// This structure drives the UI, making it easy to add, remove, or reorder questions.
const surveyStructure = [
  { label: "问题1．年龄", key: "age" },
  { label: "问题2．性别", key: "gender" },
  { label: "问题3．职业", key: "occupation" },
  { label: "问题4．居住地", key: "residence" },
  { label: "问题5. 您第一次系褌是在几岁？", key: "firstTightenedAge", span: 2 },
  { label: "问题6. 当时是有什么特别的活动吗？如果是，请告知是何种活动。？", key: "eventForFirstTightening", span: 2 },
  { label: "问题7. 您第一次系的褌是哪种类型？", key: "firstTypeOfFundoshi", span: 2 },
  {
    label: "问题8. 您第一次系褌时的感想如何？",
    key: "impression",
    span: 2,
    render: (impression: ImpressionData) => (
      <ul className="mt-2 space-y-2 rounded-md border bg-white p-3 dark:border-neutral-700 dark:bg-neutral-800/50">
        {Object.entries(impression).map(([key, value]) => {
          const labels: Record<string, string> = {
            goodLooks: "１．关于帅气度",
            comfort: "２．关于穿着舒适度",
            easeOfTying: "３．关于穿戴难易度",
            shyness: "４．关于羞耻感",
          };
          return (
            <li key={key} className="flex justify-between text-sm">
              <span className="font-medium text-neutral-600 dark:text-neutral-400">{labels[key]}：</span>
              <span className="text-neutral-800 dark:text-neutral-200">{value}</span>
            </li>
          );
        })}
      </ul>
    ),
  },
  { label: "问题9．请分享您第一次系褌时的小故事。", key: "episodeOfFirstTightening", span: 2 },
  { label: "问题10．是谁教您系褌的方法的？", key: "learnedFrom", span: 2 },
  { label: "问题11．您第一次对褌产生兴趣是在几岁？", key: "ageWhenInterestedInFundoshi" },
  { label: "问题12．您对褌产生兴趣的契机是什么？", key: "currentlyTieFundoshi" },
  { label: "问题13．您现在还穿褌吗？", key: "reasonForInterestInFundoshi", span: 2 },
  { label: "问题14．您通常在什么时候穿褌？", key: "whenToTieFundoshi", span: 2 },
  {
    label: "问题15．请选择所有您穿戴过的褌的类型。",
    key: "typesOfFundoshiTied",
    span: 2,
    render: (types: string[]) => types.join("、"),
  },
  { label: "问题16．在这些类型中，请选择您最喜欢的一种。", key: "favoriteFundoshi", span: 2 },
  { label: "问题17．您平时主要穿什么内裤？", key: "usualUnderwear" },
  { label: "问题18．您平时主要穿什么泳裤？", key: "usualSwimsuit" },
  { label: "问题19．您的家人或伴侣知道您穿褌吗？", key: "familyAwareness", span: 2 },
  { label: "问题20．（此问题面向穿过六尺褌（囊袋式）的受访者）请问您放置阴茎（鸡巴）的方向是？", key: "orientationForKokoro", span: 2 },
  { label: "问题21．（此问题面向男性）据说现在面向女性的褌已成为一种小众风潮，您对此有何看法？", key: "opinionOnFemaleFundoshi", span: 2 },
  { label: "问题22．请对从未穿过褌的人说几句话吧。", key: "messageToNonTiers", span: 2 },
  { label: "问题23．最后，关于褌，请用一句话总结！", key: "finalThoughts", span: 2 },
];

// --- HELPER COMPONENT ---
interface ResultItemProps {
  label: string;
  children: React.ReactNode;
  isVisible: boolean;
  delay: number;
  className?: string;
}

const ResultItem: React.FC<ResultItemProps> = ({ label, children, isVisible, delay, className }) => (
  <div
    className={clsx(
      "transform transition-all duration-500",
      isVisible ? "opacity-100 translate-y-0" : " translate-y-4",
      className
    )}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <dt className="truncate text-sm font-medium text-neutral-500 dark:text-neutral-400">{label}</dt>
    <dd className="mt-1 text-base text-neutral-900 dark:text-neutral-100">{children || "N/A"}</dd>
  </div>
);

// --- MAIN COMPONENT ---
export const SurveyResultCard: React.FC<SurveyResultCardProps> = ({ surveyData, className }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100); // Small delay to ensure transition is applied
    return () => clearTimeout(timer);
  }, []);

  if (!surveyData) {
    return null; // Or a loading skeleton
  }

  return (
    <div
      className={clsx(
        "w-full max-w-4xl overflow-hidden rounded-xl border bg-white shadow-lg transition-opacity duration-500 dark:border-neutral-800 dark:bg-neutral-900",
        isMounted ? "opacity-100" : "",
        className
      )}
    >
      {/* Header */}
      <div className="border-b bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-white/[0.03] sm:p-6">
        <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400">回答编号 {surveyData.id}</h3>
        <p className="mt-1 text-base text-neutral-700 dark:text-neutral-300">
          <span className="font-semibold">昵称:</span> {surveyData.handleName}
        </p>
      </div>

      {/* Body */}
      <dl className="grid grid-cols-1 gap-x-8 gap-y-6 p-4 sm:p-6 md:grid-cols-2">
        {surveyStructure.map((item, index) => {
          // @ts-ignore - We trust the key is valid from our config
          const value = surveyData[item.key];
          return (
            <ResultItem
              key={item.label}
              label={item.label}
              isVisible={isMounted}
              delay={index * 30} // Staggered delay for each item
              className={clsx({ "md:col-span-2": item.span === 2 })}
            >
              {item.render ? item.render(value) : value}
            </ResultItem>
          );
        })}
      </dl>
    </div>
  );
};

export default SurveyResultCard;