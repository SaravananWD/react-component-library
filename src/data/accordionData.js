const accordionData = [
  {
    itemId: "example1",
    trigger: "Example 1",
    content: (
      <div className="accordion-content-inner">
        Some example content goes here.
      </div>
    ),
    disabled: true,
  },
  {
    itemId: "example2",
    trigger: "Example 2",
    content: (
      <div className="accordion-content-inner">
        Some example content goes here.
      </div>
    ),
    defaultOpen: true,
  },
  {
    itemId: "example3",
    trigger: "Example 3",
    content: (
      <div className="accordion-content-inner">
        Some example content goes here.
      </div>
    ),
  },
];
export default accordionData;
