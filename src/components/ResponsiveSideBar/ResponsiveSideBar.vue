<template>
  <div id="allTheNav">
    <nav id="navigator" class="navbar" :class="{ navbaropen: opened }">
      <span class="open-slide">
        <a href="#" @click="opened = !opened">
          <div>
            <div class="bars" :class="{ topopen: opened }"></div>
            <div class="bars" :class="{ midopen: opened }"></div>
            <div class="bars" :class="{ botopen: opened }"></div>
          </div>
        </a>
      </span>
      <ul class="navbar-nav">
        <li>
          <router-link class="nav-link active-link" to="/">Home</router-link>
        </li>
        <li>
          <router-link class="nav-link" to="/streams">Streams</router-link>
        </li>
        <li>
          <router-link class="nav-link" to="/courses">Courses</router-link>
        </li>
        <li>
          <router-link class="nav-link" to="/departments"
            >Departments</router-link
          >
        </li>
        <li>
          <router-link class="nav-link" to="/classes">Classes</router-link>
        </li>
        <li>
          <router-link class="nav-link" to="/subjects">Subjects</router-link>
        </li>
      </ul>
    </nav>
    <div id="side-menu" class="side-nav" :class="{ sidenavopen: opened }">
      <router-link class="nav-link active-link" to="/">
        <span> <i class="fa fa-home" aria-hidden="true"></i> </span
        ><span class="side-link-title">Home</span></router-link
      >
      <router-link class="nav-link" to="/streams">Streams</router-link>
      <router-link class="nav-link" to="/courses">Courses</router-link>
      <router-link class="nav-link" to="/departments">Departments</router-link>
      <router-link class="nav-link" to="/classes">Classes</router-link>
      <router-link class="nav-link" to="/subjects">Subjects</router-link>
    </div>
    <div id="main" :class="{ mainopen: opened }">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "ResponsiveSideBar",
  data: () => {
    return {
      opened: false,
    };
  },
};
</script>

<style lang="scss" scoped>
$bg-primary: #2980b9;
$bg-primary-faded: #dfe7f3;

.navbar {
  background-color: $bg-primary-faded;
  overflow: hidden;
  color: #081530;
}

.navbaropen {
  //   background-color: #3b5998;
  overflow: hidden;
  margin-left: 200px;
}

.navbar a {
  float: left;
  display: block;
  //   color: #f2f2f2;
  text-align: center;
  padding: 8px 16px;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s;
  border-radius: 4px;
  margin-left: 8px;
}

.nav-link:hover {
  background-color: $bg-primary;
  color: #dfe7f3;
}
.active-link {
  background-color: $bg-primary;
  color: #dfe7f3;
}

.navbar ul {
  margin: 8px 0 0 0;
  list-style: none;
  display: flex;
  justify-content: flex-end;
}

// .navbar a:hover {
//   background-color: $bg-primary;
//   color: whitesmoke;
// }

.side-nav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: $bg-primary-faded;
  opacity: 0.9;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.3s;
}

.sidenavopen {
  height: 100%;
  width: 250px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: $bg-primary-faded;
  opacity: 0.9;
  overflow-x: hidden;
  padding: 16px 16px;
  //   padding-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: 0.3s;
  border-right: 2px dotted $bg-primary;
}

.side-nav a {
  padding: 10px 8px 10px 8px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  color: #081530;
  display: block;
  border-radius: 4px;
  transition: 0.3s;
  margin-top: 8px;
  // text-align: center;
}

.side-nav a:hover {
  background-color: $bg-primary;
  color: #dfe7f3;
}
.side-nav .active-link {
  color: whitesmoke;
}
.side-nav .fa {
  font-size: 1.2rem;
  margin-left: 8px;
}
.side-nav .side-link-title {
  margin-left: 32px;
}
.side-nav .btn-close {
  position: absolute;
  top: 0;
  right: 22px;
  font-size: 36px;
  margin-left: 50px;
}

#main {
  transition: margin-left 0.3s;
  padding: 20px;
  //   overflow: hidden;
  //   width: 100%;
  min-height: 84vh;
  background: #f1f1f1;
}

.mainopen {
  transition: margin-left 0.3s;
  padding: 20px;
  //   overflow: hidden;
  //   width: auto;
  margin-left: 250px;
  word-wrap: break-word;
}

nav {
  transition: margin-left 0.3s;
}

.bars {
  display: block;
  height: 4px;
  width: 30px;
  background: #000;
  margin: 5px auto;
}

.midopen {
  width: 0;
}
.bar {
  transition: all 0.3s ease;
}
.topopen {
  transform: translateY(10px) rotateZ(45deg);
}
.botopen {
  transform: translateY(-10px) rotateZ(-45deg);
}

</style>