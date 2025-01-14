<template>
    <div class="body h-screen w-screen text-gray-200">
        <div class="vvsm:w-full vvsm:p-5 lg:p-20 lg:w-[500px] bg-[#001802] h-full flex flex-col justify-between">
            <div class="flex flex-row gap gap-2">
                <div class="w-16">
                    <img src="../../assets/images/Bm.svg" alt="">
                </div>
                <div class="font-poppins text-3xl font-bol py-4 flex justify-center h-full">
                    <span>BmBastha</span>
                </div>
            </div>
            <div class="font-poppins w-full flex flex-col items-center">
                <div>
                    <div class="text-5xl font-bold mb-5 gap gap-3 flex lg:flex-row vvsm:flex-col">
                        <span>Reset</span>
                        <span>Password</span>
                    </div>
                    <div class="mb-5 text-black">
                        <div class="flex-1 text-xl">
                            <input
                              v-model="email"
                              type="text"
                              class="vvsm:w-[280px] lg:w-[340px] h-[56px] border border-gray-600 bg-[#001802] text-gray-200 placeholder-gray-600 rounded-lg p-5 outline-none"
                              placeholder="Email"
                            />
                        </div>
                    </div>
                    <div @click="resetPassword" class="px-10 py-5 cursor-pointer rounded-lg hover:bg-[#164414] duration-200 bg-[#1f801a]">
                        <span>Reset</span>
                    </div>
                    <div class="px-10 py-5 text-gray-400 font-normal cursor-pointer hover:text-gray-300 duration-300">
                        <NuxtLink to="/admin"><span>SignIn</span></NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // Import the router

const email = ref('');
const router = useRouter(); // Initialize the router

const resetPassword = async () => {
  try {
    const response = await $axios.post('/auth/forgot-password', { email: email.value });
    console.log('Password Reset Requested', response.data);
    // After a successful password reset request, redirect to the sign-in page
    router.push('/admin');
  } catch (error) {
    console.error('Password Reset Failed', error);
    // Handle error (show error message)
  }
}
</script>
