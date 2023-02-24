<template>
	<div id="app">
		<DropZone class="drop-area" @files-dropped="addFiles" #default="{ dropZoneActive }">
			<label for="file-input">
				<span v-if="dropZoneActive">
					<span>Drop Them Here</span>
					<span class="smaller">to add them</span>
				</span>
				<span v-else>
					<span>Arraste seus arquivos</span>
					<span class="smaller">
						ou <strong><em>Clique aqui</em></strong> para escolher os arquivos
					</span>
				</span>

				<input type="file" id="file-input" multiple @change="onInputChange" />
			</label>
			<ul class="image-list" v-show="files.length">
				<FilePreview v-for="file of files" :key="file.id" :file="file" tag="li" @remove="removeFile" />
			</ul>
		</DropZone>
		<button @click.prevent="uploadFiles(files)" class="upload-button">Upload</button>
	</div>
</template>

<script setup lang="ts">
// Components
import DropZone from './components/DropZone.vue'
import FilePreview from './components/FilePreview.vue'
// File Management
import useFileList from './compositions/file-list'
import createUploader from './compositions/file-uploader'

const { files, addFiles, removeFile } = useFileList()
function onInputChange(e) {
	addFiles(e.target.files)
	e.target.value = null 
	// reset so that selecting the same file again will still cause it to fire this change
}

// Uploader
const { uploadFiles } = createUploader('YOUR URL HERE')
</script>