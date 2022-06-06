<script setup lang="ts">
import imgNekoGooFull from '../assets/images/NekoGoo-01-A.png';
import imgcNekoGooHead from '../assets/images/NekoGoo-head-only.png';

// export default {
//   data: function () {
//     return {
//       head: imgcNekoGooHead,
//       full: imgNekoGooFull,
//     };
//   },
// };
</script>

<template>
  <main id="zoneAbout" class="container">
    <div class="row align-items-start">
      <div class="col">
        <figure>
          <a :href="imgNekoGooFull">
            <img :src="imgcNekoGooHead" class="rounded-img-bottom" alt="NekoGoo profile pic" />
          </a>
          <figcaption>
            * art courtesy of
            <a href="https://twitter.com/blyzzarde" target="_blank" rel="noreferrer">Blyzzarde</a>
          </figcaption>
        </figure>
      </div>

      <div class="col">
        <h3>About NekoGoo</h3>
        <br />
        <p>Hello, there!</p>
        <p>
          I am NekoGoo, a fruit slime monster (primarily banana) from another dimension.&nbsp; Being raised by a clan of catgirls, I adopted many of their
          personalities &amp; quirks.&nbsp; Nowadays, I'm stuck in this 'Earth' world due to teleportation magic gone awry.&nbsp; I initially tried getting
          home.. but there are so many games and snacks I want to try first!&nbsp; =(✪ω✪)=
          <!-- https://cutekaomoji.com/animals/cats -->
        </p>
        <p>I enjoy streaming games and chatting about my favorite hobbies like videogames, superheroes, fantasy, sci-fi, anime, and vtubers.</p>
        <p>
          You can also find me designing and programming my own text-based RPG on this site, which will be free to play upon release.&nbsp; Keep checking back
          for more, nya!~
        </p>
        <!-- <br /> -->

        <div id="aboutOptions" class="mt-4">
          <!-- Modal trigger buttons (https://getbootstrap.com/docs/5.0/components/modal) -->
          <button type="button" class="btn btn-sm btn-outline-info" data-bs-toggle="modal" data-bs-target="#modalAppearance">Appearance</button>
          <button type="button" class="btn btn-sm btn-outline-info" data-bs-toggle="modal" data-bs-target="#modalPersonality">Personality</button>
          <button type="button" class="btn btn-sm btn-outline-info" data-bs-toggle="modal" data-bs-target="#modalSpecial">Special Attributes</button>
        </div>
      </div>
    </div>
  </main>

  <!-- Modal content -->

  <div class="modal fade" id="modalAppearance" tabIndex="{-1}" aria-labelledby="modalAppearanceLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalAppearanceLabel">NekoGoo Appearance</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <!-- https://getbootstrap.com/docs/5.0/components/badge/#pill-badges -->
          <span class="badge rounded-pill bg-info text-dark mb-1">Body Description (anatomy)</span>
          <br />
          <!-- https://cocxianxia.fandom.com/wiki/Goo-Girl -->
          <!-- https://wiki.smutosaur.us/CoC/Goo-Girl -->
          <!-- https://dailylifewithamonstergirl.fandom.com/wiki/Suu -->
          <p class="mb-2">
            Most slime species are
            <span tabIndex="{-1}" data-bs-toggle="tooltip" title="not sex-specific; gender neutral; suitable for any type of sex"> unisex </span> and can
            <a
              href="https://en.wikipedia.org/wiki/Asexual_reproduction"
              target="_blank"
              tabIndex="{-1}"
              data-bs-toggle="tooltip"
              title="capable of generating offspring from a single parent"
              rel="noreferrer"
              >reproduce asexually</a
            >.&nbsp; NekoGoo's body defaults to feminine because soft &amp; bouncy is a far easier shape to maintain for a slime.&nbsp; It also provides more
            ample places to store water.&nbsp; That said, NekoGoo is quite indifferent to such matters and willing to have as few (or many) body parts as
            pleases their partner.
          </p>
          <!-- <p class="lineb mb-4 pb-3"> -->
          <p class="mb-2">
            Their body emits a very faint light (akin to a glowing mushroom) and slime surface is usually shimmering, appearing reminiscent of someone
            glistening with sweat.&nbsp;
          </p>
          <p>
            <small>tldr: androgynous head, feminine body, can have all or none of the things</small>
          </p>

          <span class="badge rounded-pill bg-info text-dark mb-1">Colors</span>
          <br />
          <p class="mb-2">
            <span class="color_circle bg_banana" data-bs-toggle="tooltip" title="#FFE866 | rgb(255, 232, 102)"></span>&nbsp; banana yellow tentacles ('hair' and
            tail)
            <br />
            <span class="color_circle bg_cream" data-bs-toggle="tooltip" title="#FEFEFA | rgb(254, 254, 250)"></span>&nbsp; creamy, milky swirls in tentacles
            and 'clothing'
            <br />
            <span class="color_circle bg_cyan" data-bs-toggle="tooltip" title="#00FFFF | rgb(0, 255, 255)"></span>&nbsp; main body in various shades of cyan
          </p>
          <p class="mb-4">
            <span class="color_circle bg_tangerine" data-bs-toggle="tooltip" title="#F28500 | rgb(242, 133, 0)"></span>&nbsp; casual clothing (tops) primary
            <br />
            <span class="color_circle bg_grey" data-bs-toggle="tooltip" title="#808080 | rgb(128, 128, 128)"></span>&nbsp; casual clothing (bottoms) primary
            <br />
            <span class="color_circle bg_platinum" data-bs-toggle="tooltip" title="#E5E4E2 | rgb(229, 228, 226)"></span>&nbsp; casual clothing (bottoms)
            secondary
          </p>

          <span class="badge rounded-pill bg-info text-dark mb-1">Physical Stats</span>
          <br />
          <p>
            <span class="inline_header">Height</span>:&nbsp; Depends on water (average of 5'8" or 172.7 cm)
            <br />
            <span class="inline_header">Weight</span>:&nbsp; Varies, dependent on water
          </p>
        </div>
        <!-- <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div> -->
      </div>
    </div>
  </div>

  <div class="modal fade" id="modalPersonality" tabIndex="{-1}" aria-labelledby="modalPersonalityLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalPersonalityLabel">NekoGoo Personality</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <span class="badge rounded-pill bg-info text-dark mb-1">Common Mood States</span>
          <br />
          <p class="mb-2">Horni, Derpy, Mellow, Determined</p>

          <span class="badge rounded-pill bg-info text-dark mb-1">Likes</span>
          <br />
          <ul class="mb-2">
            <li>warmth, hugs, booba, collecting skimpy outfits in games</li>
            <li>foods: sweat, ejaculate, nuggies, sparshetti and meatsalls, spicy shtuff</li>
            <li>music: synthwave/retrowave/chillwave, rock (psychedelic, grunge, metal, classic)</li>
            <li>super powers, manga, comic books, fantasy</li>
            <li>talking about game design, theorycrafting, or programming</li>
            <li>being a completionist; planning more than I can handle</li>
            <li>cooking, doing dishes, long walks</li>
            <li>finding dank memes &amp; vtuber compilations</li>
          </ul>

          <span class="badge rounded-pill bg-info text-dark mb-1">Dislikes</span>
          <br />
          <!-- <ul style="list-style-type: circle;"> -->
          <ul>
            <li>generalizations &amp; assumptions</li>
            <li>feeling like I "have to" do something</li>
            <li>most things made with soy sauce or coffee flavor</li>
            <li>being enveloped in huge crowds</li>
            <!-- <li>letting people down; always want to live up to my word</li> -->
            <li>failing to recognize trolling (why so serious?)</li>
            <!-- <li>people obnoxiously confident in their "fact" opinions</li> -->
          </ul>

          <span class="badge rounded-pill bg-info text-dark mb-1">Interests</span>
          <br />
          <ul>
            <li>
              <span class="inline_header">Videogames</span>:&nbsp; FFXIV, Halo, Rocket League, Terraria, Sims 3, KOTOR, Left 4 Dead, Elder Scrolls
              <br />
              <small>*used to play: WoW, League of Legends, Marvel Heroes Omega (rip)</small>
            </li>
            <li>
              <span class="inline_header">Movies</span>:&nbsp; Lord of the Rings, Back to the Future, Shaolin Soccer, Incredibles, Inside Out, Naked Gun,
              Robocop, Ghostbusters, Star Wars, Terminator, Blues Brothers, Cosmos, Crouching Tiger Hidden Dragon, Iron Monkey, Ninja Scroll, Perfect Blue, Shin
              Godzilla
            </li>
            <li>
              <span class="inline_header">Series</span>:&nbsp; Monty Python's Flying Circus, Firefly, The Boys, Harley Quinn, Invader Zim, Avatar: The Last
              Airbender, The Critic, X-Men: Evolution
            </li>
            <li>
              <span class="inline_header">Anime</span>:&nbsp; KonoSuba, Ranma 1/2, FLCL, Chobits, Mob Psycho, Spirited Away, GoldenBoy, Laid-Back Camp,
              Tanaka-kun is Always Listless, Tonari no Seki-kun, Keijo!!!!!!!!, D-Frag, Excel Saga, How Not to Summon a Demon Lord, Attack on Titan, Trigun,
              Cowboy Bebop, Killing Bites, Dr. Stone
            </li>
            <li>
              <span class="inline_header">Manga &amp; Comics</span>:&nbsp; Monster Musume, The Great Jahy Will Not Be Defeated!, Love Hina, KissXsis, The
              Exiles, Astonishing X-Men, Superior Spider-Man
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="modalSpecial" tabIndex="{-1}" aria-labelledby="modalSpecialLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalSpecialLabel">NekoGoo Special Attributes</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <span class="badge rounded-pill bg-info text-dark mb-1">Shapeshifting (Get It Together)</span>
          <br />
          <p>
            NekoGoo was an anomaly even in their own dimension.&nbsp; Most slimes are incapable of speech or holding form, a 'messy' species that constantly
            drips all over the place or leaves residue behind.&nbsp; However, NekoGoo is (usually) able to stay together with minimal effort.
          </p>
          <p>
            If you've ever seen the T-1000 in Terminator 2, NekoGoo's ability to liquify &amp; morph their shape is virtually the same.&nbsp; The only
            difference is (instead of metal) they're about as durable as a giant gummybear and cannot mimic finer details such as individual strands of hair.
          </p>

          <span class="badge rounded-pill bg-info text-dark mb-1">Slime Tentacles</span>
          <br />
          <p>
            NekoGoo's "hair" and "tail" are actually prehensile appendages.&nbsp; They can grab things, absorb water, or be used to perform more questionable
            activities.
          </p>

          <span class="badge rounded-pill bg-info text-dark mb-1">Caustics</span>
          <br />
          <p>
            The light that passes through NekoGoo's transluscent slime body can oftentimes create
            <a
              href="https://en.wikipedia.org/wiki/Caustic_(optics)"
              target="_blank"
              tabIndex="{-1}"
              data-bs-toggle="tooltip"
              title="light rays refracted/bent by a surface"
              rel="noreferrer"
              >water caustics</a
            >
            along the inner surfaces.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
