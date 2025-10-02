import React from "react";
import styled from "styled-components";
import { ChevronRight } from "lucide-react";
import space from "@/utils/space";
import PropTypes from "prop-types";

const TriggerIcon = () => {
  return <ChevronRight className="accordion-icon" />;
};

const AccordionContext = React.createContext();

const Accordion = ({
  children,
  multiple = false,
  className,
  variant = "styled",
  ...props
}) => {
  const [openItems, setOpenItems] = React.useState(() => {
    const initiallyOpen = new Set();
    React.Children.forEach(children, (child) => {
      if (child.props.defaultOpen && !child.props.disabled) {
        initiallyOpen.add(child.props.itemId);
      }
    });
    return initiallyOpen;
  });

  const toggleItem = React.useCallback(
    (itemId) => {
      setOpenItems((prev) => {
        const newSet = new Set(prev);
        if (newSet.has(itemId)) {
          newSet.delete(itemId);
        } else {
          if (multiple) {
            newSet.add(itemId);
          } else {
            return new Set([itemId]);
          }
        }
        return newSet;
      });
    },
    [multiple]
  );

  const contextValue = React.useMemo(
    () => ({ openItems, toggleItem }),
    [openItems, toggleItem]
  );

  // choose variant
  const StyleWrapper =
    variant === "headless" ? HeadlessStyles : StyledAccordion;

  return (
    <StyleWrapper className={className} {...props}>
      <AccordionContext.Provider value={contextValue}>
        <div className="accordion-container">{children}</div>
      </AccordionContext.Provider>
    </StyleWrapper>
  );
};

const Item = ({ children, itemId, disabled }) => {
  const { openItems } = React.useContext(AccordionContext);
  // Error handling
  const triggers = React.Children.toArray(children).filter(
    (child) => child.type === Trigger
  );
  const contents = React.Children.toArray(children).filter(
    (child) => child.type === Content
  );

  if (triggers.length !== 1 || contents.length !== 1) {
    console.error(
      'Accordion "Item" must contain exactly one Trigger and one Content.'
    );
    return null;
  }

  const isOpen = openItems.has(itemId);

  return (
    <div
      className={`accordion-item${isOpen ? " open" : ""}${
        disabled ? " disabled" : ""
      }`}
    >
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { itemId, isOpen, disabled })
      )}
    </div>
  );
};

const Trigger = ({ children, itemId, isOpen, disabled }) => {
  const { toggleItem } = React.useContext(AccordionContext);
  return (
    <div
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-expanded={isOpen}
      aria-disabled={disabled}
      aria-controls={`accordion-content-${itemId}`}
      id={`accordion-trigger-${itemId}`}
      className="accordion-trigger"
      onClick={disabled ? undefined : () => toggleItem(itemId)}
      onKeyDown={(e) => {
        if (disabled) return;
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleItem(itemId);
        }
      }}
    >
      {children}
    </div>
  );
};

const Content = ({ children, itemId }) => {
  return (
    <div
      id={`accordion-content-${itemId}`}
      role="region"
      aria-labelledby={`accordion-trigger-${itemId}`}
      className={`accordion-content`}
    >
      <div className="accordion-content-inner">{children} </div>
    </div>
  );
};

Accordion.Item = Item;
Accordion.Trigger = Trigger;
Accordion.Content = Content;
Accordion.Icon = TriggerIcon;

Accordion.displayName = "Accordion";
Item.displayName = "Accordion.Item";
Trigger.displayName = "Accordion.Trigger";
Content.displayName = "Accordion.Content";
TriggerIcon.displayName = "Accordion.Icon";

// Prop Types
Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  multiple: PropTypes.bool,
  variant: PropTypes.oneOf(["styled", "headless"]),
  className: PropTypes.string,
};

Item.propTypes = {
  children: PropTypes.node.isRequired,
  itemId: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

Trigger.propTypes = {
  children: PropTypes.node.isRequired,
  itemId: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
};

Content.propTypes = {
  children: PropTypes.node.isRequired,
  itemId: PropTypes.string.isRequired,
};

export default Accordion;

// Demo
function AccordionComponentDemo({ isMultiple = false }) {
  return (
    <Accordion>
      <Accordion.Item itemId="example1">
        <Accordion.Trigger>
          Example 1
          <Accordion.Icon />
        </Accordion.Trigger>
        <Accordion.Content>
          <div className="accordion-content-inner">
            Some example content goes here.
          </div>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item itemId="example2">
        <Accordion.Trigger>
          Example 2
          <Accordion.Icon />
        </Accordion.Trigger>
        <Accordion.Content>
          <div className="accordion-content-inner">
            Some example content goes here.
          </div>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item itemId="example3">
        <Accordion.Trigger>
          Example 3
          <Accordion.Icon />
        </Accordion.Trigger>
        <Accordion.Content>
          <div className="accordion-content-inner">
            Some example content goes here.
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
}

export { AccordionComponentDemo };

// Styled Components
const StyledAccordion = styled.div`
  .accordion-container {
    // edit here...
  }

  .accordion-item {
    background-color: var(--color-gray-95);
    margin-bottom: ${space(2)}px;
    border: 1px solid var(--color-bg);
    outline: 1px solid var(--color-gray-80);
  }

  .accordion-trigger {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${space(3)}px;
    cursor: pointer;
    transition: var(--transition-bg);

    &:hover {
      /* background-color: var(--color-gray-90); */
    }
  }

  .accordion-icon {
    transform: rotate(0deg);
    transition: transform var(--base-transition);
  }

  .accordion-content {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows var(--base-transition),
      padding var(--base-transition);
    padding: 0 ${space(3)}px;
  }

  .accordion-content-inner {
    overflow: hidden;
    min-height: 0; // important for grid based animation
    opacity: 0;
    transition: opacity var(--base-transition);
    transition-delay: 0s;
  }

  // open item
  .accordion-item.open {
    .accordion-content {
      grid-template-rows: 1fr;
      padding-top: ${space(3)}px;
      padding-bottom: ${space(3)}px;
    }
    .accordion-content-inner {
      opacity: 1;
      transition-delay: 0.15s;
    }

    .accordion-icon {
      transform: rotate(90deg);
    }
  }

  // disabled item
  .accordion-item.disabled {
    .accordion-trigger,
    .accordion-content {
      cursor: default;
      color: var(--color-disabled-text);
      background-color: var(--color-surface);
    }
  }
`;

// Headless Styles
const HeadlessStyles = styled.div`
  .accordion-trigger {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .accordion-icon {
    transform: rotate(0deg);
    transition: transform var(--base-transition);
  }

  .accordion-content {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows var(--base-transition);
  }

  .accordion-content-inner {
    overflow: hidden;
    min-height: 0; // important for grid based animation
  }

  // open item
  .accordion-item.open {
    .accordion-content {
      grid-template-rows: 1fr;
    }

    .accordion-icon {
      transform: rotate(90deg);
    }
  }
`;
