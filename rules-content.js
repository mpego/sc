const VOIDFARER_RULES = {
    objective: {
        title: "Objective",
        description: "The ultimate goals of the space voyagers in Voidfarer.",
        status: "Amass 100 credits through trading, piracy, missions, or bounty hunting.<br>And fear not, players will always be back in play even after losing their ships."
    },
    earningCredits: {
        title: "Earning Credits",
        description: "To achieve victory in Voidfarer, ships must accumulate credits/points through various sector operations. Here are the primary ways to earn credits:",
        methods: [
            { activity: "Trading Cargo", howTo: "Buy low-cost cargo from planets or space stations, and sell it at other locations for a premium.", profit: "10 - 30 credits per run" },
            { activity: "Cargo Missions", howTo: "Accept cargo transport contracts at planets/stations and safely deliver cargo to the destination planet.", profit: "40 credits upon delivery" },
            { activity: "Bounty Hunting", howTo: "Locate, capture, and tow designated target ships back to the issuing Space Station.", profit: "80 credits upon completion" },
            { activity: "Thievery", howTo: "Steal cargo or missions from other ships via Planetary Theft or by sharing the same tile and winning a dice contest.", profit: "Value of stolen assets (20 - 50 credits)" },
            { activity: "Combat Salvage", howTo: "Defeat rival ships in direct combat to salvage remaining scrap metal and ship debris.", profit: "15 credits per salvaged ship" }
        ]
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
        constraint: "None of the turn-allocated variables can surpass their maximum values defined by your Ship Specs.",
        actionPhase: {
            description: "After <strong>all players</strong> have assigned their engineering points, each player takes their turn performing any actions they see fit, in any order:",
            actions: [
                { icon: "🚀", label: "Move", detail: "Fly the ship across the board using the distance set this turn." },
                { icon: "⚔️", label: "Attack", detail: "Fire weapons at a valid target within arc and attack range." },
                { icon: "📡", label: "Establish Communications", detail: "Open a comms channel with another ship within active Comms range to enable trading or coordination." },
                { icon: "🔧", label: "Repair Shield", detail: "Recover Shield points using allocated engineering points." },
                { icon: "🛠️", label: "Repair Ship", detail: "Restore Hull (Resistance) while docked at a planet or space station." },
                { icon: "📋", label: "Pick Missions", detail: "Accept a pending mission contract at a planet or space station." },
                { icon: "📦", label: "Trade Cargo", detail: "Exchange or sell cargo with another ship or at a location." },
                { icon: "🏆", label: "Claim Mission Success", detail: "Deliver cargo or a captured ship to the designated destination to collect the mission reward." }
            ]
        }
    },
    movements: {
        title: "Movements",
        description: "Navigating the cold void requires precise speed calculations:",
        rules: [
            "🚀 <strong>Fixed movement:</strong> Ships must move the exact Distance value currently set (no more, no less).",
            "🔄 <strong>Mid-travel rotation:</strong> At any point during movement, the player can spend Maneuver points allocated for the turn to rotate the ship in place (e.g., 60 degrees per point on a hex grid), and then continue moving if movement points remain.",
            "⚔️ <strong>Attack interrupt:</strong> Movement can be paused at any hex along the path to fire an attack (provided Attack points are allocated and a valid target is in arc). After resolving the attack, the ship continues moving with its remaining distance.",
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
    hazards: {
        title: "Asteroids & Spatial Storms",
        description: "The sector is filled with hazardous anomalies that challenge even the most experienced voidfarers:",
        types: [
            {
                name: "Asteroid Fields",
                icon: "🪨",
                colorClass: "asteroid",
                borderColor: "#94a3b8",
                titleColor: "#f1f5f9",
                rules: [
                    "<strong>Navigation Hazard:</strong> Moving through or ending a turn in an asteroid field is dangerous. For each hex of an asteroid field entered, the player must roll a 1d6. On a roll of 1 or 2, the ship takes 1 Hull damage (directly to Resistance, bypassing Shield).",
                    "<strong>Line of Sight Obstruction:</strong> Asteroid fields block all laser fire. Attacks cannot pass through asteroid hexes.",
                    "<strong>Mining Opportunity:</strong> Ships equipped with cargo space can spend an action to mine resource-rich asteroid fields, gaining 1 random cargo on a 1d6 roll of 5 or 6."
                ]
            },
            {
                name: "Spatial Storm",
                icon: "⚡",
                colorClass: "storm",
                borderColor: "var(--accent-red)",
                titleColor: "var(--accent-red)",
                rules: [
                    "<strong>Comms Blackout:</strong> While inside the Spatial Storm, a ship's active Comms range is reduced to 0, preventing any trading, comms, or thievery actions.",
                    "<strong>Shield Depletion:</strong> Any ship that ends its turn inside the Spatial Storm loses 2 Shield points immediately due to extreme electromagnetic interference.",
                    "<strong>Attack Interference:</strong> Ships outside the storm cannot attack ships inside the storm. Inside attack is normal."
                ]
            }
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
        thievery: [
            "<strong>Planetary Theft:</strong> When a ship is at a planet, it can steal cargo or missions from another ship docked at that same planet.",
            "<strong>Tile-Share Theft:</strong> Thievery can also be executed by occupying the exact same tile as another ship, subject to a dice condition to be defined."
        ]
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
