# Game Rules

---

## 🎯 Objective

Amass **100 credits** through trading, piracy, missions, or bounty hunting.

Fear not exploring, players will always have the chance to get back in play even after losing their ships.

---

## 💰 Game setup

Each player gets a common ship with specs:

**Hull** 5 
**Shield** 5 
**Distance** 5 
**Attack** 5 
**Communication** 5 
**Maneuver** 1 
**Load** 1

No cargo, no missions and 10 credits

Each player starts at a different space station or planet.

Planets and space statios have no resources to trade or other resources to offer and no missions to offer.

---

## 💰 Earning Credits

To achieve victory in Voidfarer, ships must accumulate credits/points through various sector operations.

| Activity             | How To                                                                                                   |
| -------------------- | -------------------------------------------------------------------------------------------------------- |
| Trading Cargo        | Buy low-cost cargo from planets or space stations, and sell it at other locations for a premium.         |
| Cargo Missions       | Accept cargo transport contracts at planets/stations and safely deliver cargo to the destination planet. |
| Exploration Missions | Complete exploration tasks.                                                                              |
| Bounty Hunting       | Locate, capture, and tow designated target ships back to the issuing Space Station.                      |
| Thievery             | Steal cargo or missions from other ships via Planetary Theft or in space.                                |
| Combat Salvage       | Defeat rival ships in direct combat.                                                                     |

---

## 🚀 Ship Specifications

When changing ships, players distribute exactly **30 units** among the following specs. Each spec defines the fundamental capabilities of your vessel.

| Spec     | Range                       | Description                                                                             |
| -------- | --------------------------- | --------------------------------------------------------------------------------------- |
| Attack   | 1 – 10                      | Determines how far the ship can fire its main weapons.                                  |
| Shield   | 1 – 10                      | The maximum energy value that shields can absorb before taking hull damage.             |
| Distance | 1 – 10                      | The maximum number of units the ship can travel in a single turn.                       |
| Hull     | 1 – 10                      | The hull integrity of the ship, which absorbs damage after shields fail.                |
| Comms    | 1 – 10                      | The maximum range at which the ship can establish communications.                       |
| Maneuver | 1 (3), 2 (6), 3 (10)        | Allows in-place rotation movements on top of distance [level (points)].                 |
| Load     | 1 (2), 2 (4), 3 (7), 4 (10) | Determines how many units of cargo the ship is certified to transport [level (points)]. |

---

## 🧭 Movements

**Variables** Distance and Maneuver.

Navigating the cold void requires precise distance calculations.

- 🚀 **Fixed movement:** Ships must move the exact Distance value currently set (no more, no less).
- 🔄 **Mid-travel rotation:** At any point during movement, the player can spend Maneuver points allocated for the turn to rotate the ship in place, and then continue moving if movement points remain. Each point of Maneuver allow any number of rotations in a single hex.
- ⚔️ **Attack interrupt:** Movement can be paused at any hex along the path to fire an attack (provided Attack points are allocated and a valid target is in arc). After resolving the attack, the ship continues moving with its remaining distance.
- 💾 **Conservation:** The distance points set are preserved for the next turn unless actively adjusted.

---

## ⚔️ Combat Mechanics

**Variables** Attack, Shield and Hull.

Engage target vessels using straight-line attacks from your forward-facing firing arc.

Attacking cannot overpass a occupied hex tile.

- **Range requirement:** Attacks can only be made in a straight line from the ship's firing arc (forward-facing).
- **Damage formula:**
  ```
  Damage = 1 + (Attack Points Allocated) - (Distance to Target)
  ```
- **Shield & Hull rule:** Damage points are first used to reduce the target's **Shield**. Any remaining damage is directed to the target's **Hull**. A ship is destroyed when its hull resistance reaches **0**.

---

## 🤝 Trading & Theft

**Variables** Comms and Load.

Accumulate wealth and transport commodities across space stations and planets.
Trading and theft include both cargo and mission cards.

### Trading

Trading between ships is possible when:
- Both ships land on the same **Planet**.
- Both ships land in the same **Space Station**.
- Both ships are within their active **Comms Range**.

### Bribery

Any player can bribe another player at any time.
For bribe to happen ships must be in each other comm range (if not the bribber receives one hit in the hull for each exceeding hex). Accept bribe is a non commit action, so it can be refused by the other player without any consequences or advice.
But if it succeds bribber can not attack the other player until his next full turn passes or bribber is attacked by that other player.

### Thievery

- **Planetary Theft:** When a ship is at a planet, it can steal cargo or missions from another ship docked at that same planet.

- **Tile-Share Theft:** Thievery can also be executed by occupying the exact same tile as another ship or within the comms range to the other ship.

**Resolution:**
Thieves and victims roll **3d4s**. 
If the thief’s total roll is equal or higher than the victim’s, the thief succeeds.

If the theft succeeds in a planet or station, a bounty mission is automatically issued against the thief.

Thivery is the only way to have more than one mission card at a time.

### Capturing a thief

Capturing is resolve the same way as thievery **Resolution**, then the ship must be delivered to a space station to claim the reward.

Cargo on the thief can be moved to the capturing ship if space is available, and card mission if any is owned by capturer.
While captured, cargo and mission of the thief can be sell or claimed.
On each of his turns the thief does a **3d4** roll, on any triplet he has the chance to escape.
To actually sacpe he must defeat the capturer by rolling like thievery **Resolution**.

If wins the thief escape from capture with cargo that was left on his ship, he plays a normal turn.

---

## 🎲 Special Dice Events

Rolling some special dice combination on your **3d4** turn roll triggers special galaxy-wide anomalies or events.

| Dice Combination | Event                                                                                                                                                 |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| ⚅⚅ Triple Fours  | The player can move the Space Station up to 4 hexes. Or choose to play as even doubles.                                                               |
| ⚀⚀ Triple Ones   | One of the other players (the one who rolls the highest) can move the Space Station up to 3 hexes in any direction. Or choose to play as odd doubles. |
| Even Doubles     | The player can change resources on any one planet.                                                                                                    |
| Odd Doubles      | The player can move up to 4 units of asteroid fields or spatial storms in any combination.                                                            |

---

## ☄️ Asteroids & Spatial Storms

The sector is filled with hazardous anomalies that challenge even the most experienced voidfarers.

### 🪨 Asteroid Fields

- **Navigation Hazard:** Moving through or ending a turn in an asteroid field is dangerous. For each hex of an asteroid field entered, the player must roll a **1d4**. On a roll of **1**, the ship takes **1 Hull damage**.
- **Line of Sight Obstruction:** Asteroid fields block all weapon fire. Attacks cannot pass through asteroid hexes.
- **Mining Opportunity:** Ships can attempt to mine asteroids, gaining **a  cargo of minerals** on a **1d4** roll of **4**.

### ⚡ Spatial Storm

- **Comms Blackout:** While inside the Spatial Storm, a ship's active Comms range is reduced to **0**, preventing any trading, comms, or thievery actions.
- **Shield Depletion:** Any ship that ends its turn inside the Spatial Storm loses **2 Shield points** immediately due to extreme electromagnetic interference.
- **Attack Interference:** Ships outside the storm cannot attack ships inside the storm. Inside attack is normal.

---

## 🌍 Planets & Space Stations

Ships can land on planets or dock at a space station.
Docking ends movement and attacking is no longer possible.

#### Possible actions ####

| Action         | Planet    | Station     |
| -------------- | --------- | ----------- |
| Docked ships   | Unlimited | Max 2 ships |
| Buy cargo      | Yes       | No          |
| Accepted cargo | Anything  | Only tech   |
| Bounty office  | No        | Yes         |

#### Costs of actions ####
| Action                     | Planet | Station |
| -------------------------- | ------ | ------- |
| Accept mission             | 0      | 0       |
| Pass the turn              | 0      | -5      |
| Buy cargo                  | -5     | -       |
| Repair two points of hull  | -5     | -10     |
| Refit three points of ship | -5     | -10     |
| Sell cargo                 | 5      | 10      |
| Sell highlited cargo       | 10     | 15      |
| Turn in thief              | -      | 25      |


If player cannot pay the passing fee, he must make a space movement turn.

---

## Missions

When looking for a mission the player can chose to take mission card or if the planet allow can instead chose to do an exploration mission.

### Exploration missions ###

#### Free hostages ####

At the start of the mission, place NPCs in the cage at the center and door and two guards outside the door.

NPCs make the first move. Then the player chooses the starting entry.

Other players can also enter the mission competing for the reward.

To move in the planet roll **3d4**, move the sum on the dice. Movement can be back and forth as wanted. 

For NPCs on the planet, any player must roll **3d4** for every two NPCs. Distribute dice among NPCs with the only restriction that each NPC must have at least one die.

If an NPC collide with another, turn it 180 degrees and continue movement as normal.

If the player is captured, he loses the mission.

Player can abandon the mission without any penalty, exiting through any corner before releasing hostages. 

***Reward*** 30 credits plus a ship that allow a second turn as long as it is not destroyed. The player choses the ship specs.

---

#### Maze ####

At the start of the mission, each other player can do up to two actions in the maze to so set up the maze for the active player. Then the player choses the starting corner.

Other players can also enter the mission competing for the reward.

On the players turn, push one tile into the maze and move the players as much as wanted through the maze.
Player must get the treasure in the center and escape throuth the opposite corner he entered. Reaching the treasure stops movement.
Tile moved in one turn must not be the opposite of the previous turn.

He can abandon the mission without any penalty, exiting through any corner without the treassure. 

***Reward*** 15 credits.

---

### Cargo missions ###

**Planets**
* "Deliver 2 units of goods"
* "Deliver 2 units of minerals"
* "Deliver 1 units of good and 1 unit of mineral"
* "Deliver 1 units of good and 1 unit of tech"
* "Deliver 1 units of mineral and 1 unit of tech"
* "Deliver 2 units of goods and 1 unit of mineral"
* "Deliver 2 units of goods and 1 unit of tech"
* "Deliver 2 units of minerals and 1 unit of good"
* "Deliver 2 units of minerals and 1 unit of tech"
* "Deliver 3 units of goods"
* "Deliver 3 units of minerals"

One of each mission per planet

**Space Stations**
* "Deliver 2 units of tech"
* "Deliver 2 units of tech and 1 unit of good"
* "Deliver 2 units of tech and 1 unit of mineral"
* "Deliver 1 unit of tech and 2 units of goods"
* "Deliver 1 unit of tech and 2 units of minerals"
* "Deliver 3 units of tech"
  
One of each mission per space station

### At any time ###

Any player can destroy any other ship in a space combat.

***Reward*** 20 credits.

---

## 🎲 Turn Sequence

When in space player runs a turn in space.
When docked to a planet or space station, player can choose to run a normal turn in space to leave planet or station or can choose to stay docked and perform docked actions.

### 🎲 Turn Sequence in space

### Engineering Phase

The player rolls up to **3d4**, from those choose up to three dice.
The accumulated valued must be completly used to increase or decrease ship variables.

 
| Variable | Rule                                                                                       |
| -------- | ------------------------------------------------------------------------------------------ |
| Distance | Adjust current distance. Each 1 point spent increases or decreases distance by 1.          |
| Attack   | Set the active attack range and damage potential for the current turn.                     |
| Shield   | Recover damaged shield points at a cost of 1 allocated point per 1 shield point recovered. |
| Maneuver | Allocate rotation points for the turn.                                                     |
| Comms    | Set active communication range for the turn.                                               |

> **Constraint:** None of the turn-allocated variables can surpass their maximum values defined by Ship Specs.
> 

### Action Phase

Player executes actions in any order in any combination.


| Action           | Detail                                                                   |
| ---------------- | ------------------------------------------------------------------------ |
| 🚀 Move           | Fly the ship across the board using the distance set for this turn.      |
| ⚔️ Attack         | Fire weapons at a valid target within arc and attack range.              |
| 📡 Communications | Open a comms channel with another ship for trading, bribing or thievery. |
| 🔧 Repair Shield  | Recover Shield points allocating engineering points.                     |


The ship must move the exact value of distance points set. 
Attack and comms variable point are fully consumed if used, all other are preserved for next turn.


#### Docking into a space station

Docking to a station requires an exact distance match.
The ship must share any tile not fully covered by the station.
Docking sets all turn variables to 0.

#### Docking into a planet

Docking to a planet not need exact distance match. player can discard any remaining move points.
Docking sets all turn variables to 0.

#### Thievery

If ships share the same tile or the other ship is within the comms range, the player can run a thievery mission against that ship.

---

### 🎲 Turn Sequence in planet or station

In this case player can do one of the following:

| Action                  | Detail                                                                                        |
| ----------------------- | --------------------------------------------------------------------------------------------- |
| 🛠️ Repair Ship           | Restore Hull.                                                                                 |
| 📋 Accept Mission        | Accept an offered mission contract.                                                           |
| ❌ Resign Mission        | Resign from a mission contract.                                                               |
| 📦 Trade Cargo           | Exchange or sell cargo with another ship or at a location.                                    |
| 🏆 Claim Mission Success | Deliver cargo or a captured ship to the designated destination to collect the mission reward. |
| ⏹️ Pass                  | Pass the turn without doing any other action.                                                 |

#### Thievery mission while at a planet or station

If docked to the same planet or station as another ship, the player can run a thievery mission against that player.

---
