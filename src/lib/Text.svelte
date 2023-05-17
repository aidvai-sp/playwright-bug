<script lang="ts">
	export let text: string;
	export let important = false;
</script>

<p>
	{text}
	{#if important}
		!
	{/if}
</p>
