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
                    <div class="text-5xl font-bold mb-5">
                        <span>LogIn</span>
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
                    <div class="mb-5 text-black">
                        <div class="flex-1 text-xl">
                            <input
                              v-model="password"
                              type="password"
                              class="vvsm:w-[280px] lg:w-[340px] h-[56px] border border-gray-600 bg-[#001802] text-gray-200 placeholder-gray-600 rounded-lg p-5 outline-none"
                              placeholder="Password"
                            />
                        </div>
                    </div>
                    <div @click="login" class="px-10 py-5 rounded-lg hover:bg-[#164414] duration-200 bg-[#1f801a]">
                        <span>SignIn</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter();

const login = async () => {
  try {
    const response = await $axios.post('/auth/login', {
      email: email.value,
      password: password.value,
    });
    console.log('Login Successful', response.data);
    router.push('/admin/charts');
  } catch (error) {
    console.error('Login Failed', error);
  }
}
</script>
