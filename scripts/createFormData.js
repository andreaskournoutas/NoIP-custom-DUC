function createFormData(form) {
    console.log('Creating formdata...');
    let formData = new FormData(form);
    localStorage.setItem('hostname', formData.get('hostname'));
    formData.delete('hostname');
    showApp(formData, localStorage.getItem(hostname));
}