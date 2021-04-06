# @nuxtclub/feathericons

## Setup

1. Add `@nuxtclub/feathericons` dependency to your project

```bash
npm i -D @nuxtclub/feathericons
```

2. Add `@nuxtclub/feathericons` to the `buildModules` section of `nuxt.config.js`

:warning: If you are using Nuxt **< v2.9** you have to install the module as a `dependency` (No `--dev` or `--save-dev` flags) and use `modules` section in `nuxt.config.js` instead of `buildModules`.

```javascript
export default {
	buildModules: ['@nuxtclub/feathericons'],
}
```

# Typescript support

Add the types to your `"types"` array in `tsconfig.json` after the `@nuxt/types` entry.

:warning: Use `@nuxt/vue-app` instead of `@nuxt/types` for nuxt < 2.9.

```json
{
	"compilerOptions": {
		"types": ["@nuxt/types", "@nuxtclub/feathericons"]
	}
}
```

## Usage

This module will inject \$feathericons in the context of your application.

Using \$feathericons you can access to an object with all the icons of the [Feather Icons Package](https://github.com/feathericons/feather).

## Example

```vue
<template>
	<div v-html="$feathericons['home'].toSvg()"></div>
</template>
```

Learn more about Feather Icons [here](https://feathericons.com/).
