<script>
export default {
    name: "OTPAuth",
};
</script>

<template>
    <section id="register">
        <div class="flex h-screen">
            <div class="flex-row bg-orange-400 m-auto w-1/4 h-1/3">
                <p class="mt-8 ml-8">a verification code has been sent to</p>
                <p class="mt-2 ml-8">please insert your 4-digit verification code:</p>
                <input type="text" class="mt-4 ml-8 w-1/4" maxlength="4" />
                <Button
                    class="mt-8 w-9/12 ml-8 mr-8 px-6 py-2 border-2 border-red-600 text-red-700 bg-white font-medium text-xs leading-tight uppercase rounded hover:scale-110 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    @click.prevent="methodLogin(username, password)"
                >
                    Submit Verification</Button
                >
                <Button
                    class="mt-8 w-9/12 ml-8 mr-8 px-6 py-2 border-2 border-red-600 text-red-700 bg-white font-medium text-xs leading-tight uppercase rounded hover:scale-110 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    @click.prevent="methodLogin(username, password)"
                >
                    Request a new OTP</Button
                >
            </div>
        </div>
    </section>
</template>
