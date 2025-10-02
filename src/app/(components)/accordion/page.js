"use client";
import Accordion from "@/components/ui-library/Accordion";
import accordionData from "@/data/accordionData";
import CodeBox from "@/components/CodeBox";
import styled from "styled-components";
import space from "@/utils/space";

export default function AccordionHome() {
  const code = {
    standard: `<Accordion>
    <Accordion.Item itemId="1">
        <Accordion.Trigger>
            Example 1
            <Accordion.Icon />
        </Accordion.Trigger>
        <Accordion.Content>       
            Some example content goes here.
        </Accordion.Content>
    </Accordion.Item>   
</Accordion>`,
    multiple: `<Accordion multiple>
   ...
</Accordion>`,
    defaultOpen: `<Accordion> 
    <Accordion.Item itemId="1" defaultOpen>
      ...
    </Accordion.Item>   
</Accordion>`,
    disabled: `<Accordion> 
    <Accordion.Item itemId="1" disabled>
      ...
    </Accordion.Item>   
</Accordion>`,
    headless: `<Accordion variant="headless">
   ...
</Accordion>`,

    styledComponent: `const StyledAccordion = styled.div\`
  .accordion-container {
    /* Edit here */
  }

  .accordion-item {
    background-color: #f2f2f2;
    margin-bottom: 8px;
    border: 1px solid #f5f5f5;
    outline: 1px solid #c7c7c7;
  }

  .accordion-trigger {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
      /* Edit here */
    }
  }

  .accordion-icon {
    transform: rotate(0deg);
    transition: transform 0.3s ease;
  }

  .accordion-content {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.3s ease, padding 0.3s ease;
    padding: 0 12px;
  }

  .accordion-content-inner {
    overflow: hidden;
    min-height: 0; // important for grid based animation
    opacity: 0;
    transition: opacity 0.3s ease;
    transition-delay: 0s;
  }

  /* open item */
  .accordion-item.open {
    .accordion-content {
      grid-template-rows: 1fr;
      padding-top: 12px;
      padding-bottom: 12px;
    }
    .accordion-content-inner {
      opacity: 1;
      transition-delay: 0.15s;
    }

    .accordion-icon {
      transform: rotate(90deg);
    }
  }
  
  /* disabled item */
  .accordion-item.disabled {
    .accordion-trigger,
    .accordion-content {
      cursor: default;
      color: #808080;
      background-color: #e8e8e8;
    }
  }
\`;`,
    styledAccordionJsx: `/* Replaced <Accordion> with <CustomizeAccordion> */
<CustomizeAccordion>
    <Accordion.Item itemId="1">
        <Accordion.Trigger>
            Example 1
            <Accordion.Icon />
        </Accordion.Trigger>
        <Accordion.Content>       
            Some example content goes here.
        </Accordion.Content>
    </Accordion.Item>   
</CustomizeAccordion>`,
    styledAccordionStyle: `/* Then create styled component for CustomizeAccordion */
const CustomizeAccordion = styled(Accordion)\`
  /* Override any predefined styles here */
\`;`,

    exampleStyledAccordionJsx: `<CustomizeAccordion>
  <Accordion.Item itemId="1">
    <Accordion.Trigger>
      Example Title
      <Accordion.Icon />
    </Accordion.Trigger>
    <Accordion.Content>Some example content goes here.</Accordion.Content>
  </Accordion.Item>
</CustomizeAccordion>`,
    exampleStyledAccordionStyle: `/* Overrides */
const CustomizeAccordion = styled(Accordion)\`
  .accordion-item {
    background-color: rebeccapurple;
    color: #fff;
  }

  .accordion-icon {
    transform: rotate(90deg);
  }

  .accordion-item.open {
    .accordion-icon {
      transform: rotate(-90deg);
    }
  }
\`;`,
  };

  return (
    <>
      <h1>Accordion</h1>
      <p>
        Accordion Components are generally used to show and hide related
        information on a webpage.
      </p>
      <h2>Code</h2>
      <CodeBox>{code.standard}</CodeBox>
      <h2>Demos</h2>
      <h3 className="pt0">Expand Single Item</h3>
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
      <h3>Headless Variant</h3>
      <Accordion variant="headless">
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
      <p className="mt3">
        This is an example of a headless variant where all styles have been
        removed except for the basic functionality.
      </p>
      <h2>Code Customizations</h2>
      <p className="fs-xs">
        Standard component with default settings. (Single field open)
      </p>
      <CodeBox>{code.standard}</CodeBox>
      <p className="fs-xs">
        For multiple open items, add the keyword <Keyword>multiple</Keyword> to
        the parent <strong>&lt;Accordion&gt;</strong> component.
      </p>
      <CodeBox>{code.multiple}</CodeBox>
      <p className="fs-xs">
        To set a specific item to stay open on initial page load, add the{" "}
        <Keyword>defaultOpen</Keyword> to the respective{" "}
        <strong>&lt;Accordion.Item&gt;</strong> component.
      </p>
      <CodeBox>{code.defaultOpen}</CodeBox>
      <p className="fs-xs">
        For disabling an item, add the keyword <Keyword>disabled</Keyword> to
        the specific <strong>&lt;Accordion.Item&gt;</strong> component that
        needs disabling.
      </p>
      <CodeBox>{code.disabled}</CodeBox>
      <p className="fs-xs">
        For an headless variant (without extra styles) add the keyword{" "}
        <Keyword>variant=&ldquo;headless&rdquo;</Keyword> to the parent{" "}
        <strong>&lt;Accordion&gt;</strong> component.
      </p>
      <CodeBox>{code.headless}</CodeBox>
      <h2>Customising Styled Component</h2>
      <p>
        The library uses styled-components for setting default styles for all
        the components including this Accordion. I think it is easier to achieve
        complete control over the styles this way. Below I have shared the
        styled-component code that this component is built on and how to
        customise them.
      </p>{" "}
      <h3>Original Styled Component</h3>
      <p className="fs-xs">
        Below is the exact code that is used behind the screen. So configuring
        with these same class names will override default behaviors and look of
        the component.
      </p>
      <CodeBox>{code.styledComponent}</CodeBox>
      <h3>How to customise?</h3>
      <p>
        You can customise the styles and override anything that is pre-written
        by creating customised Styled Component like below.
      </p>
      <CodeBox>{code.styledAccordionJsx}</CodeBox>
      <CodeBox>{code.styledAccordionStyle}</CodeBox>
      <h3>Example</h3>
      <h4 className="pt0">Code</h4>
      <CodeBox>{code.exampleStyledAccordionJsx}</CodeBox>
      <CodeBox>{code.exampleStyledAccordionStyle}</CodeBox>
      <p className="fs-xs">
        Here, we have changed color and background color of the{" "}
        <strong>&lt;Accordion.Item&gt;</strong> and altered animation style of
        the <strong>&lt;Accordion.Icon&gt;</strong>
      </p>
      <h4>Result</h4>
      <CustomizeAccordion>
        <Accordion.Item itemId="1">
          <Accordion.Trigger>
            Example Title
            <Accordion.Icon />
          </Accordion.Trigger>
          <Accordion.Content>Some example content goes here.</Accordion.Content>
        </Accordion.Item>
      </CustomizeAccordion>
    </>
  );
}

const Keyword = styled.span`
  display: inline-block;
  background-color: var(--color-accent);
  color: var(--color-bg);
  padding: 0 ${space(1)}px;
  border-radius: ${space(1)}px;
`;

const CustomizeAccordion = styled(Accordion)`
  margin-bottom: ${space(5)}px;
  .accordion-item {
    background-color: rebeccapurple;
    color: #fff;
  }

  .accordion-icon {
    transform: rotate(90deg);
  }

  .accordion-item.open {
    .accordion-icon {
      transform: rotate(-90deg);
    }
  }
`;
