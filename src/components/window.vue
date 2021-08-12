<template>
  <body>
    <section id="title">
      <p>UNIP</p>
    </section>
    <Status/>
    <div id="button-container">
      <svg
        @click="minimize()"
        fill="#858585"
        width="20"
        height="20"
        viewBox="0 0 512 512"
      >
        <path
          d="M416.667,0H95.333C42.766,0,0,42.767,0,95.334v321.333C0,469.233,42.766,512,95.333,512h321.334    C469.234,512,512,469.233,512,416.667V95.334C512,42.767,469.234,0,416.667,0z M482,416.667C482,452.691,452.692,482,416.667,482    H95.333C59.308,482,30,452.691,30,416.667V95.334C30,59.309,59.308,30,95.333,30h321.334C452.692,30,482,59.309,482,95.334    V416.667z"
          data-original="#000000"
        />
        <path
          d="M400.601,241H111.399c-8.284,0-15,6.716-15,15s6.716,15,15,15H400.6c8.284,0,15-6.716,15-15    C415.601,247.716,408.885,241,400.601,241z"
          data-original="#000000"
        />
      </svg>
      <svg
        @click="close()"
        width="20"
        height="20"
        viewBox="0 0 512 512"
        fill="#858585"
      >
        <path
          d="M437.019,74.98C388.667,26.628,324.379,0,256,0S123.333,26.628,74.981,74.981C26.629,123.333,0,187.62,0,256.001    c0,68.38,26.628,132.668,74.98,181.02C123.332,485.371,187.619,512,255.999,512s132.668-26.628,181.02-74.98    C485.371,388.667,512,324.38,512,256S485.371,123.333,437.019,74.98z M415.806,415.807C373.12,458.492,316.366,482,255.999,482    s-117.121-23.508-159.806-66.193C53.507,373.121,30,316.368,30,256.001S53.509,138.88,96.194,96.194    C138.88,53.508,195.633,30,256,30s117.12,23.508,159.807,66.193C503.922,184.311,503.922,327.689,415.806,415.807z"
          data-original="#000000"
        />
        <path
          d="M368.854,347.642l-91.641-91.641l91.641-91.641c5.857-5.858,5.857-15.355-0.001-21.212    c-5.857-5.858-15.355-5.858-21.213,0L256,234.788l-91.641-91.641c-5.857-5.858-15.355-5.858-21.213,0    c-5.858,5.858-5.858,15.355,0,21.213l91.641,91.641l-91.641,91.641c-5.858,5.858-5.858,15.355,0,21.213    c2.929,2.929,6.768,4.393,10.606,4.393c3.839,0,7.678-1.464,10.607-4.393L256,277.214l91.641,91.641    c2.929,2.929,6.768,4.393,10.607,4.393s7.678-1.464,10.606-4.393C374.712,362.997,374.712,353.5,368.854,347.642z"
          data-original="#000000"
        />
      </svg>
    </div>
  </body>
</template>

<script>
const { remote } = window.require("electron");
import Status from "../components/login-status";

export default {
  name: "window",
  components: {
    Status,
  },
  methods: {
    minimize: function () {
      remote.BrowserWindow.getFocusedWindow().minimize();
    },
    close: function () {
      remote.BrowserWindow.getFocusedWindow().close();
    },
  },
};
</script>

<style scoped>
body {
  display: flex;
  flex-direction: row;
  -webkit-app-region: drag;
  background-color: rgb(37, 37, 37);
  height: 30px;
  width: 100vw;
}
#button-container {
  display: flex;
  margin-top: auto;
  margin-bottom: auto;
}
#button-container > svg {
  -webkit-app-region: no-drag;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  cursor: pointer;
}
svg:last-child:hover {
  background-color: rgb(185, 9, 9);
  fill: white;
}
svg:first-child:hover {
  background-color: rgb(66, 66, 66);
}

#title {
  display: flex;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 10px;
  color: rgb(88, 88, 88);
  font-style: italic;
}
</style>