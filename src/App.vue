<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-primary bg-body-tertiary sticky-top bg-primary-border-subtle">
      <div>

        <button class="navbar-toggler mx-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar">
          <i class="bi bi-list"></i>
        </button>
        <a class="navbar-brand m-3" href="#">多维变奏MDV</a>
        <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
          id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <a class="nav-link active text-dark" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item text-dark" href="#">Action</a></li>
                  <li><a class="dropdown-item text-dark" href="#">Another action</a></li>
                  <li>
                    <hr class="dropdown-divider">
                  </li>
                  <li><a class="dropdown-item text-dark" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <form class="d-flex mt-3" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </nav>

    <div class="bottm d-flex flex-row">
      <div class="side  d-flex flex-column">
        <div class="box d-flex flex-row position-relative" v-for="view in views" :key="view.name" @click="to_(view.id)">
          <h4 class="text-center icon my-2"><i :class=view.i></i></h4>
          <p class="text my-auto ps-3 stretched-link click">{{view.name}}</p>
        </div>
        <div class="box d-flex flex-row mt-auto ">
          <h4 class="text-center icon my-3"><i class="bi bi-indent"></i></h4>
          <p class="text my-auto ps-3">退出登录</p>
        </div>
      </div>
      <router-view></router-view>
    </div>




  </div>
</template>

<script>
import { _push } from "@/scripts/page";
export default {
  name: 'App',
  data() {
    return {
      views: [{ i: "bi bi-house-door", name: "宣传公告",id:"propaganda"},
      { i: "bi bi-person", name: "个人中心" ,id:"personal"},
      { i: "bi bi-cash-coin", name: "我的积分",id:"inregral" },
      { i: "bi bi-coin", name: "我的代币",id:"coin" },
      { i: "bi bi-gift", name: "礼物列表" ,id:"gift"},
      { i: "bi bi-box-seam", name: "已定礼物",id:"order" },
      { i: "bi bi-truck", name: "已发货",id:"delivergoods" }],
    }
  },
  methods:{
    to_(id){
      if(id==='propaganda'){
        _push(window,"")
      }else{
        _push(window,id)
      }
    }
  }
}
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css");

#app {
  height: 100vh;
  background-color: #eeeeee;
}

i {
  color: #000000;
}

.bottm {
  height: calc(100% - 46.5px);
}
.click{
  cursor:pointer;
}
.side {
  height: 100%;
  width: 220px;
  background-color: #ffffff;
  left: 50px;
  transition: all 0.2s;
}

.side>.box>.icon {
  width: 55px;
}

.row {
  background-color: #fff;
  width: 100%;
}

.side>.box:hover {
  background-color: #e9f2f9;
  color: #40a9ff;
}

.side>.box:hover>.icon>i:nth-child(n) {
  color: #40a9ff;
}


</style>
