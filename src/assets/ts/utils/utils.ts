export function startPreloader() {
    var preloader = document.createElement('div') as HTMLDivElement;
    preloader.id = 'preloader';
    document.body.appendChild(preloader);
}
export function endPreloader() {
    var preloader = document.getElementById('preloader') as HTMLDivElement;
    if (preloader) {
        preloader.remove();
    }
}
