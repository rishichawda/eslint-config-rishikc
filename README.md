## Quick setup for ESLint and Prettier.

### Usage

1. Install `eslint-config-rishikc` as dev dependency

```
npx install-peerdeps --dev eslint-config-rishikc
```

2. Edit `.eslintrc` to contain this :

```
{
  "extends": [
    "rishikc"
  ]
}
```

Done. :tada:

To change any configuration that was set by this config, simply write the rule as you would in your `eslintrc` file and it will be overridden.
