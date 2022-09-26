<template>
	<div class="popup">
		<div class="popup-inner">
			<slot />
			<button class="popup-close" @click.prevent="$emit('close-event')">
				Cerrar
			</button>
		</div>
	</div>
</template>

<script>
export default {
	name: "PopupComponent",
}
</script>

<style lang="scss" scoped>
	.popup {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 99;
		background-color: rgba(0, 0, 0, 0.2);
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 0.25em;
	}

	.popup-inner {
		background: #FFF;
		padding: 32px;
	}

	.popup-close {
		margin-top:0.5em;
		text-decoration-line: underline;
		cursor: pointer;
		color:cadetblue;
	}
</style>