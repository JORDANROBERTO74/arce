import Code from "@/components/Code";
import {
  RiLinksLine,
  RiPlugLine,
  RiShieldKeyholeLine,
  RiStackLine,
} from "@remixicon/react";
import { Badge } from "../Badge";
import CodeExampleTabs from "./CodeExampleTabs";
import type { Dictionary } from "@/i18n/dictionaries/en";

const code = `CREATE TABLE Customers (
    customer_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    gender CHAR(1),
    rewards_member BOOLEAN
);

CREATE TABLE Orders (
    order_id SERIAL PRIMARY KEY,
    sales_date DATE,
    customer_id INT REFERENCES Customers(customer_id)
);

CREATE TABLE Items (
    item_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    price DECIMAL(10, 2)
);

CREATE TABLE Order_Items (
    order_id INT REFERENCES Orders(order_id),
    item_id INT REFERENCES Items(item_id)
);`;

const code2 = `async function fetchCustomerOrders() {
    const result = await prisma.orders.findMany({
        where: {
            customer: {
                name: 'Jack Beanstalk'
            },
            segmentation: {
                type: 'young professional',
                joinedYear: 2024,
                region: 'us-west-01'
            }
        },
        include: {
            customer: true,
            order_items: {
                include: {
                    item: true
                }
            }
        }
    });
    return result;
}`;

const icons = [RiStackLine, RiPlugLine, RiLinksLine, RiShieldKeyholeLine];

export default function CodeExample({
  dict,
}: {
  dict: Dictionary["codeExample"];
}) {
  return (
    <section
      aria-labelledby="code-example-title"
      className="mx-auto mt-28 w-full max-w-6xl px-3"
    >
      <Badge>{dict.badge}</Badge>
      <h2
        id="code-example-title"
        className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-6xl dark:from-gray-50 dark:to-gray-300"
      >
        {dict.title1} <br /> {dict.title2}
      </h2>
      <p className="mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
        {dict.description}
      </p>
      <CodeExampleTabs
        dict={dict}
        tab1={
          <Code code={code} lang="sql" copy={false} className="h-[31rem]" />
        }
        tab2={
          <Code
            code={code2}
            lang="javascript"
            copy={false}
            className="h-[31rem]"
          />
        }
      />
      <dl className="mt-24 grid grid-cols-4 gap-10">
        {dict.features.map((item, index) => {
          const Icon = icons[index] ?? RiStackLine;
          return (
            <div
              key={item.name}
              className="col-span-full sm:col-span-2 lg:col-span-1"
            >
              <div className="w-fit rounded-lg p-2 shadow-md shadow-emerald-400/30 ring-1 ring-black/5 dark:shadow-emerald-600/30 dark:ring-white/5">
                <Icon
                  aria-hidden="true"
                  className="size-6 text-emerald-600 dark:text-emerald-400"
                />
              </div>
              <dt className="mt-6 font-semibold text-gray-900 dark:text-gray-50">
                {item.name}
              </dt>
              <dd className="mt-2 leading-7 text-gray-600 dark:text-gray-400">
                {item.description}
              </dd>
            </div>
          );
        })}
      </dl>
    </section>
  );
}
