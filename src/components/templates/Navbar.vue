<template>
  <div class="drawer fixed">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <!-- Navbar -->
      <div class="w-full navbar fixed">
        <div class="flex-none lg:hidden">
          <label for="my-drawer-3" class="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </label>
        </div>
        <div class="flex-1 px-2 mx-2">
          <router-link to="/">
            <div class="font-extrabold text-2xl">CON<span class="text-tosca">NEXT</span></div>
          </router-link>
          <div class="flex justify-end w-full group md:hidden">
            <div v-if="!isLogin" class="flex items-center">
              <div class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle">
                  <div class="indicator">
                    <button class="btn btn-ghost btn-circle">
                      <div class="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                          />
                        </svg>
                        <span class="badge badge-sm bg-tosca border-tosca indicator-item">8</span>
                      </div>
                    </button>
                  </div>
                </label>
                <div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                  <div class="card-body">
                    <span class="font-bold text-lg">8 Items</span>
                    <span class="text-info">Subtotal: $999</span>
                    <div class="card-actions">
                      <button class="btn btn-primary btn-block">View cart</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                  <div class="w-10 rounded-full">
                    <img :src="displayPhoto" />
                  </div>
                </label>
                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-whiter-100 rounded-box w-52 text-darker-100">
                  <li class="justify-center">
                    <a class="active:bg-tosca active:text-darker-100">{{ displayName }}</a>
                  </li>
                  <div class="divider py-1"></div>
                  <li>
                    <a class="active:bg-tosca justify-between w-full active:text-darker-100"> Profile </a>
                  </li>
                  <li><a class="active:bg-tosca w-full active:text-darker-100">Settings</a></li>
                  <li :onclick="handleLogOut"><a class="active:bg-tosca w-full active:text-darker-100">Logout</a></li>
                </ul>
              </div>
            </div>
            <div v-else="isLogin">
              <router-link to="/login">
                <button class="mx-3 btn bg-tosca font-extrabold text-darker-100 px-7 text-md border-tosca hover:bg-transparent hover:border-tosca hover:text-tosca">LOGIN</button>
              </router-link>
            </div>
          </div>
        </div>
        <div class="flex-none hidden lg:block">
          <ul class="menu menu-horizontal text-sm">
            <!-- Navbar menu content here -->
            <li><router-link to="/" class="menuItem-active-link hover:bg-whiter-100/10">HOME</router-link></li>
            <li><router-link to="/dashboard" class="menuItem-active-link hover:bg-whiter-100/10">CONTACT</router-link></li>
            <li><router-link to="/settings" class="menuItem-active-link hover:bg-whiter-100/10">SETTINGS</router-link></li>
            <li><router-link to="/faq" class="menuItem-active-link hover:bg-whiter-100/10">FAQ</router-link></li>
            <li><router-link to="/terms-and-use" class="menuItem-active-link hover:bg-whiter-100/10">TERMS AND USE</router-link></li>
            <div v-if="!isLogin" class="flex items-center">
              <div class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle">
                  <div class="indicator">
                    <button class="btn btn-ghost btn-circle">
                      <div class="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                          />
                        </svg>
                        <span class="badge badge-sm bg-tosca border-tosca indicator-item">8</span>
                      </div>
                    </button>
                  </div>
                </label>
                <div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                  <div class="card-body">
                    <span class="font-bold text-lg">8 Items</span>
                    <span class="text-info">Subtotal: $999</span>
                    <div class="card-actions">
                      <button class="btn btn-primary btn-block">View cart</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                  <div class="w-10 rounded-full">
                    <img :src="displayPhoto" />
                  </div>
                </label>
                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-whiter-100 rounded-box w-52 text-darker-100">
                  <li class="justify-center">
                    <a class="active:bg-tosca active:text-darker-100">{{ displayName }}</a>
                  </li>
                  <div class="divider py-1"></div>
                  <li>
                    <a class="active:bg-tosca justify-between w-full active:text-darker-100"> Profile </a>
                  </li>
                  <li><a class="active:bg-tosca w-full active:text-darker-100">Settings</a></li>
                  <li :onclick="handleLogOut"><a class="active:bg-tosca w-full active:text-darker-100">Logout</a></li>
                </ul>
              </div>
            </div>
            <div v-else="isLogin">
              <router-link to="/login">
                <button class="mx-3 btn bg-tosca font-extrabold text-darker-100 px-7 text-md border-tosca hover:bg-transparent hover:border-tosca hover:text-tosca">LOGIN</button>
              </router-link>
            </div>
          </ul>
        </div>
      </div>
      <div class="h-screen bg-gradient">
        <slot name="navContent"></slot>
      </div>
    </div>
    <div class="drawer-side">
      <label for="my-drawer-3" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 bg-darker-200">
        <!-- Sidebar content here -->
        <li><router-link to="/" class="hover:bg-whiter-100/10">HOME</router-link></li>
        <li><router-link to="/dashboard" class="hover:bg-whiter-100/10">CONTACT</router-link></li>
        <li><router-link to="/settings" class="hover:bg-whiter-100/10">SETTINGS</router-link></li>
        <li><router-link to="/faq" class="hover:bg-whiter-100/10">FAQ</router-link></li>
        <li><router-link to="/terms-and-use" class="hover:bg-whiter-100/10">TERMS AND USE</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "../../store/useAuthStore";
const store = useAuthStore();
type displayPhoto = string | null;

const isLogin = Object.keys(store.user).length === 0;
const displayName: any = store.user.displayName;
const displayPhoto: any = store.user.profilePhoto;

const handleLogOut = () => {
  store.logOut();
};
</script>

<style scoped>
.router-link-exact-active.menuItem-active-link {
  border-bottom: 2px solid white;
  color: white;
}
.bg-gradient {
  background-image: linear-gradient(to right top, #1a1d26, #1b202d, #1b2333, #1a273a, #182a41);
}
/* .router-link-exact-active.menuItem-active-link:hover {
    border-bottom: 2px solid red;
    color: red;
  } */
</style>
