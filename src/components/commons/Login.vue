<template>
  <div class="w-112 mx-auto">
    <h3 class="font-bold text-center text-xl">
      Để tiếp tục, hãy đăng nhập vào Spotify.
    </h3>
    <form @submit.prevent="formLogin" action="">
      <label class="font-semibold mb-3/2 block mt-3" for=""
      >Địa chỉ emial hoặc tên người dùng</label
      >
      <input
          v-model="user.userName"
          type="text"
          class="
          w-full
          h-10
          py-3/2
          px-3
          font-semibold
          text-font-login text-base
          focus:outline-none focus:border-gray
        "
          style="border: 1px solid #d9dadc"
          placeholder="Địa chỉ email hoặc tên người dùng"
      />
      <p class="text-red-500">{{ error }}</p>
      <label class="font-semibold mb-3/2 block mt-3" for="">Mật khẩu</label>
      <input
          v-model="user.password"
          type="password"
          class="
          w-full
          h-10
          py-3/2
          px-3
          font-semibold
          text-font-login text-base
          focus:outline-none focus:border-gray
        "
          style="border: 1px solid #d9dadc"
          placeholder="Mật khẩu"
      />
      <p class="mt-3 mb-4">
        <a class="underline text-sm text-gray" href=""
        >Quên mật khẩu của bạn?</a
        >
      </p>
      <div class="flex mt-5 justify-between items-center">
        <div class="font-normal flex items-center">
          <input type="checkbox" class="w-4 h-4" style="color: #616467" />
          <span class="pl-3">Hãy nhớ tôi</span>
        </div>
        <button
            class="
            font-bold
            text-white
            rounded-full
            w-56
            p-3
            bg-greener
            hover:bg-green
          "
        >
          Đăng nhập
        </button>
      </div>
    </form>
    <div
        class="w-full h-px"
        style="
        border-top: 1px solid #d9dadc;
        line-height: 1px;
        margin: 15px 0;
        position: relative;
      "
    ></div>
    <h3 class="text-center font-bold my-5">Bạn chưa có tài khoản?</h3>
    <button
        @click="register"
        class="
        w-full
        bg-white
        hover:bg-login hover:text-white
        text-font-login
        shadow-login
        rounded-full
        px-3
        pt-4
        pb-4
      "
    >
      ĐĂNG KÝ SPOTIFY
    </button>
  </div>
</template>
<style lang="scss" scoped>
</style>
