"use client";

import Link from "next/link";
import React, { Fragment } from "react";
import {
  RiCheckLine,
  RiCloudLine,
  RiInformationLine,
  RiSubtractLine,
  RiUserLine,
} from "@remixicon/react";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { Label } from "@/components/Label";
import { Switch } from "@/components/Switch";
import { Tooltip } from "@/components/Tooltip";
import { ArrowAnimated } from "@/components/ui/ArrowAnimated";
import { Faqs } from "@/components/ui/Faqs";
import Testimonial from "@/components/ui/Testimonial";
import { cx } from "@/lib/utils";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

type Plan = Dictionary["pricing"]["plans"][number];
type Price = Plan["price"];

const isVariablePrice = (
  price: Price,
): price is { monthly: string; annually: string } => {
  return "monthly" in price;
};

export function PricingClient({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const pricing = dict.pricing;
  const [billingFrequency, setBillingFrequency] = React.useState<
    "monthly" | "annually"
  >("monthly");

  const priceOf = (plan: Plan): string => {
    const price = plan.price;
    if (isVariablePrice(price)) {
      return billingFrequency === "monthly" ? price.monthly : price.annually;
    }
    return price.fixed;
  };

  return (
    <main className="mx-auto mt-36 max-w-6xl px-3">
      <section
        aria-labelledby="pricing-title"
        className="animate-slide-up-fade"
        style={{
          animationDuration: "600ms",
          animationFillMode: "backwards",
        }}
      >
        <Badge>{pricing.badge}</Badge>
        <h1
          id="pricing-title"
          className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-6xl dark:from-gray-50 dark:to-gray-300"
        >
          {pricing.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-700 dark:text-gray-400">
          {pricing.description}
        </p>
      </section>

      <section
        id="pricing-overview"
        className="mt-20 animate-slide-up-fade"
        aria-labelledby="pricing-overview"
        style={{
          animationDuration: "600ms",
          animationDelay: "200ms",
          animationFillMode: "backwards",
        }}
      >
        <div className="flex items-center justify-center gap-2">
          <Label
            htmlFor="switch"
            className="text-base font-medium sm:text-sm dark:text-gray-400"
          >
            {pricing.monthly}
          </Label>
          <Switch
            id="switch"
            checked={billingFrequency === "annually"}
            onCheckedChange={() =>
              setBillingFrequency(
                billingFrequency === "monthly" ? "annually" : "monthly",
              )
            }
          />
          <Label
            htmlFor="switch"
            className="text-base font-medium sm:text-sm dark:text-gray-400"
          >
            {pricing.yearly}
          </Label>
        </div>

        <div className="grid grid-cols-1 gap-x-14 gap-y-8 lg:grid-cols-3">
          {pricing.plans.map((plan) => (
            <div key={plan.id} className="mt-6">
              {plan.isRecommended ? (
                <div className="flex h-4 items-center">
                  <div className="relative w-full">
                    <div
                      className="absolute inset-0 flex items-center"
                      aria-hidden="true"
                    >
                      <div className="w-full border-t border-emerald-600 dark:border-emerald-400" />
                    </div>
                    <div className="relative flex justify-center">
                      <span className="bg-white px-3 text-xs font-medium text-emerald-600 dark:bg-gray-950 dark:text-emerald-400">
                        {pricing.mostPopular}
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex h-4 items-center">
                  <div className="h-px w-full bg-gray-200 dark:bg-gray-800" />
                </div>
              )}
              <div className="mx-auto max-w-md">
                <h2 className="mt-6 text-sm font-semibold text-gray-900 dark:text-gray-50">
                  {plan.name}
                </h2>
                <div className="mt-3 flex items-center gap-x-3">
                  <span className="text-5xl font-semibold tabular-nums text-gray-900 dark:text-gray-50">
                    {priceOf(plan)}
                  </span>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    {pricing.perUser1} <br /> {pricing.perUser2}
                  </div>
                </div>
                <div className="mt-6 flex flex-col justify-between">
                  <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {plan.description}
                  </p>
                  <div className="mt-6">
                    {plan.isStarter ? (
                      <Button variant="secondary" asChild className="group">
                        <Link href={`/${locale}/changelog`}>
                          {plan.buttonText}
                          <ArrowAnimated />
                        </Link>
                      </Button>
                    ) : (
                      <Button asChild className="group">
                        <Link href={`/${locale}/changelog`}>
                          {plan.buttonText}
                          <ArrowAnimated />
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
                <ul
                  role="list"
                  className="mt-8 text-sm text-gray-700 dark:text-gray-400"
                >
                  {plan.capacity.map((feature, index) => (
                    <li
                      key={feature}
                      className="flex items-center gap-x-3 py-1.5"
                    >
                      {index === 0 && (
                        <RiUserLine
                          className="size-4 shrink-0 text-gray-500"
                          aria-hidden="true"
                        />
                      )}
                      {index === 1 && (
                        <RiCloudLine
                          className="size-4 shrink-0 text-gray-500"
                          aria-hidden="true"
                        />
                      )}
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <ul
                  role="list"
                  className="mt-4 text-sm text-gray-700 dark:text-gray-400"
                >
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-x-3 py-1.5"
                    >
                      <RiCheckLine
                        className="size-4 shrink-0 text-emerald-600 dark:text-emerald-400"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="mx-auto mt-20 max-w-xl sm:mt-32 lg:max-w-6xl">
        <Testimonial dict={dict.testimonial} />
      </div>

      {/* plan details (xs-lg) */}
      <section
        id="pricing-details"
        className="mt-20 sm:mt-36"
        aria-labelledby="pricing-details"
      >
        <div className="mx-auto space-y-8 sm:max-w-md lg:hidden">
          {pricing.plans.map((plan) => (
            <div key={plan.id}>
              <div className="rounded-xl bg-gray-400/5 p-6 ring-1 ring-inset ring-gray-200 dark:ring-gray-800">
                <h2
                  id={plan.id}
                  className="text-base font-semibold leading-6 text-gray-900 dark:text-gray-50"
                >
                  {plan.name}
                </h2>
                <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                  {`${priceOf(plan)} / ${pricing.perUserShort}`}
                </p>
              </div>
              <ul
                role="list"
                className="mt-10 space-y-10 text-sm leading-6 text-gray-900 dark:text-gray-50"
              >
                {pricing.sections.map((section) => (
                  <li key={section.name}>
                    <h3 className="font-semibold">{section.name}</h3>
                    <ul
                      role="list"
                      className="mt-2 divide-y divide-gray-200 dark:divide-gray-800"
                    >
                      {section.features.map((feature) =>
                        feature.plans[plan.id] ? (
                          <li
                            key={feature.name}
                            className="flex gap-x-3 py-2.5"
                          >
                            <RiCheckLine
                              className="size-5 flex-none text-emerald-600 dark:text-emerald-400"
                              aria-hidden="true"
                            />
                            <span>
                              {feature.name}{" "}
                              {typeof feature.plans[plan.id] === "string" ? (
                                <span className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                                  ({feature.plans[plan.id]})
                                </span>
                              ) : null}
                            </span>
                          </li>
                        ) : null,
                      )}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* plan details (lg+) */}
      <section className="mx-auto mt-20">
        <div className="mt-20 hidden sm:mt-28 lg:block">
          <div className="relative">
            <div className="sticky top-0 z-20 h-28 w-full bg-white dark:bg-gray-950" />
            <table className="w-full table-fixed border-separate border-spacing-0 text-left">
              <caption className="sr-only">{pricing.caption}</caption>
              <colgroup>
                <col className="w-2/5" />
                <col className="w-1/5" />
                <col className="w-1/5" />
                <col className="w-1/5" />
              </colgroup>
              <thead className="sticky top-28">
                <tr>
                  <th
                    scope="col"
                    className="border-b border-gray-100 bg-white pb-8 dark:border-gray-800 dark:bg-gray-950"
                  >
                    <div className="font-semibold leading-7 text-gray-900 dark:text-gray-50">
                      {pricing.compare}
                    </div>
                    <div className="text-sm font-normal text-gray-600 dark:text-gray-400">
                      {pricing.compareSub}
                    </div>
                  </th>
                  {pricing.plans.map((plan) => (
                    <th
                      key={plan.id}
                      scope="col"
                      className="border-b border-gray-100 bg-white px-6 pb-8 lg:px-8 dark:border-gray-800 dark:bg-gray-950"
                    >
                      <div
                        className={cx(
                          !plan.isStarter
                            ? "text-emerald-600 dark:text-emerald-400"
                            : "text-gray-900 dark:text-gray-50",
                          "font-semibold leading-7",
                        )}
                      >
                        {plan.name}
                      </div>
                      <div className="text-sm font-normal text-gray-600 dark:text-gray-400">
                        {`${priceOf(plan)} / ${pricing.perUserShort}`}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pricing.sections.map((section, sectionIdx) => (
                  <Fragment key={section.name}>
                    <tr>
                      <th
                        scope="colgroup"
                        colSpan={4}
                        className={cx(
                          sectionIdx === 0 ? "pt-14" : "pt-10",
                          "border-b border-gray-100 pb-4 text-base font-semibold leading-6 text-gray-900 dark:border-gray-800 dark:text-gray-50",
                        )}
                      >
                        {section.name}
                      </th>
                    </tr>
                    {section.features.map((feature) => (
                      <tr
                        key={feature.name}
                        className="transition hover:bg-emerald-50/30 dark:hover:bg-emerald-800/5"
                      >
                        <th
                          scope="row"
                          className="flex items-center gap-2 border-b border-gray-100 py-4 text-sm font-normal leading-6 text-gray-900 dark:border-gray-800 dark:text-gray-50"
                        >
                          <span>{feature.name}</span>
                          {feature.tooltip ? (
                            <Tooltip side="right" content={feature.tooltip}>
                              <RiInformationLine
                                className="size-4 shrink-0 text-gray-700 dark:text-gray-400"
                                aria-hidden="true"
                              />
                            </Tooltip>
                          ) : null}
                        </th>
                        {pricing.plans.map((plan) => (
                          <td
                            key={plan.id}
                            className="border-b border-gray-100 px-6 py-4 lg:px-8 dark:border-gray-800"
                          >
                            {typeof feature.plans[plan.id] === "string" ? (
                              <div className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                                {feature.plans[plan.id]}
                              </div>
                            ) : (
                              <>
                                {feature.plans[plan.id] === true ? (
                                  <RiCheckLine
                                    className="h-5 w-5 text-emerald-600 dark:text-emerald-400"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <RiSubtractLine
                                    className="h-5 w-5 text-gray-400 dark:text-gray-600"
                                    aria-hidden="true"
                                  />
                                )}

                                <span className="sr-only">
                                  {feature.plans[plan.id] === true
                                    ? pricing.included
                                    : pricing.notIncluded}{" "}
                                  — {plan.name}
                                </span>
                              </>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))}
                <tr>
                  <th
                    scope="row"
                    className="pt-6 text-sm font-normal leading-6 text-gray-900 dark:text-gray-50"
                  >
                    <span className="sr-only">{pricing.activateLabel}</span>
                  </th>
                  {pricing.plans.map((plan) => (
                    <td key={plan.id} className="px-6 pt-6 lg:px-8">
                      {plan.isStarter ? (
                        <Button
                          variant="light"
                          asChild
                          className="group bg-transparent px-0 text-base hover:bg-transparent dark:bg-transparent hover:dark:bg-transparent"
                        >
                          <Link href={`/${locale}/changelog`}>
                            {plan.buttonText}
                            <ArrowAnimated />
                          </Link>
                        </Button>
                      ) : (
                        <Button
                          variant="light"
                          asChild
                          className="group bg-transparent px-0 text-base text-emerald-600 hover:bg-transparent dark:bg-transparent dark:text-emerald-400 hover:dark:bg-transparent"
                        >
                          <Link href={`/${locale}/changelog`}>
                            {plan.buttonText}
                            <ArrowAnimated />
                          </Link>
                        </Button>
                      )}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Faqs dict={pricing} />
    </main>
  );
}
