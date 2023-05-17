import { expect, test } from '@playwright/experimental-ct-svelte';
import Text from '$lib/Text.svelte';

test.describe('Chip tests', () => {
	test('Should display passed text', async ({ mount }) => {
		const component = await mount(Text, {
			props: {
				text: 'Test'
			}
		});

		await expect(component).toHaveText('Test');
	});
});
