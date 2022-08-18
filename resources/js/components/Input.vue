<template>
    <div class="m-2">
        <label :for="entryName" class="block font-medium">{{entryName}}</label>
        <div class="flex">
            <input type="text" :id="entryName" v-model="value" class="border border-gray-400 block w-full p-2.5">
            <button title="Lock" @click="toggleLocked" class="w-12 text-2xl border-l-0 border border-gray-400" :class="locked?'bg-red-200 hover:bg-red-300':'bg-gray-200 hover:bg-gray-300'">
                <i class="icon-lock"></i>
            </button>
            <button v-if="entry.length" title="Generate" @click="generate" class="w-12 text-2xl border-l-0 border border-gray-400 bg-gray-200 hover:bg-gray-300">
                <i class="icon-generate"></i>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Input",

    props: [
        'entryName',
        'entry'
    ],

    data() {
        return {
            locked: false,
            value: ''
        }
    },

    methods: {
        generate() {
            if (this.locked || !this.entry.length) {
                return;
            }

            let randomNum = Math.floor(Math.random() * this.entry.length);

            this.value = this.entry[randomNum];
        },

        toggleLocked() {
            this.locked = !this.locked;
        }
    }
}
</script>
