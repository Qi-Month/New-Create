new Schema("createmetallurgy:casting_in_basin")
	.simpleKey("result", "outputItem")
	.simpleKey("ingredients", "inputFluidOrItemArray")
	.simpleKey("processingTime", "doubleNumber", 100)
	.simpleKey("mold_consumed", "bool", false || true)

new Schema("createmetallurgy:casting_in_table")
	.simpleKey("result", "outputItem")
	.simpleKey("ingredients", "inputFluidOrItemArray")
	.simpleKey("processingTime", "doubleNumber", 100)
	.simpleKey("mold_consumed", "bool", false || true)

new Schema("createmetallurgy:grinding")
	.simpleKey("results", "outputItemArray")
	.simpleKey("ingredients", "inputItemArray")
	.simpleKey("processingTime", "doubleNumber", 100)

new Schema("createmetallurgy:alloying")
	.simpleKey("results", "outputFluidOrItemArray")
	.simpleKey("ingredients", "inputFluidOrItemArray")
	.simpleKey("heatRequirement", "nonEmptyString", "superheated" || "heated" || "melt" || "frozen")
	.simpleKey("processingTime", "doubleNumber", 100)

new Schema("createmetallurgy:melting")
	.simpleKey("results", "outputFluidArray")
	.simpleKey("ingredients", "inputItemArray")
	.simpleKey("heatRequirement", "nonEmptyString", "superheated" || "heated" || "melt" || "frozen")
	.simpleKey("processingTime", "doubleNumber", 100)