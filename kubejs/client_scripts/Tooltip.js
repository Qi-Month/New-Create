ItemEvents.tooltip((event) => {
	let addTooltip = [
		"new_create:easy_rock_gen",
		"new_create:initial_item_kit"
	]
	addTooltip.forEach((id) => {
		event.add(id, Text.translate(`tooltip.${id}`.replace(":", ".")))
	})
})