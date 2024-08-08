ServerEvents.recipes((event) => {
	// 石工具
	let stoneTools = [
		'minecraft:stone_sword',
		'minecraft:stone_pickaxe',
		'minecraft:stone_axe',
		'minecraft:stone_shovel',
		'minecraft:stone_hoe'
	]
	stoneTools.forEach((input) => {
		event.replaceInput(input, '#minecraft:stone_tool_materials', 'new_create:charred_cobblestone')
	})

	// 齿轮
	event.replaceInput({}, "create:cogwheel", "#create:cogwheel")
	event.replaceInput({}, "create:large_cogwheel", "#create:large_cogwheel")
})