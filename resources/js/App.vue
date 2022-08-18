<template>
    <v-input v-for="(entry, entryName) in attributes"
             :entryName="entryName"
             :entry="entry"

             ref="inputs"
    />

    <div class="mb-16"></div>
    <div class="m-2 fixed bottom-0">
        <button @click="generateRest" title="Generate rest" class="shadow-lg shadow-gray-500 p-2 mt-2 border border-gray-400 bg-gray-200 hover:bg-gray-300">
            Generate rest
        </button>

        <button @click="clearLocks" title="Clear locks" class="shadow-lg shadow-gray-500 p-2 mt-2 ml-2 border border-gray-400 bg-gray-200 hover:bg-gray-300">
            Clear locks
        </button>

        <button @click="exportCharacter" title="Export character" class="shadow-lg shadow-gray-500 p-2 mt-2 ml-2 border border-gray-400 bg-gray-200 hover:bg-gray-300">
            Export character
        </button>
    </div>
</template>

<script>
import download from "downloadjs";
import attributes from './data/attributes.json';
export default {
    name: "App",

    data() {
        return {
            attributes: attributes,
        }
    },

    methods: {
        generateRest() {
            for (let entry in this.$refs.inputs) {
                this.$refs.inputs[entry].generate();
            }
        },

        clearLocks() {
            for (let entry in this.$refs.inputs) {
                this.$refs.inputs[entry].locked = false;
            }
        },

        exportCharacter() {
            //TODO
            let dataset = [];
            for (let entry in this.$refs.inputs) {
                dataset[entry] = '\n' +
                    this.$refs.inputs[entry].entryName +
                    ': ' +
                    this.$refs.inputs[entry].value;
            }

            download(
                dataset,
                this.$refs.inputs[0].value !== undefined ? this.$refs.inputs[0].value : 'randomly generated character',
                'text/plain'
            );
        }
    }
}
</script>
