# Voidfarer — Game Rules

---

## 🎯 Objective

The ultimate goals of the space voyagers in Voidfarer.

Amass **100 credits** through trading, piracy, missions, or bounty hunting.
Players will always be back in play even after losing their ships.

---

## 💰 Earning Credits

To achieve victory in Voidfarer, ships must accumulate credits/points through various sector operations.

| Activity       | How To                                                                                                   |
| -------------- | -------------------------------------------------------------------------------------------------------- |
| Trading Cargo  | Buy low-cost cargo from planets or space stations, and sell it at other locations for a premium.         |
| Cargo Missions | Accept cargo transport contracts at planets/stations and safely deliver cargo to the destination planet. |
| Bounty Hunting | Locate, capture, and tow designated target ships back to the issuing Space Station.                      |
| Thievery       | Steal cargo or missions from other ships via Planetary Theft or in space.                                |
| Combat Salvage | Defeat rival ships in direct combat to salvage remaining scrap metal and ship debris.                    |

---

## 🚀 Ship Specifications

Players distribute exactly **30 units** among the following specs. Each spec defines the fundamental capabilities of your vessel.

| Spec       | Range                       | Description                                                                 |
| ---------- | --------------------------- | --------------------------------------------------------------------------- |
| Attack     | 1 – 10                      | Determines how far the ship can fire its main weapons.                      |
| Shield     | 1 – 10                      | The maximum energy value that shields can absorb before taking hull damage. |
| Distance   | 1 – 10                      | The maximum number of units (hexes) the ship can travel in a single turn.   |
| Resistance | 1 – 10                      | The hull integrity of the ship, which absorbs damage after shields fail.    |
| Comms      | 1 – 10                      | The maximum range at which the ship can establish communications.           |
| Maneuver   | 1 (3), 2 (6), 3 (10)        | Allows in-place rotation movements on top of distance.                      |
| Load       | 1 (2), 2 (4), 3 (7), 4 (10) | Determines how many units of cargo the ship is certified to transport.      |

---

## 🎲 Turn Sequence

Each turn, players roll **three 4-sided dice (3d4)**. The sum represents **engineering points** distributed among turn variables.

> **Constraint:** None of the turn-allocated variables can surpass their maximum values defined by Ship Specs.

### Engineering Phase

| Variable | Rule                                                                                                           |
| -------- | -------------------------------------------------------------------------------------------------------------- |
| Distance | Adjust current speed. Each 1 point spent increases or decreases speed by 1, up to the ship's maximum spec.     |
| Attack   | Set the active attack range and damage potential for the current turn (cannot exceed local Attack spec).       |
| Shield   | Recover damaged shield points at a cost of 1 allocated point per 1 shield point recovered (up to Shield spec). |
| Maneuver | Allocate rotation points for the turn (cannot exceed Maneuver spec level).                                     |
| Comms    | Set active communication range for the turn (cannot exceed Comms spec).                                        |

### Action Phase

After **all players** have assigned their engineering points, each player takes their turn performing any actions in any order:

| Action                     | Detail                                                                                              |
| -------------------------- | --------------------------------------------------------------------------------------------------- |
| 🚀 Move                     | Fly the ship across the board using the distance set for this turn.                                 |
| ⚔️ Attack                   | Fire weapons at a valid target within arc and attack range.                                         |
| 📡 Establish Communications | Open a comms channel with another ship within active Comms range to enable trading or coordination. |
| 🔧 Repair Shield            | Recover Shield points allocating engineering points.                                                |
| 🛠️ Repair Ship              | Restore Hull (Resistance) while docked at a planet or space station.                                |
| 📋 Pick Missions            | Accept a pending mission contract at a planet or space station.                                     |
| 📦 Trade Cargo              | Exchange or sell cargo with another ship or at a location.                                          |
| 🏆 Claim Mission Success    | Deliver cargo or a captured ship to the designated destination to collect the mission reward.       |

---

## 🧭 Movements

Navigating the cold void requires precise speed calculations.

- 🚀 **Fixed movement:** Ships must move the exact Distance value currently set (no more, no less).
- 🔄 **Mid-travel rotation:** At any point during movement, the player can spend Maneuver points allocated for the turn to rotate the ship in place (e.g., 60 degrees per point on a hex grid), and then continue moving if movement points remain.
- ⚔️ **Attack interrupt:** Movement can be paused at any hex along the path to fire an attack (provided Attack points are allocated and a valid target is in arc). After resolving the attack, the ship continues moving with its remaining distance.
- 💾 **Conservation:** The speed/distance points set are preserved for the next turn unless actively adjusted.

---

## ⚔️ Combat Mechanics

Engage target vessels using straight-line attacks from your forward-facing firing arc.

- **Range requirement:** Attacks can only be made in a straight line from the ship's firing arc (forward-facing).
- **Damage formula:**
  ```
  Damage = 1 + (Attack Points Allocated) - (Distance to Target)
  ```
- **Shield & Hull rule:** Damage points are first used to reduce the target's **Shield**. Any remaining damage is subtracted from the target's **Resistance** (hull). A ship is destroyed when its Resistance reaches **0**.

---

## 🎲 Special Dice Events

Rolling matching pairs on your 2d6 turn roll triggers special galaxy-wide anomalies or events.

| Roll                 | Event                                                                                                             |
| -------------------- | ----------------------------------------------------------------------------------------------------------------- |
| ⚅⚅ Triple Fours (12) | The player can move the Space Station up to 4 hexes.                                                              |
| ⚀⚀ Triple Ones (3)   | One of the other players (the one who rolls the highest) can move the Space Storm up to 3 hexes in any direction. |
| Even Doubles         | The player can change resources on any one planet or the value cargo is bought at stations.                       |
| Odd Doubles          | The player can move up to 4 units of asteroid fields or spatial storms in any combination.                        |

---

## ☄️ Asteroids & Spatial Storms

The sector is filled with hazardous anomalies that challenge even the most experienced voidfarers.

### 🪨 Asteroid Fields

- **Navigation Hazard:** Moving through or ending a turn in an asteroid field is dangerous. For each hex of an asteroid field entered, the player must roll a 1d4. On a roll of **1**, the ship takes **1 Hull damage** (directly to Resistance, bypassing Shield).
- **Line of Sight Obstruction:** Asteroid fields block all weapon fire. Attacks cannot pass through asteroid hexes.
- **Mining Opportunity:** Ships equipped with cargo space can spend an action to mine resource-rich asteroid fields, gaining **1 random cargo** on a 1d4 roll of **4**.

### ⚡ Spatial Storm

- **Comms Blackout:** While inside the Spatial Storm, a ship's active Comms range is reduced to **0**, preventing any trading, comms, or thievery actions.
- **Shield Depletion:** Any ship that ends its turn inside the Spatial Storm loses **2 Shield points** immediately due to extreme electromagnetic interference.
- **Attack Interference:** Ships outside the storm cannot attack ships inside the storm. Inside attack is normal.

---

## 🤝 Trading & Theft

Accumulate wealth and transport commodities across space stations and planets.

### Trading Protocols

Trading between ships is possible when:
- Both ships land on the same **Planet**.
- Both ships land in the same **Space Station**.
- Both ships are within their active **Comms Range**.

### Thievery

- **Planetary Theft:** When a ship is at a planet, it can steal cargo or missions from another ship docked at that same planet.
- **Tile-Share Theft:** Thievery can also be executed by occupying the exact same tile as another ship.

Thieves and victims roll **3d4s**. 
If the thief’s total roll is equal or higher than the victim’s, the thief succeeds.

If the thief succeeds, the planet or station automatically issues a bounty mission for the thief.

---

## 🌍 Planets & Space Stations

The stellar bodies and installations scattered throughout the sector.

### Planets

Ships can land on planets or dock at a space station.
In either case the turn ends immediately.

Trading, repairing and picking up missions take the whole turn of the player.

**Capacity:** Unlimited ships

Available actions:
- Trade cargo between docked ships
- Sell cargo
- Buy cargo
- Repair ship hull integrity (Resistance)
- Accept pending missions

### Space Stations
**Capacity:** Max 2 ships at a time

Available actions:
- Trade cargo between docked ships
- Sell specialized cargo
- Repair ship hull integrity (Resistance)
- Accept pending missions
- Refit or Change ship

---

## 📋 Missions

Earn credits by assisting planetary governments and orbital corporations.

Missions are offered at **orbital stations** and at **planets**.

### 📦 Cargo Delivery

1. Picking up specific cargo packages at one planet.
2. Delivering the cargo securely to another designated planet.

### ⚔️ Capture Ship

1. Locating a designated target ship in the sector.
2. **How to capture the ship:** To be defined.
3. Escorting or towing the captured vessel back to the issuing Space Station.
