#Based and improved on https://www.planetminecraft.com/data-pack/dawn-day-counter/
#Created by Armir Mitrandir

scoreboard objectives add DayCounterSc dummy "Day Counter"

#scoreboard objectives setdisplay sidebar DayCounterSc
#function new_create:showtitle
#function new_create:initialize

execute unless score $init DayCounterSc matches 1 run function new_create:initialize
execute if score $tickcount DayCounterSc < $tickcountlimit DayCounterSc run function new_create:tickatstart
execute unless score $tickcount DayCounterSc < $tickcountlimit DayCounterSc run function new_create:tickproper



