let moltenRegisters = []
moltenRegisters.forEach(([name, color, level]) => {
	const MODID = "new_create:"

	StartupEvents.registry("item", (event) => {
		// 锭
		event.create(`${MODID + name}_ingot`)
			.texture(`${MODID}item/metal/ingot`)
			.color(color)
			.tag("forge:ingots")
			.tag(`forge:ingots/${name}`)

		// 板
		event.create(`${MODID + name}_sheet`)
			.texture(`${MODID}item/metal/plate`)
			.color(color)
			.tag("forge:plates")
			.tag(`forge:plates/${name}`)

		// 矿
		event.create(`${MODID}raw_${name}`)
			.texture(`${MODID}item/metal/raw_ore`)
			.color(color)
			.tag("forge:raw_materials")
			.tag(`forge:raw_materials/${name}`)
	})

	StartupEvents.registry("block", (event) => {
		let pickaxe = "minecraft:mineable/pickaxe"

		// 挖掘等级
		let miningLevel = {
			wooden: "minecraft:needs_wooden_tool",
			stone: "minecraft:needs_stone_tool",
			iron: "minecraft:needs_iron_tool",
			gold: "minecraft:needs_gold_tool",
			diamond: "minecraft:needs_diamond_tool",
			nether: "forge:needs_netherite_tool"
		}

		// 浅层
		event.create(`${MODID + name}_ore`)
			.textureAll(`${MODID}block/metal/ore/${name}_ore`)
			.soundType(SoundType.STONE)
			.hardness(3)
			.resistance(3)
			.tag("forge:ores")
			.tag(`forge:ores/${name}`)
			.tag("forge:ore_rates/dense")
			.tagBlock(pickaxe)
			.tagBlock(miningLevel[level])
			.requiresTool(true)

		// 深层
		event.create(`${MODID}deepslate_${name}_ore`)
			.textureAll(`${MODID}block/metal/ore/deepslate_${name}_ore`)
			.soundType(SoundType.DEEPSLATE)
			.hardness(4.5)
			.resistance(4.5)
			.tag("forge:ores")
			.tag(`forge:ores/${name}`)
			.tag("forge:ore_rates/deepslate")
			.tagBlock(pickaxe)
			.tagBlock(miningLevel[level])
			.requiresTool(true)

		// 块
		event.create(`${MODID + name}_block`)
			.soundType(SoundType.METAL)
			.hardness((3 + 4.5) / 2 * 1.5)
			.resistance((3 + 4.5) / 2 * 1.5)
			.tag("forge:storage_blocks")
			.tag(`forge:storage_blocks/${name}`)
			.tagBlock(pickaxe)
			.tagBlock(miningLevel[level])
			.requiresTool(true)
	})

	StartupEvents.registry("fluid", (event) => {
		const PATH = "block/fluid/"
		let moltemFluidRegisters = MODID + PATH

		event.create(`${MODID}molten_${name}`)
			.thickTexture(color)
			.bucketColor(color)
			.flowingTexture(moltemFluidRegisters + "flowing")
			.stillTexture(moltemFluidRegisters + "still")
			.tag(`forge:molten_${name}`)
			.tag("forge:molten_materials")
	})
})