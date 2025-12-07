// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  textbookSidebar: [
    {
      type: 'category',
      label: 'Part I: Foundations',
      items: [
        'part1/introduction',
        'part1/fundamentals',
        'part1/ai_systems'
      ],
    },
    {
      type: 'category',
      label: 'Part II: Technical Implementation',
      items: [
        'part2/sensing',
        'part2/motion_planning',
        'part2/learning'
      ],
    },
    {
      type: 'category',
      label: 'Part III: Human-Robot Interaction',
      items: [
        'part3/human_centered_design',
        'part3/communication',
        'part3/natural_interaction',
        'part3/vla_systems'
      ],
    },
    {
      type: 'category',
      label: 'Part IV: Applications and Future Directions',
      items: [
        'part4/applications',
        'part4/capstone_project',
        'part4/advanced_vla',
        'part4/future_perspectives'
      ],
    },
    {
      type: 'category',
      label: 'Appendices',
      items: [
        'appendix_examples',
        'appendix_startup'
      ],
    }
  ],
};

export default sidebars;
