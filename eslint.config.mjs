const eslintConfig = [
  // Extending valid configurations
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Adding rules manually
  {
    rules: {
      'next/core-web-vitals': 'off',
      'react/no-unescaped-entities': 'off',
      '@next/next/no-page-custom-font': 'off',
      'react/no-children-prop': 'off', // Disable the rule globally
    },
  },
];

export default eslintConfig;
