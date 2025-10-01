"use client";
import Accordion from "@/components/ui-library/Accordion";
import accordionData from "@/data/accordionData";
import CodeBox from "@/components/CodeBox";

export default function AccordionHome() {
  const code = `<Accordion>
    <Accordion.Item itemId="1">
        <Accordion.Trigger>
            Example 1
            <Accordion.Icon />
        </Accordion.Trigger>
        <Accordion.Content>       
            Some example content goes here.
        </Accordion.Content>
    </Accordion.Item>   
</Accordion>`;
  return (
    <>
      <h1>Accordion</h1>
      <p>
        Accordion Components are generally used to show and hide related
        information on a webpage.
      </p>
      <h2>Code</h2>
      <CodeBox>{code}</CodeBox>
      <h3>Expand Single Item</h3>
      <Accordion>
        {accordionData.map((data) => {
          return (
            <Accordion.Item key={data.itemId} itemId={data.itemId}>
              <Accordion.Trigger>
                {data.trigger}
                <Accordion.Icon />
              </Accordion.Trigger>
              <Accordion.Content>{data.content}</Accordion.Content>
            </Accordion.Item>
          );
        })}
      </Accordion>
      <p className="mt3">Only single item can be viewed at any moment.</p>
      <h3>Expand Multiple Item</h3>
      <Accordion multiple>
        {accordionData.map((data) => {
          return (
            <Accordion.Item key={data.itemId} itemId={data.itemId}>
              <Accordion.Trigger>
                {data.trigger}
                <Accordion.Icon />
              </Accordion.Trigger>
              <Accordion.Content>{data.content}</Accordion.Content>
            </Accordion.Item>
          );
        })}
      </Accordion>{" "}
      <p className="mt3">Multiple items can stay open.</p>
      <h3>Default Open Item</h3>
      <Accordion>
        {accordionData.map((data) => {
          return (
            <Accordion.Item
              key={data.itemId}
              itemId={data.itemId}
              defaultOpen={data.defaultOpen ? true : false}
            >
              <Accordion.Trigger>
                {data.trigger}
                <Accordion.Icon />
              </Accordion.Trigger>
              <Accordion.Content>{data.content}</Accordion.Content>
            </Accordion.Item>
          );
        })}
      </Accordion>{" "}
      <p className="mt3">Example 2 item stays open by default.</p>
      <h3>Disabled Item</h3>
      <Accordion>
        {accordionData.map((data) => {
          return (
            <Accordion.Item
              key={data.itemId}
              itemId={data.itemId}
              disabled={data.disabled ? true : false}
            >
              <Accordion.Trigger>
                {data.trigger}
                <Accordion.Icon />
              </Accordion.Trigger>
              <Accordion.Content>{data.content}</Accordion.Content>
            </Accordion.Item>
          );
        })}
      </Accordion>{" "}
      <p className="mt3">Example 1 item is disabled.</p>
    </>
  );
}
