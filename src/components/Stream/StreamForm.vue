<template>
  <div class="stream-add-container">
    <div class="header-div">
      <span>
        <router-link :to="{ name: 'stream' }">
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
        </router-link>
      </span>
      <h1 v-if="$route.params.id == null">Add Stream</h1>
      <h1 v-if="$route.params.id != null">Update Stream</h1>
    </div>
    <div class="main">
      <div class="input-div">
        <div class="input-container">
          <label class="input-label"
            >Enter title of stream<span class="text-red-600">*</span></label
          >
          <input
            type="text"
            v-model="title"
            name="title"
            placeholder="Science, Commerce, Arts, Law"
          />
          <div class="error-div" v-if="errMsg.title">
            <span class="text-red-600"
              ><i class="fa fa-exclamation-circle" aria-hidden="true"></i>
            </span>
            <span class="text-red-600 p-1">{{ errMsg.title }}</span>
          </div>
        </div>
        <div class="input-container">
          <label class="input-label"
            >Enter details of stream<span class="text-red-600">*</span></label
          >
          <textarea
            v-model="details"
            name="details"
            rows="10"
            placeholder="Main stream of law faculties"
          />
          <div class="error-div" v-if="errMsg.details">
            <span class="text-red-600"
              ><i class="fa fa-exclamation-circle" aria-hidden="true"></i>
            </span>
            <span class="text-red-600 p-1">{{ errMsg.details }}</span>
          </div>
        </div>
        <button v-if="$route.params.id == null" @click="createStream">
          Create Stream
        </button>
        <button v-if="$route.params.id != null" @click="updateStream">
          Save Stream
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StreamAdd",
  data: () => {
    return {
      title: "",
      details: "",
      errMsg: [],
      formErrors:[]
    };
  },
  watch: {
    title(value) {
      this.title = value;
      this.validateTitle(value);
    },
    details(value) {
      this.details = value;
      this.validateDetails(value);
    },
  },
  methods: {
    validateTitle(value) {
      if (value.length == 0) {
        this.errMsg["title"] = "Title cannot be empty";
      } else if (value.length < 3) {
        let difference = 3 - value.length;
        this.errMsg["title"] =
          "Title Must be of minimum 3 characters! " +
          difference +
          " characters left";
      } else {
        this.errMsg["title"] = "";
      }
    },
    validateDetails(value) {
      if (value.length == 0) {
        this.errMsg["details"] = "Details cannot be empty";
      } else if (value.length < 8) {
        let difference = 8 - value.length;
        this.errMsg["details"] =
          "Details Must be of minimum 8 characters! " +
          difference +
          " characters left";
      } else {
        this.errMsg["details"] = "";
      }
    },

    createStream() {
      console.log("Create API called");
    },
    updateStream() {
      console.log("Update API called");
    },
  },
  mounted() {
    if (this.$route.params.id != null) {
      const stream = {
        title: "Science",
        details: "Main stream of all sciences faculties",
      };
      this.title = stream.title;
      this.details = stream.details;
    }
  },
};
</script>

<style lang="scss" scoped>
$bg-primary: #2980b9;
$bg-primary-faded: #dfe7f3;
$bg-primary-hover: #02409ee3;
$bg-primary-header: #297fb9d3;

.header-div {
  display: flex;
  align-items: center;
  h1 {
    margin-left: 2rem;
    font-size: 1.5rem;
    font-weight: bold;
  }
  .fa {
    font-size: 1.5rem;
    padding: 4px 8px 4px 0;
    border-radius: 4px;
  }
}
.stream-add-container {
  min-height: inherit;
  display: flex;
  flex-direction: column;
  max-width: 70%;
  margin: 0 auto;
}
.main {
  //   margin-top: 100px;
  //   width: 50%;
  //   margin: 0 auto;
  min-height: 400px;
  display: flex;
  // justify-content: center;
  align-items: center;
}
.input-div {
  margin: 16px 0 16px 0;
  margin-top: 100px;
  width: 75%;
  //   margin: 0 auto;
  button {
    margin-top: 16px;
    text-align: center;
    padding: 8px 16px;
    text-decoration: none;
    font-size: 1rem;
    transition: all 0.3s;
    border-radius: 4px;
    background-color: $bg-primary;
    color: whitesmoke;
    // font-size: 1.2rem;
    font-weight: bold;
  }
  button:hover {
    background-color: $bg-primary-hover;
    color: #dfe7f3;
  }
}
.input-container {
  display: flex;
  flex-direction: column;
  margin-top: 16px;
}
.input-container input {
  position: relative;
  width: 100%;
  height: 50px;
  font-family: "Noto Sans", sans-serif;
  font-size: 1.2rem;
  outline: none;
  background: #f1f1f1;
  box-shadow: none;
  border: 1px solid rgba(66, 65, 65, 0.219);
  border-radius: 4px;
  padding: 4px 8px;
}

.input-container textarea {
  position: relative;
  width: 100%;
  height: 100px;
  font-family: "Noto Sans", sans-serif;
  font-size: 1.2rem;
  outline: none;
  background: #f1f1f1;
  box-shadow: none;
  border: 1px solid rgba(66, 65, 65, 0.219);
  border-radius: 4px;
  padding: 4px 8px;
  resize: none;
}
@media screen and (max-width: 768px) {
  .stream-add-container {
    max-width: none;
    margin-left: 100px;
  }
}
</style>