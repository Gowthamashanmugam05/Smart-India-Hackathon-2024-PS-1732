// script.js

document.addEventListener("DOMContentLoaded", function() {
    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('fileInput');
    const selectFilesButton = document.getElementById('selectFiles');
    const uploadButton = document.getElementById('uploadButton');
    const previewArea = document.getElementById('preview');

    // Handle drag and drop functionality
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.classList.add('drag-over');
    });

    uploadArea.addEventListener('dragleave', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('drag-over');
    });

    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('drag-over');
        const files = e.dataTransfer.files;
        handleFiles(files);
    });

    // Open file dialog when clicking on "Select Images" button
    selectFilesButton.addEventListener('click', () => {
        fileInput.click();
    });

    // Handle file input change event
    fileInput.addEventListener('change', (e) => {
        const files = e.target.files;
        handleFiles(files);
    });

    // Handle image upload (dummy function)
    uploadButton.addEventListener('click', () => {
        alert('Images Uploaded Successfully!');
        previewArea.innerHTML = ''; // Clear preview area
        fileInput.value = ''; // Clear file input
    });

    // Function to handle files and preview images
    function handleFiles(files) {
        previewArea.innerHTML = '';
        for (const file of files) {
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    const imgElement = document.createElement('img');
                    imgElement.src = event.target.result;
                    previewArea.appendChild(imgElement);
                }
                reader.readAsDataURL(file);
            }
        }
    }
});
