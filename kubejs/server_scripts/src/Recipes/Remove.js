ServerEvents.recipes((event) => {
	// 输出
	let output = [
		'#forge:tools/wooden',
		'#forge:graphite_molds',
		'pipez:filter_destination_tool',
		"createmetallurgy:mechanical_belt_grinder",
		'#alltheores:ore_hammers'
	]
	output.forEach((item) => {
		event.remove({ output: item })
	})

	// 输入
	let input = [
		'#alltheores:ore_hammers'
	]
	input.forEach((item) => {
		event.remove({ input: item })
	})

	// 配方类型
	let recipeType = [

	]
	recipeType.forEach((type) => {
		event.remove({ type: type })
	})

	// ModRecipes
	let mod = [
		// 'mekanism'
	]
	mod.forEach((modid) => {
		event.remove({ mod: modid })
	})
})