import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
	// stories: ['../docs/storybook/*.stories.@(mdx|ts)', '../src/**/*.stories.@(mdx|ts)'],
	stories: ['../src/**/*.stories.@(mdx|ts)'],
	addons: [
		'@storybook/addon-a11y',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-links',
		'@storybook/addon-mdx-gfm',
	],
	core: {
		disableTelemetry: true,
	},
	framework: {
		name: '@storybook/web-components-vite',
		options: {},
	},
	docs: {
		autodocs: 'tag',
		defaultName: 'Overview',
	},
};
export default config;
