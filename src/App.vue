<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-primary bg-body-tertiary sticky-top bg-primary-border-subtle">
      <div>

        <button class="navbar-toggler mx-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar">
          <span class="navbar-toggler-icon"></span>
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
    <div class="side  d-flex flex-column">
      <div class="box d-flex flex-row">
        <h3 class="text-center icon my-2"><i class="bi bi-house-door"></i></h3>
        <h5 class="text my-auto">宣传公告</h5>
      </div>
      <div class="box d-flex flex-row">
        <h3 class="text-center icon my-2"><i class="bi bi-person"></i></h3>
        <h5 class="text my-auto">个人中心</h5>
      </div>
      <div class="box d-flex flex-row">
        <h3 class="text-center icon my-2"><i class="bi bi-cash-coin"></i></h3>
        <h5 class="text my-auto">我的积分</h5>
      </div>
      <div class="box d-flex flex-row">
        <h3 class="text-center icon my-2"><i class="bi bi-coin"></i></h3>
        <h5 class="text my-auto">我的代币</h5>
      </div>
      <div class="box d-flex flex-row">
        <h3 class="text-center icon my-2"><i class="bi bi-gift"></i></h3>
        <h5 class="text my-auto">礼物列表</h5>
      </div>
      <div class="box d-flex flex-row">
        <h3 class="text-center icon my-2"><i class="bi bi-box-seam"></i></h3>
        <h5 class="text my-auto">已定礼物</h5>
      </div>
      <div class="box d-flex flex-row">
        <h3 class="text-center icon my-2"><i class="bi bi-truck"></i></h3>
        <h5 class="text my-auto">已发货</h5>
      </div>
      <div class="box d-flex flex-row mt-auto">
        <h3 class="text-center icon my-2"><i class="bi bi-indent"></i></h3>
        <h5 class="text my-auto">退出登录</h5>
      </div>
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css");
#app {
  height: 100vh;
  background-color: #eeeeee;
}
i{
  color: #000000;
}

.side {
  height: calc(100% - 56px);
  width: 55px;
  background-color: #ffffff;
  left: 50px;
  transition: all 0.2s;
}
.side>.box>.icon{
  width: 55px;
}
.side>.box>.text{
  width: 0px;
  opacity:0;
  transition: all 0.2s;
}
.side>.box>h5{
  white-space: nowrap;
  text-overflow : clip;
}


.side:hover {
  width:220px
}
.side:hover>.box>.text:nth-child(n){
  width: 165px;
  opacity:1;
}

.side>.box:hover{
  background-color: #e9f2f9;
  color: #40a9ff;
}
.side>.box:hover>.icon>i:nth-child(n){
  color: #40a9ff;
}
</style>
