<template>
    <section
        class="login-wrapper flex justify-center items-start h-screen relative"
    >
        <div class="login-content bg-white rounded-5 mb-[48px]">
            <nuxt-link class="w-full inline-block text-center" to="/"
                ><img
                    src="/images/login-logo.png"
                    alt=""
                    class="login-logo d-block mb-32 mt-6"
                />
            </nuxt-link>
            <div class="divider mb-32">Log in to Your Account</div>
            <div class="login-form">
                <OnboardingForm
                    :fromBtnText="btnText"
                    @form-submit="loginAccount"
                    :page="page"
                    :loading="loading"
                />
                <div class="terms-conditions mb-6 ms-4">
                    <input
                        type="checkbox"
                        name="terms-conditions"
                        id="terms-conditions"
                        class="me-2"
                    />
                    <label for="terms-conditions">Keep me logged in</label>
                </div>
                <p class="text-center">
                    Don't have an account?
                    <NuxtLink to="/sign-up">Create a new one.</NuxtLink>
                </p>
            </div>
        </div>
        <div class="custom-shape-divider-top-1641529306">
            <forsvgLoginBg />
        </div>
    </section>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const btnText = ref("Sign In");
const page = ref("login");
const loading = ref(false);
const runtimeConfig = useRuntimeConfig();


const  loginAccount = async(user) => {
                   
}
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
</style>
