<template>
  <nav>
    <div id="stats">
      <h2 id="charName">Name</h2>
      <h2>Core Stats</h2>
      <div class="statframe">
        <div class="statbar" id="strBar">
          <p class="statlabel" title="Strength affects how much physical damage you can do.">Strength:</p>
          <p class="statnum" id="strNum">100</p>
        </div>
        <div class="statupdown" id="strArrow"></div>
      </div>
      <div class="statframe">
        <div class="statbar" id="touBar">
          <p class="statlabel" title="Toughness affects how much maximum HP you have and also reduces damage taken.">Toughness:</p>
          <p class="statnum" id="touNum">100</p>
        </div>
        <div class="statupdown" id="touArrow"></div>
      </div>
      <div class="statframe">
        <div class="statbar" id="speBar">
          <p class="statlabel" title="Speed affects how nimble and fast you are. Higher speed makes it easier to dodge enemies and run from combat.">Speed:</p>
          <p class="statnum" id="speNum">100</p>
        </div>
        <div class="statupdown" id="speArrow"></div>
      </div>
      <div class="statframe">
        <div class="statbar" id="intBar">
          <p class="statlabel" title="Intelligence affects how powerful your spells are. It also influences mental resistance checks.">Intelligence:</p>
          <p class="statnum" id="intNum">100</p>
        </div>
        <div class="statupdown" id="intArrow"></div>
      </div>
      <div class="statframe">
        <div class="statbar" id="libBar">
          <p class="statlabel" title="Libido determines how easier it is for you to get horny.">Libido:</p>
          <p class="statnum" id="libNum">100</p>
        </div>
        <div class="statupdown" id="libArrow"></div>
      </div>
      <div class="statframe">
        <div class="statbar" id="senBar">
          <p class="statlabel" title="Sensitivity affects how easier it is for you to get horny by physical touch.">Sensitivity:</p>
          <p class="statnum" id="senNum">100</p>
        </div>
        <div class="statupdown" id="senArrow"></div>
      </div>
      <div class="statframe">
        <div class="statbar" id="corBar">
          <p class="statlabel" title="Corruption determines how perverted and warped your mind is. Higher corruption may make it easier to encounter Bad Ends.">
            Corruption:
          </p>
          <p class="statnum" id="corNum">100</p>
        </div>
        <div class="statupdown" id="corArrow"></div>
      </div>
      <h2>Combat Stats</h2>
      <div class="statframe">
        <div class="statbar" id="hpBar">
          <p class="statlabel" title="Your HP is a measure of how much damage you can sustain before you are knocked out.">HP:</p>
          <p class="statnum" id="hpNum">9999 / 9999</p>
        </div>
        <div class="statupdown" id="hpArrow"></div>
      </div>
      <div class="statframe">
        <div class="statbar" id="lustBar">
          <p
            class="statlabel"
            title="Your lust is a measure of how horny you are. If this reaches the maximum, you're overwhelmed by desires and will lose the battle.">
            Lust:
          </p>
          <p class="statnum" id="lustNum">100 / 100</p>
        </div>
        <div class="statupdown" id="lustArrow"></div>
      </div>
      <div class="statframe">
        <div class="statbar" id="fatigueBar">
          <p
            class="statlabel"
            title="Your fatigue is a measure of how tired you are. You'll be unable to cast spells and perform intense activity when this is at or near the maximum.">
            Fatigue:
          </p>
          <p class="statnum" id="fatigueNum">100 / 100</p>
        </div>
        <div class="statupdown" id="fatigueArrow"></div>
      </div>
      <div class="statframe" id="hungerFrame">
        <div class="statbar" id="hungerBar">
          <p class="statlabel">Fullness:</p>
          <p class="statnum" id="hungerNum">100 / 100</p>
        </div>
        <div class="statupdown" id="hungerArrow"></div>
      </div>
      <h2>Advancement</h2>
      <div class="statframeblank">
        <p class="statlabel">Level:</p>
        <p class="statnum" id="levelNum">99</p>
      </div>
      <div class="statframe">
        <div class="statbar" id="xpBar">
          <p class="statlabel" title="Your XP is a measure of your current progress towards level up.">XP:</p>
          <p class="statnum" id="xpNum">9999 / 9999</p>
        </div>
      </div>
      <div class="statframeblank">
        <p class="statlabel">Gems:</p>
        <p class="statnum" id="gemNum">999,999,999</p>
      </div>
      <div id="timeDisplay">
        <p>Day#: 1337<br />Time: 12:00pm<br /></p>
      </div>
      <div id="spriteDisplay"></div>
    </div>
  </nav>
</template>

<style scoped lang="scss"></style>
