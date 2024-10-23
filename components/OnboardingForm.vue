<template>
    <form @submit.prevent="handleSubmit">
        <div class="w-full h-[162px]">
            <transition name="fade">
                <div  class="w-full h-full">
                    <div class="form-item mb-3">
                        <label
                            for="email-address"
                            class="mb-1 d-block wt-600"
                            >Email</label
                        >
                        <input
                            type="email"
                            name="email-address"
                            v-model="user.email"
                            id="email-address"
                            class="email-input d-block"
                            placeholder="john.smith@gmail.com"
                            @input="checkCredentialFill"
                        />
                    </div>
                    <div class="form-item clearfix relative">
                        <label
                            for="password"
                            class="mb-1 d-block wt-600 d-block"
                            >Password</label
                        >
                        <input
                            :type="passwordFieldType"
                            name="password"
                            v-model="user.password"
                            id="password"
                            class="email-input d-block mb-2"
                            placeholder="8+ characters"
                            @input="checkCredentialFill"
                        />
                        <span
                            class="password-view"
                            @click="switchPasswordFieldType"
                            ><i :class="passwordViewIcon"></i
                        ></span>
                    </div>
                </div>
            </transition>
        </div>
        <div class="form-item clearfix relative">
            <NuxtLink
                to="/forget-password"
                style="float: right"
                v-if="page == 'login'"
                >Forgot password?</NuxtLink
            >
        </div>
        <div class="divider mb-32">or</div>
        <div class="social-signup mb-32">
            <button
                type="button"
                class="google text-start w-full seo-btn border-0 rounded-5 seo-btn__transparent ps-2"
                @click="socialLogin('google')"
            >
                <img src="/images/google.png" alt="" class="me-2" />
                <span>Continue with Google</span>
            </button>
        </div>
        <button
            :disabled="!btnActive || loading"
            type="submit"
            class="login-button mb-6 login-submit flex items-center justify-center"
            @keyup.enter="handleSubmit"
            :class="[btnActive ? 'credentialfilled' : '']"
        >
            <forsvgMyBlueBtnSpinner v-if="loading" />
            <span v-else> {{ fromBtnText }}</span>
        </button>
    </form>
</template>


<script setup>
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


// Props
const props = defineProps({
  fromBtnText: String,
  termcheck: Boolean,
  page: String,
  loading: Boolean
});

// State
const user = ref({
  email: "",
  password: ""
});
const isCredentialsFilled = ref(false);
const show = ref(false);
const passwordFieldType = ref("password");
const passwordViewIcon = ref("fa-light fa-eye");
const nuxtApp = useNuxtApp();
const router = useRouter();
// Computed property for button activation
const btnActive = computed(() => {
  return true;
});

onMounted(() => {
    setTimeout(() => {
            show.value = true;
        }, 200)
});


const handleSubmit = () => {

};


const socialLogin = async (service) => {

  const provider = new GoogleAuthProvider();
      try {
     
        const result = await signInWithPopup(nuxtApp.$auth, provider);
        console.log('User logged in:', result);
        router.push('/')
      } catch (error) {
        console.error('Error during Google sign-in:', error);
      }
};

const checkCredentialFill = () => {
  
};


const switchPasswordFieldType = () => {

};


const switchPasswordViewIcon = () => {

};
</script>

<style scoped lang="scss">
.password-view {
    position: absolute;
    top: 36px;
    right: 10px;
    font-size: 23px;
    z-index: 2;
    cursor: pointer;
    color: $n400;
}
.credentialfilled {
    background: $b400;
    color: white;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease-in;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}
</style>
