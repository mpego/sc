const VOIDFARER_RULES = {
    objective: {
        title: "Objective",
        description: "The ultimate goals of the space voyagers in Voidfarer.",
        status: "To be defined (e.g., Amass 100 credits through trading, or be the last ship standing)."
    },
    shipSpecs: {
        title: "Ship Specifications",
        description: "To set up a ship, players distribute exactly 30 units among the following specs. Each spec defines the fundamental capabilities of your vessel:",
        specs: [
            { name: "Attack", range: "1 - 10", desc: "Determines how far the ship can fire its main weapons." },
            { name: "Shield", range: "1 - 10", desc: "The maximum energy value that shields can absorb before taking hull damage." },
            { name: "Distance", range: "1 - 10", desc: "The maximum number of units (hexes) the ship can travel in a single turn." },
            { name: "Resistance", range: "1 - 10", desc: "The hull integrity of the ship, which absorbs damage after shields fail." },
            { name: "Comms", range: "1 - 10", desc: "The maximum range at which the ship can establish communications." },
            { name: "Maneuver", range: "1 (3), 2 (6), 3 (10)", desc: "Allows in-place rotation movements on top of distance." },
            { name: "Load", range: "1 (2), 2 (4), 3 (7), 4 (10)", desc: "Determines how many units of cargo the ship is certified to transport." }
        ]
    },
    turnSequence: {
        title: "Turn Sequence",
        description: "Every turn, each player rolls two 6-sided dice (2d6). The sum of the rolled numbers represents the engineering points they can distribute among their turn variables:",
        stages: [
            { title: "Distance", body: "Adjust current speed. Each 1 point spent increases or decreases speed by 1, up to the ship's maximum spec." },
            { title: "Attack", body: "Set the active attack range and damage potential for the current turn (cannot exceed local Attack spec)." },
            { title: "Shield", body: "Recover damaged shield points at a cost of 1 allocated point per 1 shield point recovered (up to Shield spec)." },
            { title: "Maneuver", body: "Allocate rotation points for the turn (cannot exceed Maneuver spec level)." },
            { title: "Comms", body: "Set active communication range for the turn (cannot exceed Comms spec)." }
        ],
        constraint: "None of the turn-allocated variables can surpass their maximum values defined by your Ship Specs."
    },
    movements: {
        title: "Movements",
        description: "Navigating the cold void requires precise speed calculations:",
        rules: [
            "🚀 <strong>Fixed movement:</strong> Ships must move the exact Distance value currently set (no more, no less).",
            "🔄 <strong>Mid-travel rotation:</strong> At any point during movement, the player can spend Maneuver points allocated for the turn to rotate the ship in place (e.g., 60 degrees per point on a hex grid), and then continue moving if movement points remain.",
            "💾 <strong>Conservation:</strong> The speed/distance points set are preserved for the next turn unless actively adjusted."
        ]
    },
    combat: {
        title: "Combat Mechanics",
        description: "Engage target vessels using straight-line attacks from your forward-facing firing arc:",
        rangeRequirement: "Attacks can only be made in a straight line from the ship's firing arc (forward-facing).",
        formula: "Damage = 1 + (Attack Points Allocated) - (Distance to Target)",
        shieldHullRule: "Damage points are first used to reduce the target's Shield. Any remaining damage is subtracted from the target's Resistance (hull). A ship is destroyed when its Resistance reaches 0."
    },
    doubleDiceEvents: {
        title: "Double Dice Events",
        description: "Rolling matching pairs on your 2d6 turn roll also triggers special galaxy-wide anomalies or events:",
        events: [
            { icon: "⚅⚅", colorClass: "double-six", title: "Double Sixes (12)", desc: "The player can move the Space Station up to 6 units." },
            { icon: "⚀⚀", colorClass: "double-one", title: "Double Ones (2)", desc: "One of the other players (the one who rolls the highest) can move the Space Storm up to 3 hexes in any direction." },
            { icon: "⚂⚂", colorClass: "double-any", title: "Other Doubles", desc: "The active player can change resources on any one planet or the value cargo is bought at stations." }
        ]
    },
    tradingTheft: {
        title: "Trading & Theft",
        description: "Accumulate wealth and transport commodities across space stations and planets:",
        protocols: [
            "When both ships land on the same Planet.",
            "When both ships land in the same Space Station.",
            "When both ships are within their active Comms Range."
        ],
        thievery: "Planetary Theft: When a ship is at a planet, it can steal cargo or missions from another ship docked at that same planet."
    },
    locations: {
        title: "Planets & Space Stations",
        description: "The stellar bodies and installations scattered throughout the sector:",
        types: [
            {
                name: "Planets",
                limit: "Capacity: Unlimited ships",
                cardClass: "planet",
                actions: [
                    "Trade cargo between docked ships",
                    "Sell cargo",
                    "Buy cargo",
                    "Repair ship hull integrity (Resistance)",
                    "Accept pending missions"
                ]
            },
            {
                name: "Space Stations",
                limit: "Capacity: Max 2 ships at a time",
                cardClass: "station",
                actions: [
                    "Trade cargo between docked ships",
                    "Sell specialized cargo",
                    "Repair ship hull integrity (Resistance)",
                    "Accept pending missions",
                    "Refit or Change ship"
                ]
            }
        ]
    },
    missions: {
        title: "Missions",
        description: "Earn credits by assisting planetary governments and orbital corporations:",
        lifecycle: "Missions are offered at <strong>orbital stations</strong> and at <strong>planets</strong>.",
        types: [
            {
                title: "📦 Cargo Delivery",
                cardClass: "station",
                actions: [
                    "Picking up specific cargo packages at one planet.",
                    "Delivering the cargo securely to another designated planet."
                ]
            },
            {
                title: "⚔️ Capture Ship",
                cardClass: "station",
                actions: [
                    "Locating a designated target ship in the sector.",
                    "<strong>How to capture the ship:</strong> To be defined.",
                    "Escorting or towing the captured vessel back to the issuing Space Station."
                ]
            }
        ]
    }
};
