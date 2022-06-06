<!-- https://getbootstrap.com/docs/5.3/examples/headers -->
<!-- https://getbootstrap.com/docs/5.3/components/navbar -->
<!-- https://getbootstrap.com/docs/5.3/utilities/spacing -->
<template>
  <header class="p-2 mb-4 border-bottom nav-main-bg">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><router-link to="/" class="nav-link px-2 link-secondary">Home</router-link></li>
          <li><a class="nav-link px-2 link-dark">Blog</a></li>
          <!-- <li><a class="nav-link px-2 link-dark">Forum</a></li> -->
          <li><router-link to="/about" class="nav-link px-2 link-dark">About</router-link></li>
          <li><a class="nav-link px-2 link-dark">&#8226;</a></li>
          <li><router-link to="/info" class="nav-link px-2 link-dark">eRPGe</router-link></li>
          <li class="nav-item dropdown">
            <a id="navGamesMenu" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Games </a>
            <ul class="dropdown-menu" aria-labelledby="navGamesMenu">
              <li class="dropdown-header">Game Test Servers</li>
              <li><router-link to="/eRPGe/play" class="dropdown-item">Play eRPGe Demo</router-link></li>
              <!-- <li class="disabled"><router-link to="/swagger" class="dropdown-item">OpenAPI</router-link></li> -->
              <li role="separator" class="divider"></li>

              <li class="dropdown-header">Info | Game Systems | Controlled</li>
              <!-- <li><router-link to="/info/controlled-systems/user-profile" class="dropdown-item">User Profiles</router-link></li> -->
              <!-- <li><router-link to="/info/controlled-systems/save-slot" class="dropdown-item">Save Slots</router-link></li> -->
              <li><router-link to="/info/controlled-systems/attribute" class="dropdown-item">Attributes</router-link></li>
              <li><router-link to="/info/controlled-systems/effect" class="dropdown-item">Effects</router-link></li>
              <li><router-link to="/info/controlled-systems/tag" class="dropdown-item">Tags</router-link></li>
              <li role="separator" class="divider"></li>

              <li class="dropdown-header">Info | Game Systems | Community</li>
              <li><router-link to="/info/community-systems/character" class="dropdown-item">Characters</router-link></li>
              <li><router-link to="/info/community-systems/item" class="dropdown-item">Items</router-link></li>
              <li><router-link to="/info/community-systems/location" class="dropdown-item">Locations</router-link></li>
              <li><router-link to="/info/community-systems/moment" class="dropdown-item">Moments</router-link></li>
              <li><router-link to="/info/community-systems/relationship" class="dropdown-item">Relationships</router-link></li>
              <li><router-link to="/info/community-systems/skill" class="dropdown-item">Skills</router-link></li>
              <!-- <li class="disabled"><router-link to="/Game/Species" class="dropdown-item">Species</router-link></li> -->
              <!-- <li><router-link to="/info/community-systems/story" class="dropdown-item">Stories</router-link></li> -->
            </ul>
          </li>
        </ul>

        <div class="dropdown text-end">
          <a id="navAccountMenu" class="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <!-- https://bootstrapshuffle.com/classes/borders/rounded-circle -->
            <!-- <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle"> -->
            <img src="/images/NekoGoo-head-only-50.png" alt="profile avatar" width="32" height="32" class="rounded-circle" />
          </a>
          <ul class="dropdown-menu text-small" aria-labelledby="navAccountMenu">
            <li><router-link to="/sitemap" class="dropdown-item">Sitemap</router-link></li>
            <li><a class="dropdown-item">Game Settings</a></li>
            <li><a class="dropdown-item">Profile</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item">Sign out</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss"></style>
